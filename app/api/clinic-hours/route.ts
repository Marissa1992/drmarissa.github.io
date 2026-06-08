import { NextResponse } from 'next/server';

const API_KEY  = 'AIzaSyASVHw_gAqiYLPrdNJqR_qDewxEqwoRXNw';
const PLACE_ID = 'ChIJF4CXSgC5BTsRHEvEfv0fR1c';

export async function GET() {
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      { headers: {
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': 'regularOpeningHours',
      }}
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
