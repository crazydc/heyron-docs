import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { updateOnboarding } from '../../store/onboardingSlice'
import { Mascot, Brand, Steps } from '../ui/Mascot'
import './onboarding.css'

export default function AboutYouScreen({ step, totalSteps, onNext, onBack }) {
  const dispatch = useAppDispatch()
  const { agentName, aboutYou } = useAppSelector(state => state.onboarding)
  const [text, setText] = useState(aboutYou || '')

  return (
    <div className="panel">
      <Brand />
      <Steps current={step} total={totalSteps} />
      
      <div className="hero">
        <Mascot pose="thinking" size={90} />
        <div className="hero-text">
          <h1 className="headline">Tell {agentName || 'your agent'} who you are.</h1>
          <p className="sub">This is the part nothing else on the market does. You're giving yours an origin story.</p>
        </div>
      </div>

      <p className="about-prompt">
        The more honest the better. This is what makes a generic assistant into <strong>yours</strong>. 
        Think: what you do for work, what you're building, who's in your life, how you like to be talked to, 
        what you're bad at remembering, what you wish a friend would chase you about.
      </p>

      <textarea 
        className="input about-textarea" 
        value={text} 
        onChange={(e) => { setText(e.target.value); dispatch(updateOnboarding({ aboutYou: e.target.value })) }} 
        rows={10} 
        placeholder="I'm Cassie. I run product at Heyron. I have a dog named Coop. I'm bad at eating during work hours and great at forgetting to reply to my mom. I learn best by doing, not by reading docs. I care about craft, kindness, and not wasting people's time. I want you to flag when I haven't replied to someone in more than 2 days, help me draft messages when I'm stuck, and remind me to drink water…"
      />

      <p className="about-note">Editable anytime from <strong>Settings → About you</strong>.</p>
      
      <div className="actions">
        <button className="btn btn-ghost btn-back" onClick={onBack}>Back</button>
        <button className="btn btn-primary" onClick={onNext} disabled={text.trim().length < 20}>Continue</button>
      </div>
    </div>
  )
}
