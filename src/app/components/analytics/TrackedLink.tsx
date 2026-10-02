"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type {
  AnchorHTMLAttributes,
  ComponentProps,
  MouseEvent,
} from "react";

type AnalyticsValue = string | number | boolean | null | undefined;

type TrackingProps = {
  analyticsEvent: string;
  analyticsData?: Record<string, AnalyticsValue>;
};

type TrackedLinkProps = Omit<ComponentProps<typeof Link>, "onClick"> &
  TrackingProps & {
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  };

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  TrackingProps;

function recordClick(
  event: MouseEvent<HTMLAnchorElement>,
  analyticsEvent: string,
  analyticsData?: Record<string, AnalyticsValue>,
) {
  if (!event.defaultPrevented) {
    track(analyticsEvent, analyticsData);
  }
}

export function TrackedLink({
  analyticsEvent,
  analyticsData,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event);
        recordClick(event, analyticsEvent, analyticsData);
      }}
    />
  );
}

export function TrackedAnchor({
  analyticsEvent,
  analyticsData,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        recordClick(event, analyticsEvent, analyticsData);
      }}
    />
  );
}
