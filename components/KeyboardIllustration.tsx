const ROW1 = ['Q','W','E','R','T','Y','U','I','O','P']
const ROW2 = ['A','S','D','F','G','H','J','K','L']
const ROW3 = ['Z','X','C','V','B','N','M']

export default function KeyboardIllustration() {
  return (
    <div className="kb-scene" aria-hidden="true">
      <div className="kb">
        <div className="kb-row">
          {ROW1.map(k => <div key={k} className="key">{k}</div>)}
        </div>
        <div className="kb-row kb-r2">
          {ROW2.map(k => <div key={k} className="key">{k}</div>)}
        </div>
        <div className="kb-row kb-r3">
          {ROW3.map(k => <div key={k} className="key">{k}</div>)}
        </div>
      </div>
    </div>
  )
}
