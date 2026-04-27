import './StepIndicator.css'

export default function StepIndicator({ steps, current }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div 
          key={index}
          className={`step-dot ${index < current ? 'completed' : ''} ${index === current ? 'current' : ''}`}
        >
          <span className="step-number">
            {index < current ? '✓' : index + 1}
          </span>
          <span className="step-label">{step}</span>
        </div>
      ))}
      <div className="step-line">
        <div 
          className="step-progress" 
          style={{ width: `${(current / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
