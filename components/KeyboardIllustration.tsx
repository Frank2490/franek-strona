// Each number = flex value (1u = standard key width). All rows sum to 15u.
const ROWS: number[][] = [
  // Number row: 13 standard + backspace (2u)
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  // QWERTY: tab (1.5u) + 12 standard + backslash (1.5u)
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
  // ASDF: caps (1.75u) + 11 standard + enter (2.25u)
  [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25],
  // ZXCV: left shift (2.25u) + 10 standard + right shift (2.75u)
  [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.75],
  // Bottom: ctrl (1.5u) + 2 mods + space (6u) + 2 mods + 2 mods
  [1.5, 1.25, 1.25, 6, 1.25, 1.25, 1.25, 1.25],
]

export default function KeyboardIllustration() {
  return (
    <div className="kb-scene" aria-hidden="true">
      <div className="kb">
        {ROWS.map((row, i) => (
          <div key={i} className="kb-row">
            {row.map((flex, j) => (
              <div key={j} className="key" style={{ flex }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
