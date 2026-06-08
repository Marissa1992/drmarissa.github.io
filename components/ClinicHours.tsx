'use client';
import { useEffect, useState } from 'react';

export default function ClinicHours() {
  const [hours, setHours] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHours() {
      try {
        const res = await fetch(
          `https://places.googleapis.com/v1/places/ChIJF4CXSgC5BTSRHEvEfv0fR1c`,
          { headers: {
              'X-Goog-Api-Key': 'AIzaSyASVHw_gAqiYLPrdNJqR_qDewxEqwoRXNw',
              'X-Goog-FieldMask': 'regularOpeningHours',
          }}
        );
        const { regularOpeningHours } = await res.json();
        const lines = regularOpeningHours?.weekdayDescriptions || [];
        setHours([...lines.slice(6), ...lines.slice(0, 6)]);
      } catch {
        setHours([]);
      } finally {
        setLoading(false);
      }
    }
    fetchHours();
  }, []);

  const todayIdx = new Date().getDay();
  if (loading) return <p>Loading clinic hours...</p>;
  if (!hours.length) return <p>Mon–Fri: 8:00 AM – 5:00 PM</p>;

  return (
    <div style={{ maxWidth: 380 }}>
      {hours.map((line, i) => {
        const [day, ...rest] = line.split(':');
        const time = rest.join(':').trim();
        const isToday = i === todayIdx;
        const isClosed = time.toLowerCase().includes('closed');
        return (
          <div key={i} style={{
            display:'flex', justifyContent:'space-between',
            padding:'8px 12px', borderRadius:8, marginBottom:4,
            background: isToday ? '#e6f4f4' : 'transparent',
            fontWeight: isToday ? 600 : 400,
            borderLeft: isToday ? '3px solid #0d6e6e' : '3px solid transparent',
          }}>
            <span style={{ color: isToday ? '#0d6e6e' : '#5a7070' }}>
              {isToday ? '▶ ' : ''}{day}
            </span>
            <span style={{ color: isClosed ? '#c62828' : '#1a2a2a' }}>
              {time}
            </span>
          </div>
        );
      })}
      <p style={{ fontSize:11, color:'#5a7070', marginTop:8 }}>
        🟢 Live from Google Business Profile
      </p>
    </div>
  );
}
