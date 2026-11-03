import { NextResponse } from 'next/server';
import { CLINIC } from '@/lib/constants';

export const dynamic = 'force-dynamic';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyASVHw_gAqiYLPrdNJqR_qDewxEqwoRXNw';
const PLACE_ID = CLINIC.analytics.googlePlaceId;

export async function GET() {
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      { 
        headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'regularOpeningHours',
        },
        cache: 'no-store',
      }
    );
    
    if (!res.ok) {
      throw new Error(`Google Places API returned ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch opening hours from Google Places feed.' },
      { status: 500 }
    );
  }
}
