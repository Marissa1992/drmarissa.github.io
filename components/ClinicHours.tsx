'use client';
import { useEffect, useState } from 'react';
import { CLINIC } from '@/lib/constants';

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function orderSundayFirst(lines: string[]): string[] {
  const ordered: string[] = [];
  const unmatched = [...lines];

  for (const day of DAY_NAMES) {
    const idx = unmatched.findIndex((line) => {
      const colonIdx = line.indexOf(':');
      const prefix = (colonIdx > -1 ? line.substring(0, colonIdx) : line)
        .trim()
        .toLowerCase();
      return prefix.startsWith(day.toLowerCase());
    });
    if (idx !== -1) {
      ordered.push(unmatched[idx]);
      unmatched.splice(idx, 1);
    }
  }

  return [...ordered, ...unmatched];
}

function fixAmPm(slot: string): string {
  const parts = slot.split(/[\u2013\u2014–-]/).map((s) => s.trim());
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
        const res = await fetch('/api/clinic-hours', { cache: 'no-store' });
        const data = await res.json();
        const lines: string[] =
          data?.currentOpeningHours?.weekdayDescriptions ||
          data?.regularOpeningHours?.weekdayDescriptions ||
          [];
        setHours(orderSundayFirst(lines));
      } catch {
        setHours([]);
      } finally {
        setLoading(false);
      }
    }
    fetchHours();
  }, []);

  if (loading) {
    return (
      <div className="py-2 text-slate-500 text-xs sm:text-sm animate-pulse">
        Loading live hours...
      </div>
    );
  }

  if (!hours.length) {
    return (
      <div className="py-2 text-slate-500 text-xs sm:text-sm">
        <p className="italic mb-1">Hours feed temporarily unavailable.</p>
        <p className="text-xs text-teal-700 font-medium">{CLINIC.hours.fallbackText}</p>
      </div>
    );
  }

  const currentDayName = DAY_NAMES[new Date().getDay()].toLowerCase();

  return (
    <div className="w-full max-w-[380px] font-inherit text-xs sm:text-sm">
      {hours.map((line, i) => {
        const colonIdx = line.indexOf(':');

        if (colonIdx === -1) {
          return (
            <div key={i} className="py-2 px-3 text-slate-600 italic text-xs">
              {line}
            </div>
          );
        }

        const day = line.substring(0, colonIdx).trim();
        const timePart = line.substring(colonIdx + 1).trim();
        const isToday = day.toLowerCase().startsWith(currentDayName);

        const isClosed = timePart.toLowerCase().includes('closed');
        const isDiffer = timePart.toLowerCase().includes('differ');
        const hasDigits = /\d/.test(timePart);

        const slots = timePart.split(',').map((s) => fixAmPm(s.trim())).filter(Boolean);

        return (
          <div
            key={i}
            className={`flex py-2 px-3 mb-0.5 rounded-lg transition-colors ${
              isToday ? 'bg-teal-50/80 border-l-[3px] border-teal-700' : 'bg-transparent border-l-[3px] border-transparent'
            }`}
          >
            <div className="min-w-[100px] sm:min-w-[110px] shrink-0 pt-0.5">
              <span
                className={`font-medium ${
                  isToday ? 'font-bold text-teal-800' : 'text-slate-700'
                }`}
              >
                {isToday ? '▶ ' : ''}{day}
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              {isClosed ? (
                <span className="text-red-600 font-medium">Closed</span>
              ) : isDiffer || !hasDigits ? (
                <span className="text-amber-700 font-medium">{timePart}</span>
              ) : (
                slots.map((slot, j) => (
                  <span
                    key={j}
                    className={`leading-relaxed whitespace-nowrap ${
                      isToday ? 'font-semibold text-teal-800' : 'text-slate-600'
                    }`}
                  >
                    {slot}
                  </span>
                ))
              )}
            </div>
          </div>
        );
      })}
      <div className="flex items-center gap-1.5 mt-2.5 pl-3 text-[11px] text-slate-500">
        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0 animate-pulse" />
        <span>Live from Google Business Profile</span>
      </div>
    </div>
  );
}
