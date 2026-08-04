import * as React from "react";
import {
  Activity,
  ArrowUpRight,
  CalendarCheck,
  CircleUser,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * HeroVisual — a premium, static mock of a healthcare admin dashboard, built
 * entirely from design tokens (no image asset, no data). Decorative only, so
 * it's hidden from assistive tech. Reinforces "healthcare software" without
 * competing with the hero copy: restrained surfaces, one emerald highlight.
 */
export function HeroVisual() {
  return (
    <div aria-hidden className="relative select-none">
      {/* Main dashboard panel */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-foreground text-background">
              <Activity className="size-4" />
            </span>
            <span className="text-sm font-semibold">Care Dashboard</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald" />
            Live
          </span>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-3 gap-px bg-border">
          <StatTile icon={Users} label="Active patients" value="1,284" />
          <StatTile icon={CalendarCheck} label="Appointments" value="42" />
          <StatTile
            icon={ArrowUpRight}
            label="Avg. wait"
            value="12m"
            trend="−18%"
          />
        </div>

        {/* Mini bar chart */}
        <div className="border-t border-border px-5 pt-4 pb-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              Weekly visits
            </span>
            <span className="text-xs font-semibold text-emerald">+8.2%</span>
          </div>
          <div className="flex h-24 items-end gap-2">
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-sm",
                  i === BAR_HEIGHTS.length - 2 ? "bg-emerald" : "bg-muted",
                )}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Appointment rows */}
        <div className="border-t border-border">
          {ROWS.map((row, i) => (
            <div
              key={row.name}
              className={cn(
                "flex items-center gap-3 px-5 py-3",
                i !== ROWS.length - 1 && "border-b border-border",
              )}
            >
              <CircleUser className="size-7 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{row.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {row.detail}
                </p>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {row.time}
              </span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium",
                  row.status === "Confirmed"
                    ? "bg-emerald-subtle text-emerald-subtle-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating notification card (layered for depth) */}
      <div className="absolute -bottom-5 -left-5 hidden w-52 rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-emerald-subtle text-emerald-subtle-foreground">
            <Activity className="size-4" />
          </span>
          <span className="text-xs font-semibold">New lab result</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Synced to the patient record via REST API.
        </p>
      </div>
    </div>
  );
}

const BAR_HEIGHTS = [42, 58, 46, 70, 54, 88, 64];

const ROWS = [
  {
    name: "A. Okafor",
    detail: "Cardiology · Follow-up",
    time: "09:30",
    status: "Confirmed",
  },
  {
    name: "L. Hansen",
    detail: "Telehealth · New patient",
    time: "10:15",
    status: "Checked in",
  },
  {
    name: "M. Rossi",
    detail: "Labs · Results review",
    time: "11:00",
    status: "Confirmed",
  },
] as const;

function StatTile({
  icon: Icon,
  label,
  value,
  trend,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  trend?: string;
}) {
  return (
    <div className="bg-card px-4 py-4">
      <Icon className="size-4 text-muted-foreground" />
      <p className="mt-2 font-heading text-lg font-semibold tracking-tight tabular-nums">
        {value}
      </p>
      <div className="flex items-center gap-1">
        <p className="truncate text-[11px] text-muted-foreground">{label}</p>
        {trend ? (
          <span className="shrink-0 text-[11px] font-medium text-emerald">
            {trend}
          </span>
        ) : null}
      </div>
    </div>
  );
}
