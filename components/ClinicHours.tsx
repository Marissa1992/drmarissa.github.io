'use client';
import { useEffect, useState } from 'react';

export default function ClinicHours() {
  const [hours, setHours] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHours() {
      try {
        const res = await fetch('/api/clinic-hours');
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
  if (loading) return (
    <p style={{ color: '#5a7070', fontSize: 14 }}>Loading hours...</p>
  );
  if (!hours.length) return (
    <p style={{ color: '#5a7070', fontSize: 14 }}>Mon–Fri: 9:00 AM – 9:30 PM</p>
  );

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      {hours.map((line, i) => {
        const colonIdx = line.indexOf(':');
        const day  = line.substring(0, colonIdx).trim();
        const time = line.substring(colonIdx + 1).trim();
        const isToday  = i === todayIdx;
        const isClosed = time.toLowerCase().includes('closed');

        return (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            padding: '10px 14px',
            marginBottom: 4,
            borderRadius: 10,
            background: isToday ? '#e6f4f4' : i % 2 === 0 ? '#f8fafa' : 'white',
            borderLeft: isToday ? '3px solid #0d6e6e' : '3px solid transparent',
          }}>
            <span style={{
              color: isToday ? '#0d6e6e' : '#374151',
              fontWeight: isToday ? 700 : 500,
              fontSize: 14,
              minWidth: 90,
              flexShrink: 0,
            }}>
              {isToday ? '▶ ' : ''}{day}
            </span>
            <span style={{
              color: isClosed ? '#dc2626' : isToday ? '#0d6e6e' : '#4b5563',
              fontWeight: isToday ? 600 : 400,
              fontSize: 14,
              textAlign: 'right',
              lineHeight: 1.5,
            }}>
              {time}
            </span>
          </div>
        );
      })}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 10,
        fontSize: 11,
        color: '#6b7280',
      }}>
        <span style={{
          width: 7, height: 7,
          borderRadius: '50%',
          background: '#22c55e',
          display: 'inline-block',
          flexShrink: 0,
        }}/>
        Live from Google Business Profile
      </div>
    </div>
  );
}
