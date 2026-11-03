/**
 * Patient Education Blog Posts Data Model
 * 5 evidence-based articles targeting Kerala health search queries.
 */

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  // 1. Monsoon ENT Problems
  {
    slug: 'monsoon-ent-problems-kerala',
    title: 'Monsoon ENT Problems in Kerala: Sinusitis, Ear Infections & How to Stay Protected',
    seoTitle: 'Monsoon ENT Problems in Kerala & Prevention | Dr. Marissa Mathew',
    seoDescription: 'High humidity during Kerala monsoon triggers sinus infections and fungal ear troubles. Learn symptoms, prevention tips, and when to visit an ENT clinic.',
    date: '2026-11-01',
    readingTime: '5 min read',
    excerpt: 'Kerala\'s monsoon season brings welcome relief from the heat, but the sudden rise in humidity and dampness also brings a sharp increase in ENT complaints. Learn why ear infections and sinusitis spike during the rains and how to protect your family.',
    tags: ['Monsoon Health', 'Sinusitis', 'Ear Infection', 'Kerala Health', 'Prevention'],
    content: `Every year, as the monsoon clouds gather over the Arabian Sea and rain sweeps across Thiruvananthapuram, our clinic sees a distinct and predictable shift in patient concerns. While the rains bring cooling relief from the summer humidity, the persistent dampness creates ideal conditions for microbial and fungal proliferation.

For many families living across Pongumoodu, Kowdiar, Pattom, and surrounding areas, the monsoon season unfortunately coincides with recurring sinus headaches, blocked noses, throbbing earaches, and persistent throat irritation. Understanding why these conditions occur during the rains is the first step toward preventing them.

---

### The Three Most Common Monsoon ENT Troubles

#### 1. Fungal Ear Infections (Otomycosis)
The outer ear canal is naturally dark, warm, and narrow. When ambient humidity climbs above 80%—as it frequently does across coastal Kerala—any water that enters the ear canal during bathing or swimming tends to remain trapped.

This trapped moisture, combined with the warm climate, allows fungi (commonly *Aspergillus* or *Candida* species) to grow on the canal walls. Patients often describe:
- Intense, unbearable itching deep inside the ear
- A watery, greyish, or blackish ear discharge
- A feeling of wetness and ear blockage
- Mild aching or soreness when touching the earlobe

*Important Warning:* Many patients instinctively reach for cotton buds or hairpins to relieve the itching. This is the single most harmful thing you can do. Cotton buds scratch the delicate skin lining, driving fungal spores deeper and paving the way for a painful secondary bacterial infection.

#### 2. Acute Sinusitis and Nasal Allergies
Monsoon brings sudden fluctuations in temperature, damp walls, and an explosion in indoor mold and dust mite populations. For people prone to [Allergic Rhinitis](/services/allergic-rhinitis), inhaling these allergens triggers immediate nasal swelling.

When the nasal passages swell, the tiny drainage openings (ostia) of the facial sinuses become blocked. Trapped mucus inside the maxillary and frontal sinuses quickly turns into a breeding ground for bacteria, leading to full-blown [Sinusitis](/services/sinusitis). Symptoms include heavy facial pressure around the eyes and cheeks, throbbing morning headaches, yellow or green nasal discharge, and a foul taste in the mouth.

#### 3. Viral and Bacterial Sore Throats
Monsoon weather often keeps children and adults indoors in closer proximity, facilitating the rapid transmission of respiratory viruses. Viral pharyngitis and bacterial [Tonsillitis](/services/tonsillitis) frequently peak during rainy months, characterized by painful swallowing, fever, swollen neck glands, and voice hoarseness.

---

### Practical Prevention Tips for Kerala's Rainy Season

1. **Keep Your Ears Completely Dry:**  
   After showering or washing your hair, gently pat the outer ear dry with a clean cotton towel. Tilt your head to each side to allow any trapped water droplets to run out naturally. Never use cotton swabs inside the ear canal.
2. **Manage Indoor Humidity and Mold:**  
   If bedrooms or wardrobes develop visible mildew or damp odor, ensure rooms are well-ventilated on dry days. Sun-dry bedsheets, pillow covers, and mattresses whenever the sun breaks through.
3. **Practice Daily Saline Nasal Hygiene:**  
   A gentle saline nasal spray or rinse helps wash away mold spores and environmental allergens from the nasal mucosa before they cause sinus blockage.
4. **Hydrate with Warm Fluids:**  
   Sipping warm boiled water, herbal ginger-tulsi teas, or light broths helps keep throat membranes moist and soothes early pharyngeal irritation.
5. **Never Put Unsterile Oils in the Ear:**  
   Traditional home remedies like heated coconut oil or garlic oil should never be instilled into an aching or itchy ear. In the presence of a fungal infection or a hidden eardrum perforation, this can cause severe damage.

---

### When Should You Visit Dr. Marissa's ENT Clinic?

While mild sniffles often resolve with rest and warm fluids, you should schedule a consultation if you experience:
- Persistent or worsening ear pain, discharge, or severe itching
- Facial swelling, severe headache, or fever lasting more than 3 days
- Significant drop in hearing in one or both ears
- Difficulty opening your mouth or severe throat pain making swallowing fluids difficult

At **Dr. Marissa's ENT Clinic** in Pongumoodu, Thiruvananthapuram, we provide gentle, thorough evaluations with modern diagnostic tools to ensure your monsoon season remains healthy and comfortable.`,
  },

  // 2. Safe Ear Wax Cleaning
  {
    slug: 'safe-ear-wax-cleaning',
    title: 'Ear Wax: Safe vs. Unsafe Home Cleaning — What Every Patient Needs to Know',
    seoTitle: 'Ear Wax: Safe vs Unsafe Home Cleaning | Dr. Marissa\'s ENT Clinic',
    seoDescription: 'Why cotton buds push ear wax deeper and damage your eardrum. Safe home care tips and when to choose painless microsuction at our Thiruvananthapuram clinic.',
    date: '2026-11-01',
    readingTime: '4 min read',
    excerpt: 'Think cotton buds are the best way to clean your ears? Think again. Discover why medical experts advise against inserting anything into your ear canal, and learn safe, doctor-approved methods to manage ear wax.',
    tags: ['Ear Care', 'Ear Wax Removal', 'Microsuction', 'ENT Tips', 'Hearing Health'],
    content: `It is one of the most common daily habits across households: picking up a cotton bud after a shower and giving the ear canal a thorough swab. The sensation feels satisfying, and the small smudge of yellow wax on the cotton tip creates an illusion that the ear has been cleaned.

However, as ENT specialists, we see the consequences of this habit nearly every single day at our clinic. Cotton buds are the leading cause of impacted ear wax, ear canal trauma, and accidental eardrum perforations.

Let us look at what ear wax actually is, why your body produces it, and what safe ear cleaning really looks like.

---

### Why Does the Body Produce Ear Wax?

First, it is vital to understand that **ear wax (cerumen) is not dirt**. It is a healthy, protective substance produced by specialized glands in the outer third of your ear canal.

Ear wax serves several critical physiological functions:
- **Protective Shield:** It traps dust, microscopic debris, and small insects before they can reach the delicate eardrum.
- **Natural Water Repellent:** Its lipid-rich composition coats the ear canal skin, preventing water from softening and macerating the tissue.
- **Mild Antibacterial & Antifungal Properties:** Ear wax is slightly acidic, which naturally inhibits the growth of harmful bacteria and fungi.

Most importantly, **the ear is an ingenious self-cleaning organ**. As you chew, talk, and move your jaw throughout the day, the skin lining the ear canal slowly migrates outward, carrying old wax and trapped dust toward the outer ear opening, where it dries, flakes off, and falls away unnoticed.

---

### The Danger of Cotton Buds and Home "Cleaning" Tools

When you insert a cotton swab, hairpin, key, or rolled-up towel into the ear canal, several problems occur:

1. **The Piston Effect:**  
   The ear canal is only about 2.5 centimeters long and quite narrow. A cotton bud acts like a piston in a cylinder. While it may pick up a tiny smear of wax on its edge, it pushes the majority of the wax ball deeper toward the eardrum. Over time, this compressed wax forms a dense, rock-hard plug that blocks sound.
2. **Skin Abrasions and Infection:**  
   The skin lining the inner ear canal is extraordinarily thin—only a fraction of a millimeter. Scraping it removes the protective wax layer, creating microscopic tears that easily become infected with bacteria or fungi.
3. **Traumatic Eardrum Perforation:**  
   One sudden bump to your elbow or an unexpected movement by a child or pet while a cotton bud is in your ear can instantly rupture your eardrum, causing immediate sharp pain, bleeding, and sudden hearing loss.
4. **Ear Candling Dangers:**  
   "Ear candling" is a popular alternative therapy that claims to suck wax out using heat. Clinical studies have repeatedly proven it does not remove wax and carries high risks of severe burns, wax blockage, and eardrum damage.

---

### What Is Safe Home Ear Care?

For the vast majority of people with normal ears, home ear cleaning requires only one simple rule: **clean only what you can reach with a wet cloth on your index finger.**

- **Wipe the Outer Ear:** After bathing, gently wipe the outer ear (the pinna) and the skin just around the canal opening with a damp washcloth.
- **Let Water Drain Naturally:** If water gets into your ear during a shower, tilt your head sideways to let gravity drain it.
- **Avoid Poking Anything Inside:** Remember the golden ENT rule: *never insert anything smaller than your elbow into your ear canal.*

---

### When Home Care Isn't Enough: Professional Microsuction

Some individuals naturally produce excess wax, have very narrow or tortuous ear canals, or wear hearing aids and earphones that block natural wax migration.

If you experience:
- A blocked, plugged sensation in one or both ears
- Muffled hearing or sudden hearing drop after swimming/showering
- Tinnitus (ringing or buzzing in the ear)
- Mild earache or discomfort

The safest, gold-standard method for removal is **gentle microsuction** performed by an ENT specialist.

At **Dr. Marissa's ENT Clinic** in Pongumoodu, Thiruvananthapuram, [Ear Wax Removal](/services/ear-wax-removal) is performed under direct visualization using dedicated magnification and a gentle, low-pressure suction tube. Unlike traditional water syringing, microsuction uses no water, eliminates the risk of ear infection, and is completely safe even for patients with previous eardrum perforations or ear surgery.`,
  },

  // 3. Vertigo vs Dizziness
  {
    slug: 'vertigo-vs-dizziness-when-to-worry',
    title: 'Vertigo vs. Dizziness: Understanding the Difference and When to Seek Medical Care',
    seoTitle: 'Vertigo vs Dizziness: Causes & Warning Signs | Dr. Marissa Mathew',
    seoDescription: 'Understand the critical difference between lightheadedness and inner-ear vertigo. Learn the red-flag symptoms that require urgent medical evaluation.',
    date: '2026-11-01',
    readingTime: '5 min read',
    excerpt: 'Feeling unsteady, faint, or like the entire room is spinning? Learn the crucial medical differences between general dizziness and inner-ear vertigo, common causes like BPPV, and the red flags you must never ignore.',
    tags: ['Vertigo', 'Dizziness', 'BPPV', 'Balance Disorders', 'ENT Clinic'],
    content: `"Doctor, I feel dizzy." This is one of the most frequent complaints we hear in outpatient clinical practice. Yet in the medical world, the word "dizzy" can mean half a dozen completely different physical sensations—each pointing toward a different bodily system.

Understanding whether you are experiencing generalized lightheadedness, unsteadiness, or true **vertigo** is the crucial first step toward an accurate diagnosis and rapid relief.

---

### What Is the Difference Between Dizziness and Vertigo?

While people often use the two terms interchangeably, physicians make a clear distinction:

#### 1. Dizziness (Lightheadedness or Presyncope)
Dizziness is a broad, non-specific term. It often feels like you are about to faint, floating, lightheaded, or woozy. You might experience this if you stand up too quickly from a chair, miss a meal, or become dehydrated in the heat. It is typically related to blood pressure fluctuations, cardiovascular changes, medication side effects, or general fatigue.

#### 2. Vertigo (A False Sensation of Motion)
Vertigo is very specific. It is an **illusion of movement**. Even when you are sitting or lying completely still, you feel as though you, the bed, or the entire room is violently spinning, tilting, swaying, or tumbling. It is often accompanied by nausea, sweating, vomiting, and a distressing feeling of losing control over your balance.

In the vast majority of cases (over 80%), true rotational vertigo stems from a malfunction inside the **vestibular system of the inner ear**—the delicate organ responsible for detecting head movement and gravity.

---

### The Most Common Cause: BPPV

The single most frequent cause of peripheral vertigo seen at our clinic in Pongumoodu is **Benign Paroxysmal Positional Vertigo (BPPV)**.

- **What Happens:** The inner ear contains tiny calcium carbonate crystals (otoconia) that help detect gravity. In BPPV, some of these tiny crystals become dislodged and float into the fluid-filled semicircular balance canals.
- **The Trigger:** When you move your head in a specific direction—such as rolling over in bed, looking up at a high shelf, or bending forward to tie your shoes—the loose crystals shift. This sends misleading signals to your brain that your head is spinning wildly, even though your eyes tell you that you are stationary.
- **The Episodes:** BPPV episodes are typically brief (lasting 10 to 60 seconds), but they can be severe and frightening.

Other common inner ear causes of vertigo include:
- **Vestibular Neuritis / Labyrinthitis:** Inflammation of the balance nerve, usually following a viral infection, causing continuous spinning that lasts several days.
- **Meniere's Disease:** A condition involving fluid buildup in the inner ear, characterized by recurring vertigo episodes paired with fluctuating hearing loss, ear fullness, and [Tinnitus](/services/tinnitus).

---

### When Should You Worry? Red Flags of Central Vertigo

While peripheral inner-ear vertigo is distressing, it is rarely life-threatening. However, vertigo can occasionally originate in the brain or central nervous system (such as from a stroke, hemorrhage, or neurological condition).

**Seek IMMEDIATE emergency hospital care (call 108 or visit the nearest hospital casualty) if vertigo is accompanied by any of these RED FLAGS:**
- Sudden weakness, numbness, or tingling in the face, arm, or leg (especially on one side)
- Slurred speech, difficulty finding words, or inability to understand speech
- Double vision or sudden loss of vision
- Confusion, disorientation, or altered consciousness
- Inability to stand up or walk across the room at all (severe ataxia)
- Sudden, thunderclap headache unlike any you have experienced before

---

### How Is Peripheral Vertigo Treated at Dr. Marissa's ENT Clinic?

If your vertigo is peripheral (originating from the inner ear), there is good news: most cases can be treated effectively without invasive procedures or long-term sedatives.

For BPPV, medication rarely fixes the underlying issue because the crystals are physically in the wrong canal. Instead, Dr. Marissa performs precise, in-clinic repositioning maneuvers—most commonly the **Epley maneuver**. By gently guiding your head through a sequence of specific angles, gravity carries the dislodged crystals safely back into their proper chamber, often providing dramatic or complete relief in just 1 to 2 sessions.

For other vestibular conditions, we provide tailored medical management and guide you through **Vestibular Rehabilitation Exercises** to help your brain compensate and restore your balance. Learn more about our [Vertigo Treatment Services](/services/vertigo).`,
  },

  // 4. Child Ear Infections
  {
    slug: 'child-ear-infections-guide',
    title: 'Child Ear Infections: Symptoms, Causes, and When to Consult an ENT Specialist',
    seoTitle: 'Child Ear Infections: Symptoms & Care | Dr. Marissa Mathew',
    seoDescription: 'Why toddlers frequently develop middle ear infections, warning signs like ear tugging and fever, and how an ENT specialist evaluates your child gently.',
    date: '2026-11-01',
    readingTime: '5 min read',
    excerpt: 'Middle ear infections are among the most distressing illnesses of early childhood. Learn why young children are especially vulnerable, the subtle signs parents should watch for, and how an ENT specialist treats them safely.',
    tags: ['Pediatric ENT', 'Ear Infection', 'Parenting', 'Child Health', 'Otitis Media'],
    content: `Few experiences are more heartbreaking for a parent than comforting a crying toddler who suddenly wakes up in the middle of the night holding their ear in agony.

Ear infections are exceptionally common in children. In fact, clinical studies indicate that more than 80% of children experience at least one episode of acute otitis media (middle ear infection) before their third birthday.

For parents in Thiruvananthapuram, understanding why children are prone to these infections and knowing when an ENT specialist's opinion is needed can bring immense peace of mind.

---

### Why Are Children So Vulnerable to Ear Infections?

Parents often ask: *"Why does my child get an earache almost every time they catch a simple cold?"*

The answer lies in their unique pediatric anatomy.

The middle ear (the air pocket behind the eardrum) is connected to the back of the nasal cavity and throat by a tiny channel called the **Eustachian tube**. This tube is responsible for equalizing pressure and draining natural fluids from the middle ear.

- **In Adults:** The Eustachian tube is longer, steeper, and more vertical, allowing fluid to drain downward easily by gravity.
- **In Infants and Toddlers:** The Eustachian tube is shorter, narrower, and almost completely horizontal.

When your child catches a routine viral cold, throat infection, or experiences an allergic flare-up, the nasal lining swells. This swelling blocks the horizontal Eustachian tube. Secretions become trapped behind the eardrum, creating a warm, stagnant pool where bacteria or viruses multiply rapidly, creating pressure and intense pain.

Additionally, children have larger **adenoids** (pads of immune tissue located at the back of the nose). If the adenoids become chronically infected or swollen, they can physically press against the openings of the Eustachian tubes, perpetuating recurrent infections.

---

### Subtle Signs of Ear Infection in Non-Verbal Toddlers

While older children can easily tell you that their ear hurts, infants and toddlers communicate their discomfort in subtle behavioral ways:

1. **Ear Tugging or Rubbing:** Reaching up to pull, rub, or scratch at one ear repeatedly.
2. **Crying When Lying Down:** Pressure in the middle ear spikes when lying flat, causing sudden crying bouts at bedtime or during naps.
3. **Fussiness During Feeding:** The act of sucking and swallowing alters middle ear pressure, which can make nursing or bottle-feeding suddenly painful.
4. **Fever and Disturbed Sleep:** An unexplained temperature rise accompanied by restless tossing and waking.
5. **Fluid on the Pillow:** Spotting yellowish crust or clear fluid on the child's pillow or sheet indicates that the eardrum may have developed a tiny pressure-relief perforation.
6. **Inattention or Delayed Response:** Seeming to ignore speech, asking "what?" frequently, or turning up tablet volume (signs of middle ear fluid causing temporary muffled hearing).

---

### What to Do (and What NEVER to Do) at Home

#### What You Can Do Safely:
- **Appropriate Pain Relief:** Paracetamol or ibuprofen (in age- and weight-appropriate pediatric doses prescribed by your doctor) provides effective pain and fever relief.
- **Warm Compress:** Holding a comfortably warm, dry washcloth against the child's outer ear can soothe muscular tension.
- **Keep Upright:** Elevating the child's head slightly during rest can help reduce middle ear congestion.

#### What You Must NEVER Do:
- **Never Instill Ear Drops Without Medical Inspection:** If the eardrum has developed a tiny perforation, non-approved ear drops can pass directly into the middle ear, causing severe pain and potential damage.
- **Never Use Heated Oils or Garlic:** These unsterile traditional remedies increase the risk of secondary infections.
- **Never Insert Cotton Buds:** Poking into a tender, inflamed ear canal will only increase your child's pain and risk puncturing the eardrum.

---

### When Should You Consult an ENT Specialist?

Most single episodes of acute ear infection resolve well under primary pediatric care. However, you should consult an ENT specialist like **Dr. Marissa Mathew** if:
- Your child has had **3 or more distinct ear infections in 6 months**, or 4 in one year.
- Fluid remains trapped behind the eardrum for more than 8–12 weeks (**"glue ear"**), potentially hindering early speech and language development.
- There is persistent foul-smelling ear discharge.
- Your child regularly snores loudly, breathes through their mouth, or experiences pauses in breathing during sleep.

At **Dr. Marissa's ENT Clinic** in Pongumoodu, Thiruvananthapuram, we prioritize a gentle, child-friendly approach. We examine your child's ears using delicate, high-illumination otoscopes and develop conservative, step-by-step treatment plans that protect your child's comfort and hearing health. Explore our dedicated [Pediatric ENT Services](/services/pediatric-ent).`,
  },

  // 5. Sinusitis Home Care
  {
    slug: 'sinusitis-home-care-remedies',
    title: 'Sinusitis Home Care: What Actually Works, What Doesn\'t, and When to Stop',
    seoTitle: 'Sinusitis Home Care: What Works & What Doesn\'t | Dr. Marissa Mathew',
    seoDescription: 'Evidence-based home relief for acute sinus congestion: steam inhalation, saline irrigation, and hydration tips, plus warning signs that warrant an ENT visit.',
    date: '2026-11-01',
    readingTime: '5 min read',
    excerpt: 'Struggling with a blocked nose, facial pressure, and headache? Discover which evidence-based home remedies provide real sinus relief, which popular trends to avoid, and when you need medical intervention.',
    tags: ['Sinusitis', 'Home Remedies', 'Saline Rinse', 'Steam Inhalation', 'ENT Care'],
    content: `Few everyday ailments are as draining as a sinus flare-up. The heavy pressure behind your eyes, the throbbing pain when you bend down, the dull headache across your forehead, and the inability to breathe through your nose can bring your workday or home life to a grinding halt.

Because sinusitis is so common in Kerala—spurred by our tropical humidity, dust mite allergies, and seasonal monsoons—patients frequently try dozens of home remedies before seeking medical care.

Some of these home measures are scientifically sound and provide excellent relief. Others are ineffective, and a few can actually worsen your condition.

Here is an ENT specialist's guide to evidence-based sinus home care.

---

### What ACTUALLY Works: Evidence-Based Home Relief

#### 1. Saline Nasal Irrigation (The Gold Standard)
If there is one home therapy endorsed by international ENT guidelines across the globe, it is **saline nasal rinsing**.
- **How It Works:** Rinsing the nasal passages with a mild saltwater solution thins out thick, stagnant mucus, washes away trapped allergens and bacteria, and reduces mucosal swelling. It also restores the natural sweeping action of the microscopic cilia (hairs) that line your sinuses.
- **How to Do It Safely:** Always use sterile water—either pre-packaged distilled water or clean drinking water that has been boiled for 2 minutes and allowed to cool to lukewarm. Dissolve a prepared pharmaceutical saline packet or a clean mix of non-iodized salt and a pinch of baking soda. Use a clean sinus rinse bottle or neti pot with gentle pressure. Never use unboiled tap water.

#### 2. Moist Steam Inhalation
Inhaling warm, moist air helps moisturize dry or irritated nasal tissues and softens crusted secretions in the nasal passages.
- **How to Do It Right:** Lean over a bowl of warm, steaming water with a towel draped over your head, breathing gently through your nose for 5 to 10 minutes.
- **Medical Caution:** The water should be comfortably steaming, not boiling vigorously. Scalding steam can burn the delicate nasal lining, causing more swelling. Keep your eyes closed and maintain a safe distance.

#### 3. Generous Hydration
Staying well-hydrated is essential for keeping sinus mucus thin and flowing. Drink plenty of warm water, clear broths, and mild herbal teas throughout the day. When your body is dehydrated, mucus becomes thick and sticky, exacerbating blockage.

#### 4. Sleep with Head Slightly Elevated
Lying completely flat increases blood flow to the nasal vessels and impedes sinus drainage, which is why sinus congestion is notoriously worse when you wake up in the morning. Using an extra pillow or elevating the head of your bed by a few inches helps gravity assist sinus drainage through the night.

---

### What DOES NOT Work (or May Harm You)

#### 1. Over-the-Counter Decongestant Spray Overuse
Nasal decongestant drops containing oxymetazoline or xylometazoline offer miraculous, instant relief by shrinking swollen blood vessels. However, **if you use them for more than 4 to 5 consecutive days, you risk developing Rhinitis Medicamentosa (rebound congestion)**. The nasal tissue becomes physically dependent on the spray, swelling up more severely every time the medication wears off.

#### 2. Inhaling Raw Crushed Garlic, Onion, or Strong Eucalyptus Drops
Placing raw garlic cloves in the nostrils or adding excessive camphor or pungent balms directly into boiling steam can severely chemical-burn the nasal respiratory epithelium. While the strong smell gives a temporary sensation of airflow, it actually triggers intense inflammation and reflex mucus production.

#### 3. Demanding Immediate Antibiotics for Every Flare-up
Over 90% of acute sinus episodes start as **viral infections** (rhinosinusitis). Antibiotics kill bacteria, not viruses. Taking antibiotics for a viral sinus infection will not speed up your recovery, but it can cause digestive upset and contribute to dangerous antibiotic resistance.

---

### When to Stop Home Care and See an ENT Specialist

Home remedies are appropriate for the first 7 to 10 days of mild sinus discomfort. However, you should schedule an evaluation at an ENT clinic if you experience:
- **Symptoms Lasting Beyond 10 Days:** Sinus blockage or facial pain that fails to improve after 10 days, or symptoms that worsen after a brief initial improvement ("double sickening").
- **Severe One-Sided Pain:** Intense pain concentrated strictly in one cheek or eye.
- **Dental Pain:** Severe aching in the upper molars (which share nerve roots with the maxillary sinus floor).
- **Recurrent Episodes:** Experiencing 3 or 4 sinus infections every year.

#### 🚨 Emergency Warning Signs (Seek Immediate Hospital Care):
If sinus congestion is accompanied by **swelling or redness around one or both eyes, double vision, a stiff neck, high unyielding fever, or severe lethargy**, visit a hospital emergency department immediately. These indicate rare complications where infection is spreading beyond the sinus walls.

---

### Expert Care for Chronic Sinus Relief

At **Dr. Marissa's ENT Clinic** in Pongumoodu, Thiruvananthapuram, we take the time to look deeper into recurring sinus problems. Using diagnostic examination, Dr. Marissa evaluates your sinus drainage pathways, checks for allergic swelling or [Nasal Polyps](/services/nasal-polyps), and designs a targeted medical management plan to help you breathe freely and stay comfortable all year round. Learn more about our [Sinusitis Care Services](/services/sinusitis).`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
