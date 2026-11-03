'use client';

import React from 'react';
import { trackBookingClick, trackWhatsAppClick, trackCallClick } from '@/lib/gtm';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  trackingLocation?: string;
}

export function TrackedBookingLink({ children, trackingLocation = 'content_cta', onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackBookingClick(trackingLocation);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}

export function TrackedWhatsAppLink({ children, trackingLocation = 'content_cta', onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackWhatsAppClick(trackingLocation);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}

export function TrackedCallLink({ children, trackingLocation = 'content_cta', onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackCallClick(trackingLocation);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}
