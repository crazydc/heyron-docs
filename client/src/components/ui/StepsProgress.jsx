import './StepsProgress.css'

export default function StepsProgress({ 
  steps = [], 
  currentStep = 0,
  doneSteps = []
}) {
  return (
    <div className="steps-progress">
      {steps.map((step, index) => {
        const isDone = doneSteps.includes(index)
        const isCurrent = index === currentStep
        const isPending = !isDone && !isCurrent
        
        return (
          <div 
            key={index} 
            className={`steps-progress__step 
              ${isDone ? 'steps-progress__step--done' : ''} 
              ${isCurrent ? 'steps-progress__step--current' : ''}
              ${isPending ? 'steps-progress__step--pending' : ''}
            `}
          >
            <div className="steps-progress__indicator">
              {isDone ? (
                <span className="steps-progress__check">✓</span>
              ) : (
                <span className="steps-progress__number">{index + 1}</span>
              )}
            </div>
            <span className="steps-progress__label">{step}</span>
            {index < steps.length - 1 && (
              <div className={`steps-progress__connector ${isDone ? 'steps-progress__connector--done' : ''}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}