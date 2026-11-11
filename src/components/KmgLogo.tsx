import { useId } from "react";
import kmgLetters from "@/assets/kmg-letters.png";

/**
 * The KMG mark: the letters take the current text colour (ink in light theme,
 * light ink in dark), the corner glyph keeps the six KMG shades. The letters are
 * an alpha mask cut from the supplied logo; the glyph is redrawn as vector.
 */
const W = 458;
const H = 174;

/** The corner glyph's six facets, in its own 440×467 frame. */
const facets: { fill: string; points: string }[] = [
	{ fill: "var(--kmg-1)", points: "0,0 114,0 277,163 0,163" },
	{ fill: "var(--kmg-2)", points: "114,0 277,0 277,163" },
	{ fill: "var(--kmg-3)", points: "277,0 440,0 277,163" },
	{ fill: "var(--kmg-4)", points: "440,0 440,163 277,163" },
	{ fill: "var(--kmg-5)", points: "277,163 440,163 440,328" },
	{ fill: "var(--kmg-6)", points: "277,163 440,328 440,467 277,467" },
];

export function KmgLogo({ className }: { className?: string }) {
	const maskId = useId();
	return (
		<svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label="KMG" focusable="false">
			<mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
				<image href={kmgLetters} width={W} height={H} />
			</mask>
			<rect width={W} height={H} fill="currentColor" mask={`url(#${maskId})`} />
			<g transform="translate(376 87) scale(0.1864)">
				{facets.map((f) => (
					<polygon key={f.points} points={f.points} fill={f.fill} />
				))}
			</g>
		</svg>
	);
}

/** The KMG six-shade band, used as a rule where the brand field meets the page. */
export function KmgBand({ className }: { className?: string }) {
	return (
		<div className={className} aria-hidden="true">
			{[1, 2, 3, 4, 5, 6].map((n) => (
				<span key={n} style={{ backgroundColor: `var(--kmg-${n})` }} />
			))}
		</div>
	);
}
