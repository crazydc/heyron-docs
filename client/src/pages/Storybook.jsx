import { useState } from 'react'
import Button from '../components/ui/Button'
import Pill from '../components/ui/Pill'
import Input, { Textarea, Select } from '../components/ui/Input'
import Toggle from '../components/ui/Toggle'
import StatCard from '../components/ui/StatCard'
import CardGrid from '../components/ui/CardGrid'
import Panel from '../components/ui/Panel'
import QuickCard from '../components/ui/QuickCard'
import IconCard from '../components/ui/IconCard'
import OptionCard from '../components/ui/OptionCard'
import RonPanel from '../components/ui/RonPanel'
import DumpsterModal from '../components/ui/DumpsterModal'
import WorkflowBar from '../components/ui/WorkflowBar'
import StepsProgress from '../components/ui/StepsProgress'
import SpaceScene from '../components/hero/SpaceScene'
import NeuronField from '../components/hero/NeuronField'
import FooterNav from '../components/layout/FooterNav'
import styles from './Storybook.module.css'

const COMPONENTS = [
  { id: 'buttons', label: 'Button', category: 'Primitive' },
  { id: 'pills', label: 'Pill/Badge', category: 'Primitive' },
  { id: 'inputs', label: 'Input/Textarea/Select', category: 'Primitive' },
  { id: 'toggles', label: 'Toggle', category: 'Primitive' },
  { id: 'statcards', label: 'StatCard', category: 'Data Display' },
  { id: 'cardgrid', label: 'CardGrid', category: 'Data Display' },
  { id: 'panels', label: 'Panel', category: 'Data Display' },
  { id: 'quickcards', label: 'QuickCard', category: 'Interactive' },
  { id: 'iconcards', label: 'IconCard', category: 'Interactive' },
  { id: 'optioncards', label: 'OptionCard', category: 'Interactive' },
  { id: 'ronpanel', label: 'RonPanel', category: 'Special' },
  { id: 'dumpstermodal', label: 'DumpsterModal', category: 'Special' },
  { id: 'workflowbar', label: 'WorkflowBar', category: 'Navigation' },
  { id: 'stepsprogress', label: 'StepsProgress', category: 'Navigation' },
  { id: 'spacescene', label: 'SpaceScene', category: 'Hero' },
  { id: 'neuronfield', label: 'NeuronField', category: 'Hero' },
  { id: 'footernav', label: 'FooterNav', category: 'Navigation' }
]

const WORKFLOW_STEPS = [
  { icon: '📝', label: 'Step 1' },
  { icon: '🔍', label: 'Step 2' },
  { icon: '⚡', label: 'Step 3' }
]

const PROGRESS_STEPS = ['Step One', 'Step Two', 'Step Three', 'Step Four']

export default function Storybook() {
  const [visibleComponents, setVisibleComponents] = useState(
    COMPONENTS.reduce((acc, c) => ({ ...acc, [c.id]: true }), {})
  )
  const [showDumpsterModal, setShowDumpsterModal] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('option1')
  const [selectedOption, setSelectedOption] = useState(null)
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: true,
    toggle3: false
  })

  const toggleComponent = (id) => {
    setVisibleComponents(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const isVisible = (id) => visibleComponents[id]

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Component Storybook</h1>
            <p className={styles.subtitle}>Review all Heyron UI components in one place</p>
          </div>
        </header>

        <section className={styles.controls}>
          <div className={styles.controlGroup}>
            <label className={styles.controlLabel}>
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
              />
              <span>Reduced Motion</span>
            </label>
          </div>
        </section>

        <section className={styles.componentList}>
          <h2 className={styles.sectionTitle}>Components</h2>
          <div className={styles.checkboxGrid}>
            {COMPONENTS.map(comp => (
              <label key={comp.id} className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  checked={visibleComponents[comp.id]}
                  onChange={() => toggleComponent(comp.id)}
                />
                <span className={styles.checkboxLabel}>{comp.label}</span>
                <span className={styles.checkboxCategory}>{comp.category}</span>
              </label>
            ))}
          </div>
        </section>

        <div className={styles.showcase}>
          {isVisible('buttons') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>Button</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Variants</span>
                  <div className={styles.variantRow}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="icon">⚙</Button>
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Sizes</span>
                  <div className={styles.variantRow}>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>States</span>
                  <div className={styles.variantRow}>
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('pills') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>Pill/Badge</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Variants</span>
                  <div className={styles.variantRow}>
                    <Pill label="Default" />
                    <Pill label="Accent" variant="accent" />
                    <Pill label="Success" variant="success" />
                    <Pill label="Warning" variant="warning" />
                    <Pill label="Error" variant="error" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('inputs') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>Input / Textarea / Select</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Input</span>
                  <div className={styles.variantRow}>
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                      <Input
                        label="Text Input"
                        placeholder="Enter text..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Password</span>
                  <div className={styles.variantRow}>
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                      <Input
                        type="password"
                        label="Password"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Textarea</span>
                  <div className={styles.variantRow}>
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                      <Textarea
                        label="Message"
                        placeholder="Enter your message..."
                        value={textareaValue}
                        onChange={(e) => setTextareaValue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Select</span>
                  <div className={styles.variantRow}>
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                      <Select
                        label="Option"
                        value={selectValue}
                        onChange={(e) => setSelectValue(e.target.value)}
                        options={[
                          { value: 'option1', label: 'Option 1' },
                          { value: 'option2', label: 'Option 2' },
                          { value: 'option3', label: 'Option 3' }
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('toggles') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>Toggle</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>States</span>
                  <div className={styles.variantColumn}>
                    <Toggle
                      label="Toggle Off"
                      checked={toggles.toggle1}
                      onChange={(v) => setToggles({ ...toggles, toggle1: v })}
                    />
                    <Toggle
                      label="Toggle On"
                      checked={toggles.toggle2}
                      onChange={(v) => setToggles({ ...toggles, toggle2: v })}
                    />
                    <Toggle
                      label="With Description"
                      description="This toggle has a description"
                      checked={toggles.toggle3}
                      onChange={(v) => setToggles({ ...toggles, toggle3: v })}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('statcards') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>StatCard</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Variants</span>
                  <CardGrid columns={3}>
                    <StatCard title="Uptime" value="99.9%" trend={0.1} />
                    <StatCard title="Tasks" value="847" trend={12} />
                    <StatCard title="Errors" value="3" trend={-25} />
                  </CardGrid>
                </div>
              </div>
            </section>
          )}

          {isVisible('cardgrid') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>CardGrid</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>3 Columns</span>
                  <CardGrid columns={3}>
                    <Panel>Card 1</Panel>
                    <Panel>Card 2</Panel>
                    <Panel>Card 3</Panel>
                  </CardGrid>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>4 Columns</span>
                  <CardGrid columns={4}>
                    <Panel>Card 1</Panel>
                    <Panel>Card 2</Panel>
                    <Panel>Card 3</Panel>
                    <Panel>Card 4</Panel>
                  </CardGrid>
                </div>
              </div>
            </section>
          )}

          {isVisible('panels') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>Panel</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Variants</span>
                  <CardGrid columns={3}>
                    <Panel>Default Panel</Panel>
                    <Panel variant="elevated">Elevated Panel</Panel>
                    <Panel variant="compact">Compact Panel</Panel>
                  </CardGrid>
                </div>
              </div>
            </section>
          )}

          {isVisible('quickcards') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>QuickCard</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Default</span>
                  <div style={{ maxWidth: '400px' }}>
                    <QuickCard
                      icon="📧"
                      title="Check Emails"
                      description="Review inbox for important messages"
                      href="#"
                    />
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Disabled</span>
                  <div style={{ maxWidth: '400px' }}>
                    <QuickCard
                      icon="🔒"
                      title="Locked Feature"
                      description="This feature is not available"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('iconcards') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>IconCard</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Grid</span>
                  <CardGrid columns={2}>
                    <IconCard
                      icon="🐛"
                      title="Report Bug"
                      description="Found something broken?"
                      buttonText="Report"
                      buttonHref="#"
                    />
                    <IconCard
                      icon="💡"
                      title="Feature Request"
                      description="Have an idea to share?"
                      buttonText="Request"
                      buttonHref="#"
                    />
                  </CardGrid>
                </div>
              </div>
            </section>
          )}

          {isVisible('optioncards') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>OptionCard</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Selection</span>
                  <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <OptionCard
                      title="Option A"
                      description="This is the first option"
                      selected={selectedOption === 'a'}
                      onClick={() => setSelectedOption('a')}
                    />
                    <OptionCard
                      title="Option B"
                      description="This is the second option"
                      selected={selectedOption === 'b'}
                      onClick={() => setSelectedOption('b')}
                      tag="Recommended"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('ronpanel') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>RonPanel</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Default</span>
                  <div style={{ maxWidth: '400px' }}>
                    <RonPanel
                      message="I'm watching over your agent."
                      showDumpster
                      onDumpsterClick={() => setShowDumpsterModal(true)}
                    />
                  </div>
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Without Dumpster</span>
                  <div style={{ maxWidth: '400px' }}>
                    <RonPanel
                      message="Your agent is running smoothly."
                      showDumpster={false}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('dumpstermodal') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>DumpsterModal</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Trigger</span>
                  <Button variant="ghost" onClick={() => setShowDumpsterModal(true)}>
                    Open Modal
                  </Button>
                </div>
              </div>
            </section>
          )}

          {isVisible('workflowbar') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>WorkflowBar</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Default</span>
                  <WorkflowBar steps={WORKFLOW_STEPS} />
                </div>
              </div>
            </section>
          )}

          {isVisible('stepsprogress') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>StepsProgress</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>In Progress</span>
                  <StepsProgress
                    steps={PROGRESS_STEPS}
                    currentStep={1}
                    doneSteps={[0]}
                  />
                </div>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Completed</span>
                  <StepsProgress
                    steps={PROGRESS_STEPS}
                    currentStep={3}
                    doneSteps={[0, 1, 2]}
                  />
                </div>
              </div>
            </section>
          )}

          {isVisible('spacescene') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>SpaceScene</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Hero Background</span>
                  <div style={{ height: '300px', borderRadius: '14px', overflow: 'hidden' }}>
                    <SpaceScene />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('neuronfield') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>NeuronField</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Animated Background</span>
                  <div style={{ height: '200px', borderRadius: '14px', overflow: 'hidden', position: 'relative' }}>
                    <NeuronField dotCount={40} animationSpeed={1} />
                  </div>
                </div>
              </div>
            </section>
          )}

          {isVisible('footernav') && (
            <section className={styles.componentSection}>
              <h3 className={styles.componentTitle}>FooterNav</h3>
              <div className={styles.componentVariants}>
                <div className={styles.variantGroup}>
                  <span className={styles.variantLabel}>Mobile Navigation</span>
                  <div style={{ position: 'relative' }}>
                    <div style={{ height: '80px', background: '#07090C', borderRadius: '14px' }} />
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0' }}>
                      <FooterNav items={[
                        { icon: '🏠', label: 'Home', href: '#' },
                        { icon: '📊', label: 'Stats', href: '#' },
                        { icon: '⚙️', label: 'Settings', href: '#' },
                        { icon: '💬', label: 'Help', href: '#' }
                      ]} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      <DumpsterModal
        isOpen={showDumpsterModal}
        onClose={() => setShowDumpsterModal(false)}
        onSubmit={(password) => {
          console.log('Password:', password)
          setShowDumpsterModal(false)
        }}
      />
    </div>
  )
}