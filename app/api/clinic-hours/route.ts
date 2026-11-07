import { NextResponse } from 'next/server';
import { CLINIC } from '@/lib/constants';

// Refresh from Google at most once every 600 seconds.
export const revalidate = 600;

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = CLINIC.analytics.googlePlaceId;

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'regularOpeningHours,currentOpeningHours',
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Google Places API returned ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch opening hours from Google Places feed.' },
      { status: 500 }
    );
  }
}
