# Design System — Premium Healthcare Portfolio

A calm, enterprise-grade system for a healthcare software engineer's portfolio.
Modern · Minimal · Professional · Trustworthy. The palette is a high-contrast
**obsidian** (dark-default) theme — near-black surfaces, near-white text — with
a single **muted emerald** accent reserved for emphasis. Color is otherwise
reserved for semantic status only. Every color pair is **verified WCAG 2.1 AA**
(script: contrast + OKLCH conversion; all pairs pass).

> The system is **token-first**. Components read CSS variables from
> `src/app/globals.css`, so restyling the whole site = editing tokens. Don't
> hardcode colors, radii, or shadows in components.

---

## 1. Design principles

| Do | Avoid |
|----|-------|
| Soft, low-opacity shadows | Oversized / harsh shadows |
| Thin 1px hairline borders | Heavy outlines |
| Large, generous spacing | Cramped, dense layouts |
| Flat tinted surfaces | Glassmorphism / neumorphism |
| Solid brand colors | Bright multi-stop gradients |
| Quick, small, purposeful motion | Flashy / bouncy animation |

---

## 2. Color tokens

Defined as OKLCH in `globals.css` under `:root` (light) and `.dark`, exposed to
Tailwind via `@theme` (e.g. `bg-primary`, `text-muted-foreground`,
`bg-success-subtle`).

### Brand & neutrals — obsidian (dark theme)
| Token | Dark value | Role |
|-------|-----------|------|
| `background` | `#090909` | Page surface |
| `surface` / `muted` | `#111111` | Secondary bands, subtle surfaces |
| `card` | `#151515` | Card/popover surface |
| `border` | `#232323` | Hairline dividers & borders |
| `foreground` | `#FAFAFA` | Primary text (19:1 on bg) |
| `muted-foreground` | `#A1A1AA` | Secondary text (7.8:1 on bg) |
| `primary` | `#FAFAFA` | High-contrast CTAs (white-on-obsidian) |
| `emerald` | `#34D399` | **Muted emerald accent** — emphasis only (10.4:1 on bg) |
| `ring` | neutral | Focus ring (emerald glow on brand elements) |

Light theme mirrors this inverted (white bg, `#121316` ink, `#047857` emerald).
`emerald-subtle` / `emerald-subtle-foreground` give an AA tinted chip pair in
both themes. Use emerald sparingly: accents, hover icon tiles, one highlighted
metric — never as a fill across large areas.

### Semantic — solid + subtle pairs
Each has a **solid** token (icon/solid fill) and a **subtle** pair
(`*-subtle` tinted bg + `*-subtle-foreground` readable text) for badges,
alerts, and tags. Status colors stay chromatic for meaning; `info` is
neutralized into the obsidian ramp.

| Family | Role |
|--------|------|
| `emerald` | Brand accent / emphasis |
| `success` (green) | Positive status |
| `warning` (amber) | Caution status |
| `destructive` (red) | Error/danger status |
| `info` (obsidian) | Neutral info (de-chromatized) |

Data-viz sequence: `chart-1` is emerald, `chart-2…5` a monochrome obsidian ramp.

**Verify anytime:** the palette scripts live in the notes; re-run to re-check
ratios if you change a value. Never ship a color pair below 4.5:1 (text) / 3:1 (UI).

---

## 3. Typography

`src/components/ui/typography.tsx` — one `<Text variant>` primitive + named
wrappers (`H1`–`H4`, `Display`, `Lead`, `P`, `Muted`, `Small`, `Overline`,
`InlineCode`, `Blockquote`). Fonts: **Geist Sans** (UI/headings), **Geist Mono**
(code/eyebrows).

Fluid scale (tokens `--text-*`, display sizes use `clamp()`):

| Variant | Size | Use |
|---------|------|-----|
| `display` | 40 → 72px | Hero |
| `h1` | 34 → 44px | Page title |
| `h2` | 28 → 34px | Section title |
| `h3` | 24px | Sub-section |
| `h4` | 20px | Card title |
| `lead` | 18 → 20px | Section intro |
| `p` | 16px / 1.65 | Body |
| `overline` | 12px caps, tracked | Section eyebrow |

Headings default to `font-semibold`, `tracking-tight`, `text-balance`; body uses
`text-pretty`. Numbers in metrics: add `.tabular-nums`.

---

## 4. Components

| Component | File | Variants |
|-----------|------|----------|
| **Button** | `ui/button.tsx` | `default` (blue), `teal`, `outline`, `secondary`, `ghost`, `destructive`, `link` · sizes `xs–lg`, `icon*` |
| **Card** | `ui/card.tsx` | Thin border + `shadow-sm`; lift to `shadow-md` on hover |
| **Input / Textarea / Label** | `ui/*.tsx` | Hairline border, `ring` focus |
| **Badge** (status) | `ui/badge.tsx` | `default`, `secondary`, `outline`, `info`, `success`, `warning`, `destructive`, `teal`, `accent` |
| **Alert** | `ui/alert.tsx` | `default`, `info`, `success`, `warning`, `destructive` (subtle tint + thin colored border) |
| **Tag** (chips) | `ui/tag.tsx` | `outline`, `soft`, `brand`, `teal` · sizes `sm/md` · optional `onRemove` |
| **Typography** | `ui/typography.tsx` | see §3 |

**Badge vs Tag:** Badge = status/state signalling (small, semantic color).
Tag = metadata like tech/skills (neutral, list-like, optionally removable).

---

## 5. Layout, grid & spacing

- **Container** (`layout/container.tsx`) — `size` = `sm | md | lg | xl | full`
  (max-width), responsive gutters `px-4 → lg:px-8`. Default `lg` (`max-w-5xl`).
- **Section** (`layout/section.tsx`) — vertical rhythm via `spacing`
  (`sm–xl`, default `lg` = `py-20 sm:py-28`), optional full-bleed `bleed`
  (`muted | card | accent`) and `divider` hairlines. Includes `SectionHeader`
  (eyebrow + title + description).
- **Grid** (`layout/grid.tsx`) — mobile-first `cols` `1 | 2 | 3 | 4 | 6 | 12`
  with `gap` `sm–xl`; `GridItem span` for the 12-col layout.

**Spacing scale** = Tailwind's 4px base. Section padding is intentionally large;
inside cards use `gap-6`/`p-6`; between grid items use `gap-8` (`lg`).

**Radius** — `--radius: 0.625rem` (10px). `sm/md/lg/xl` derive from it.
Cards/inputs use `lg`, pills/tags use `md`, badges use full.

**Shadows** — soft, slate/blue-tinted, low opacity. Tailwind's `shadow-*`
utilities are overridden to the soft scale (`xs → xl`). Rest state ≤ `shadow-sm`;
hover ≤ `shadow-md`; only overlays/modals use `shadow-lg`+.

---

## 6. Animation guidelines

Motion tokens in `globals.css` (`--duration-*`, `--ease-*`); JS variants in
`src/lib/motion.ts`; scroll reveals via `components/shared/reveal.tsx`.

**Rules**
1. **Purpose only** — animate to show state change or guide attention, never decoration.
2. **Duration** — 150ms (micro/hover), 220ms (default), 400ms (entrance). Nothing slower.
3. **Easing** — house `ease-out` `cubic-bezier(0.22,1,0.36,1)`. No bounce/elastic/spring overshoot.
4. **Travel** — ≤ 16px. Prefer opacity + a few px of Y. No parallax, spin, or scale > 1.02.
5. **Reveal once** — scroll animations fire a single time (`inViewOnce`), never replay.
6. **Reduced motion** — `MotionProvider` sets `reducedMotion="user"`; CSS also
   neutralizes transitions under `prefers-reduced-motion`. All motion must be
   non-essential.
7. **Hover** — transform-free where possible; use `shadow`/`bg`/`border` color
   transitions (`transition-colors`, `transition-shadow`).

**Presets:** `fadeIn`, `fadeInUp` (default), `scaleIn` (subtle), `staggerContainer`
+ `staggerItem` (lists/grids).

---

## 7. Usage sketch (reference only — no pages built yet)

```tsx
<Section bleed="muted" spacing="lg">
  <SectionHeader eyebrow="Work" title="Selected projects"
    description="Production healthcare systems." />
  <Reveal stagger className="mt-12">
    <Grid cols={3} gap="lg">
      {projects.map((p) => (
        <Reveal.Item key={p.id}>
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
              <Badge variant="success">HIPAA</Badge>
              <CardTitle>{p.name}</CardTitle>
            </CardHeader>
            <CardFooter className="flex-wrap gap-2">
              {p.stack.map((t) => <Tag key={t}>{t}</Tag>)}
            </CardFooter>
          </Card>
        </Reveal.Item>
      ))}
    </Grid>
  </Reveal>
</Section>
```
