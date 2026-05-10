import { Link } from 'react-router-dom'
import './WorkflowBar.css'

export default function WorkflowBar({ steps = [] }) {
  return (
    <div className="workflow-bar">
      {steps.map((step, index) => (
        <div key={index} className="workflow-bar__step">
          <div className="workflow-bar__step-number">{index + 1}</div>
          <div className="workflow-bar__step-content">
            <span className="workflow-bar__step-icon">{step.icon}</span>
            <span className="workflow-bar__step-label">{step.label}</span>
          </div>
          {step.href && (
            <Link to={step.href} className="workflow-bar__step-link">
              →
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}