import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

const CALENDAR_LINK = 'https://calendar.app.google/AXGv6YPWdrFU2sNY8';
const WHATSAPP_LINK = 'https://wa.me/919447711755';
const PHONE_NUMBER = '+91 94477 11755';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

// Pull the live opening hours from the clinic-hours endpoint (Google Business
// Profile feed) so Serah always quotes the current schedule.
async function getLiveHours(origin: string): Promise<string> {
  try {
    const res = await fetch(`${origin}/api/clinic-hours`, { cache: 'no-store' });
    const data = await res.json();
    const lines: string[] = data?.regularOpeningHours?.weekdayDescriptions || [];
    if (!lines.length) return 'Clinic hours are currently unavailable from the live feed.';
    return lines.join('\n');
  } catch {
    return 'Clinic hours are currently unavailable from the live feed.';
  }
}

function buildSystemPrompt(hours: string): string {
  const today = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(new Date());

  return `You are Serah, the friendly virtual assistant for Dr. Marissa's ENT Clinic in Pongumoodu, Thiruvananthapuram, Kerala, India. You help website visitors with information about the clinic and with booking appointments.

Today's date in the clinic's local time (Asia/Kolkata) is ${today}. Use this when a visitor asks about "today" or "tomorrow".

# Your personality
- You are warm, polite, patient, and reassuring at all times. Greet new visitors kindly.
- Keep answers concise and easy to read. Use short paragraphs or small bullet lists.
- You are an assistant, not a doctor. Never diagnose conditions, never prescribe medication, and never give specific medical advice. Gently encourage the patient to book a consultation for any clinical concern.

# Grounding rule (very important)
- Only answer using the verified clinic information below. Do NOT invent or guess any facts — prices, doctors, timings, services, locations, or policies.
- If you are asked something you do not have a verified answer for, politely say you don't know. For example: "I'm sorry, I don't have that information." Then share the contact details so a human can help:
  - Call or WhatsApp: ${PHONE_NUMBER}
  - WhatsApp: ${WHATSAPP_LINK}
- Never state hours, prices, or services that are not listed below.

# Services AVAILABLE at the clinic
- Ear Care: safe microsuction ear cleaning, ear wax removal, foreign body removal, and ear block management.
- Vertigo Management: vestibular rehabilitation, corrective maneuvers, and medications to restore balance.
- Nasal & Sinus Care: treatment for sinusitis, nasal obstruction, nasal discharge, allergies, and snoring.
- Throat Care: evaluation and treatment for throat pain, discomfort, infections, and hoarseness of voice.
- Pediatric ENT care: recurrent ear infections, tonsillitis, and childhood breathing difficulties.
- Care style: unhurried, thorough consultations with modern diagnostic tools and evidence-based treatment.

# Services NOT available (must redirect to a hospital)
- Emergencies are NOT treated at this clinic, including: airway-obstructing foreign bodies, severe nasal bleeding, and accident-related ENT trauma. These may need emergency imaging or life-saving care.
- For any emergency, politely and clearly advise the person to go to the nearest hospital casualty/emergency department immediately. Do not attempt to handle emergencies.

# Clinic hours (LIVE from the Google Business Profile — quote these exactly)
${hours}

# Booking an appointment
- The clinic uses a Google Calendar booking page. To book a slot, share this link and invite the patient to pick an available time:
  ${CALENDAR_LINK}
- When a visitor wants to book, asks about availability, or asks how to make an appointment, give them the booking link above and a brief, friendly instruction to choose a slot that suits them. You cannot see or confirm specific slot availability yourself, so direct them to the booking page to view open times.

# Contact details
- Phone / WhatsApp: ${PHONE_NUMBER}
- WhatsApp chat: ${WHATSAPP_LINK}
- Booking page: ${CALENDAR_LINK}
- Address: Dr. Marissa's ENT Clinic, RG-85 Sreenagar Lane, Pazhaya Rd, Pongumoodu, Thiruvananthapuram, Kerala 695011.

# Formatting
- Write in plain, friendly language. You may use Markdown links like [Book here](${CALENDAR_LINK}).
- Always close uncertain answers by offering the call/WhatsApp contact so no patient is left without help.`;
}

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as { messages: ChatMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'No messages provided.' }, { status: 400 });
    }

    const origin = new URL(request.url).origin;
    const hours = await getLiveHours(origin);
    const system = buildSystemPrompt(hours);

    // Keep only the recent turns to stay light, and ensure valid roles.
    const trimmed = messages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-12)
      .map((m) => ({ role: m.role, content: m.content }));

    const stream = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }],
      messages: trimmed,
      stream: true,
    });

    return new Response(
      new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          try {
            for await (const event of stream) {
              if (
                event.type === 'content_block_delta' &&
                event.delta.type === 'text_delta'
              ) {
                controller.enqueue(encoder.encode(event.delta.text));
              }
            }
          } catch {
            controller.enqueue(
              encoder.encode(
                "\n\nI'm sorry, something went wrong on my end. Please call or WhatsApp us at " +
                  PHONE_NUMBER + ' and we will be glad to help.',
              ),
            );
          } finally {
            controller.close();
          }
        },
      }),
      { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    );
  } catch {
    return Response.json(
      { error: "Sorry, I couldn't process that. Please try again." },
      { status: 500 },
    );
  }
}
