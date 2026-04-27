import Layout from '../components/layout/Layout'
import Hero from '../components/landing/Hero'
import BetaNotice from '../components/landing/BetaNotice'
import HowItWorks from '../components/landing/HowItWorks'
import Stats from '../components/landing/Stats'
import Capabilities from '../components/landing/Capabilities'
import SocialProof from '../components/landing/SocialProof'
import CTASection from '../components/landing/CTASection'

export default function Landing() {
  return (
    <Layout>
      <div className="landing-page">
        <Hero />
        <BetaNotice />
        <HowItWorks />
        <Stats />
        <Capabilities />
        <SocialProof />
        <CTASection />
      </div>
    </Layout>
  )
}
