'use client';
import { useEffect, useState } from 'react';

function fixAmPm(slot: string): string {
  const parts = slot.split('–').map(s => s.trim());
  if (parts.length !== 2) return slot;
  const [start, end] = parts;
  const hasAmPm = (t: string) => /\b(AM|PM)\b/i.test(t);
  const getAmPm = (t: string) => t.match(/\b(AM|PM)\b/i)?.[0] ?? '';
  const fixedStart = !hasAmPm(start) && hasAmPm(end)
    ? `${start} ${getAmPm(end)}`
    : start;
  const fixedEnd = hasAmPm(start) && !hasAmPm(end)
    ? `${end} ${getAmPm(start)}`
    : end;
  return `${fixedStart} – ${fixedEnd}`;
}

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
    <p style={{ color: '#5a7070', fontSize: 14 }}>Hours unavailable</p>
  );

  return (
    <div style={{ width: '100%', maxWidth: 380, fontFamily: 'inherit' }}>
      {hours.map((line, i) => {
        const colonIdx = line.indexOf(':');
        const day = line.substring(0, colonIdx).trim();
        const timePart = line.substring(colonIdx + 1).trim();
        const slots = timePart.split(',').map(s => fixAmPm(s.trim()));
        const isToday = i === todayIdx;
        const isClosed = timePart.toLowerCase().includes('closed');

        return (
          <div key={i} style={{
            display: 'flex',
            padding: '10px 14px',
            marginBottom: 2,
            borderRadius: 10,
            background: isToday ? '#e6f4f4' : 'transparent',
            borderLeft: isToday
              ? '3px solid #0d6e6e'
              : '3px solid transparent',
          }}>
            <div style={{ minWidth: 110, flexShrink: 0, paddingTop: 1 }}>
              <span style={{
                fontSize: 14,
                fontWeight: isToday ? 700 : 500,
                color: isToday ? '#0d6e6e' : '#374151',
              }}>
                {isToday ? '▶ ' : ''}{day}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {isClosed ? (
                <span style={{ fontSize: 14, color: '#dc2626' }}>Closed</span>
              ) : (
                slots.map((slot, j) => (
                  <span key={j} style={{
                    fontSize: 14,
                    color: isToday ? '#0d6e6e' : '#4b5563',
                    fontWeight: isToday ? 600 : 400,
                    lineHeight: 1.5,
                  }}>
                    {slot}
                  </span>
                ))
              )}
            </div>
          </div>
        );
      })}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 10,
        paddingLeft: 14,
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
