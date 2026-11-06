import { NextResponse } from 'next/server';
import { CLINIC } from '@/lib/constants';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      throw new Error(`Google Places API returned ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({ ...data, fetchedAt: new Date().toISOString() }, { 
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch opening hours from Google Places feed.' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  }
}
