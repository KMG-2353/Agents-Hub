/**
 * The hero's signature: a development triangle. The upper-left cells are the
 * known record; the lower-right cells are projected, filling in as a slow
 * diagonal wave, as if the agents were completing the table.
 */
const SIZE = 9;
const STEP = 12;
const CELL = 10;

interface Cell {
	r: number;
	c: number;
	known: boolean;
	delay: number;
}

const cells: Cell[] = [];
for (let r = 0; r < SIZE; r++) {
	for (let c = 0; c < SIZE; c++) {
		const known = c < SIZE - r;
		const wave = r + c - SIZE;
		cells.push({ r, c, known, delay: known ? 0 : wave * 0.34 + r * 0.05 });
	}
}

export function Lattice({ className }: { className?: string }) {
	const extent = SIZE * STEP - (STEP - CELL);
	return (
		<svg
			viewBox={`0 0 ${extent} ${extent}`}
			className={className}
			aria-hidden="true"
			focusable="false"
		>
			{cells.map(({ r, c, known, delay }) => (
				<rect
					key={`${r}-${c}`}
					x={c * STEP}
					y={r * STEP}
					width={CELL}
					height={CELL}
					className={known ? "lattice-known" : "lattice-open"}
					style={known ? undefined : { animationDelay: `${delay.toFixed(2)}s` }}
				/>
			))}
		</svg>
	);
}

/** Small 3×3 lattice used as the wordmark's mark. */
export function LatticeMark({ className }: { className?: string }) {
	const filled = [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[2, 0],
	];
	return (
		<svg viewBox="0 0 34 34" className={className} aria-hidden="true" focusable="false">
			{[0, 1, 2].flatMap((r) =>
				[0, 1, 2].map((c) => {
					const on = filled.some(([fr, fc]) => fr === r && fc === c);
					return (
						<rect
							key={`${r}-${c}`}
							x={c * 12 + 0.5}
							y={r * 12 + 0.5}
							width={9}
							height={9}
							fill={on ? "currentColor" : "none"}
							stroke="currentColor"
							strokeWidth={on ? 0 : 1}
							strokeOpacity={0.6}
						/>
					);
				}),
			)}
		</svg>
	);
}
