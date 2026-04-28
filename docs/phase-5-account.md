## ✅ COMPLETED

# Phase 5: Account Page

**Objective:** Create account management page with profile editing, payment history, and subscription management.

---

## Overview

The account page has 3 sections:
1. **Profile** - Edit name, email, Discord ID
2. **Payments** - View payment history
3. **Subscription** - Manage subscription, cancellation, refunds

---

## Step 1: Create Account Page Structure

### src/pages/Account.jsx

```jsx
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { updateUser } from '../store/slices/authSlice'
import { setProfile } from '../store/slices/userSlice'
import Layout from '../components/layout/Layout'
import TabGroup from '../components/ui/TabGroup'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Alert from '../components/ui/Alert'
import PaymentRow from '../components/account/PaymentRow'
import ConfirmDialog from '../components/ui/ConfirmDialog'
import Tooltip from '../components/ui/Tooltip'
import './Account.css'

// Mock data
const MOCK_PAYMENTS = [
  { id: '1', date: '2026-04-15', amount: '£9.99', method: 'Card ending 4242', status: 'paid' },
  { id: '2', date: '2026-03-15', amount: '£9.99', method: 'Card ending 4242', status: 'paid' },
  { id: '3', date: '2026-02-15', amount: '£9.99', method: 'Card ending 4242', status: 'paid' },
]

const ACTIVATED_DATE = new Date('2026-02-15')
const DAYS_SINCE_ACTIVATION = Math.floor((Date.now() - ACTIVATED_DATE) / (1000 * 60 * 60 * 24))
const CAN_REQUEST_REFUND = DAYS_SINCE_ACTIVATION < 5

export default function Account() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.auth)
  const { subscription } = useAppSelector(state => state.user)
  
  const [activeTab, setActiveTab] = useState('profile')
  const [profileForm, setProfileForm] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    discordId: user?.discordId || ''
  })
  const [saving, setSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)
  const [showRefundConfirm, setShowRefundConfirm] = useState(false)

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileForm(prev => ({ ...prev, [name]: value }))
    setSaveSuccess(false)
  }

  const handleSaveProfile = async () => {
    setSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    dispatch(updateUser(profileForm))
    dispatch(setProfile(profileForm))
    
    setSaving(false)
    setSaveSuccess(true)
    
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleCancelSubscription = async () => {
    setShowCancelConfirm(false)
    // API call to cancel
    console.log('Subscription cancelled')
  }

  const handleRequestRefund = async () => {
    setShowRefundConfirm(false)
    // API call for refund
    console.log('Refund requested')
  }

  return (
    <Layout>
      <div className="account-page">
        <header className="account-header">
          <h1>Account</h1>
          <p>Manage your profile and subscription</p>
        </header>

        <TabGroup
          tabs={[
            { id: 'profile', label: 'Profile' },
            { id: 'payments', label: 'Payments' },
            { id: 'subscription', label: 'Subscription' }
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        >
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="profile-section">
              {saveSuccess && (
                <Alert type="success" dismissible onDismiss={() => setSaveSuccess(false)}>
                  Profile saved successfully!
                </Alert>
              )}
              
              <div className="profile-form">
                <Input
                  label="Full Name"
                  name="fullName"
                  value={profileForm.fullName}
                  onChange={handleProfileChange}
                  required
                />
                
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={profileForm.email}
                  onChange={handleProfileChange}
                  required
                />
                
                <Input
                  label="Discord ID"
                  name="discordId"
                  value={profileForm.discordId}
                  onChange={handleProfileChange}
                  hint="Your Discord user ID"
                />
                
                <div className="form-actions">
                  <Button onClick={handleSaveProfile} loading={saving}>
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === 'payments' && (
            <div className="payments-section">
              <div className="activation-info">
                <span className="label">Account Activated:</span>
                <span className="value">{ACTIVATED_DATE.toLocaleDateString()}</span>
              </div>
              
              <div className="payments-list">
                <div className="payments-header">
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Method</span>
                  <span>Status</span>
                </div>
                {MOCK_PAYMENTS.map(payment => (
                  <PaymentRow key={payment.id} payment={payment} />
                ))}
              </div>
            </div>
          )}

          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <div className="subscription-section">
              <div className="subscription-status">
                <div className="status-header">
                  <h3>Current Plan</h3>
                  <span className={`plan-badge ${subscription.status}`}>
                    {subscription.status || 'active'}
                  </span>
                </div>
                <p className="plan-name">Premium Monthly</p>
                <p className="plan-price">£9.99/month</p>
              </div>

              <div className="subscription-actions">
                <h3>Subscription Actions</h3>
                
                <div className="action-row">
                  <div className="action-info">
                    <strong>Cancel Subscription</strong>
                    <p>Stop automatic renewals</p>
                  </div>
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowCancelConfirm(true)}
                    disabled={subscription.status === 'cancelled'}
                  >
                    {subscription.status === 'cancelled' ? 'Cancelled' : 'Cancel'}
                  </Button>
                </div>

                <div className="action-row">
                  <div className="action-info">
                    <strong>
                      Request Refund 
                      <Tooltip content="Refunds are only possible within 5 days of service activation">
                        <span className="info-icon">ℹ</span>
                      </Tooltip>
                    </strong>
                    <p>Get your money back</p>
                  </div>
                  <Button 
                    variant={CAN_REQUEST_REFUND ? 'danger' : 'secondary'}
                    onClick={() => setShowRefundConfirm(true)}
                    disabled={!CAN_REQUEST_REFUND || subscription.status === 'refunded'}
                    title={!CAN_REQUEST_REFUND ? 'Refunds only possible within 5 days of service' : ''}
                  >
                    {subscription.status === 'refunded' ? 'Refunded' : CAN_REQUEST_REFUND ? 'Request Refund' : 'Expired'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </TabGroup>

        {/* Cancel Confirmation Modal */}
        <ConfirmDialog
          isOpen={showCancelConfirm}
          onClose={() => setShowCancelConfirm(false)}
          onConfirm={handleCancelSubscription}
          title="Cancel Subscription?"
          message="Your subscription will remain active until the end of your billing period. You won't be charged again."
          confirmLabel="Yes, Cancel"
          cancelLabel="Keep Subscription"
        />

        {/* Refund Confirmation Modal */}
        <ConfirmDialog
          isOpen={showRefundConfirm}
          onClose={() => setShowRefundConfirm(false)}
          onConfirm={handleRequestRefund}
          title="Request Refund?"
          message={`This will refund £9.99 to your original payment method. Your account will be downgraded immediately.`}
          confirmLabel="Yes, Refund £9.99"
          cancelLabel="Keep Subscription"
          danger
        />
      </div>
    </Layout>
  )
}
```

---

## Step 2: Supporting Components

### PaymentRow Component

```jsx
// src/components/account/PaymentRow.jsx
import './PaymentRow.css'

export default function PaymentRow({ payment }) {
  return (
    <div className="payment-row">
      <span className="payment-date">{payment.date}</span>
      <span className="payment-amount">{payment.amount}</span>
      <span className="payment-method">{payment.method}</span>
      <span className={`payment-status ${payment.status}`}>
        {payment.status}
      </span>
    </div>
  )
}
```

### PaymentRow.css

```css
.payment-row {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
  align-items: center;
}

.payment-row:last-child {
  border-bottom: none;
}

.payment-date {
  color: var(--text-secondary);
  font-size: 14px;
}

.payment-amount {
  font-weight: 600;
}

.payment-method {
  color: var(--text-secondary);
  font-size: 13px;
}

.payment-status {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
}

.payment-status.paid {
  background: rgba(74, 222, 128, 0.15);
  color: var(--success);
}

.payment-status.pending {
  background: rgba(234, 179, 8, 0.15);
  color: var(--warning);
}

.payment-status.failed {
  background: rgba(248, 113, 113, 0.15);
  color: var(--error);
}
```

### ConfirmDialog Component

```jsx
// src/components/ui/ConfirmDialog.jsx
import Modal from './Modal'
import Button from './Button'

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  danger = false
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="confirm-dialog">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-actions">
          <Button variant="ghost" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button 
            variant={danger ? 'danger' : 'primary'} 
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
```

### ConfirmDialog.css

```css
.confirm-dialog {
  text-align: center;
}

.confirm-dialog h3 {
  font-size: 18px;
  margin-bottom: 12px;
}

.confirm-dialog p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.confirm-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}
```

### Tooltip Component

```jsx
// src/components/ui/Tooltip.jsx
import { useState } from 'react'
import './Tooltip.css'

export default function Tooltip({ children, content, position = 'top' }) {
  const [visible, setVisible] = useState(false)

  return (
    <span 
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={`tooltip tooltip-${position}`}>
          {content}
        </span>
      )}
    </span>
  )
}
```

### Tooltip.css

```css
.tooltip-wrapper {
  position: relative;
  display: inline-flex;
  margin-left: 4px;
}

.info-icon {
  color: var(--text-muted);
  cursor: help;
  font-size: 12px;
}

.tooltip {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  white-space: nowrap;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}

.tooltip::after {
  content: '';
  position: absolute;
  border: 6px solid transparent;
}

.tooltip-top::after {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--border);
}
```

---

## Step 3: Account Page CSS

### src/pages/Account.css

```css
.account-page {
  padding: var(--space-lg) 0;
}

.account-header {
  margin-bottom: 32px;
}

.account-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
}

.account-header p {
  color: var(--text-secondary);
}

/* Profile Section */
.profile-form {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-actions {
  margin-top: 8px;
}

/* Payments Section */
.activation-info {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 16px;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
}

.activation-info .label {
  color: var(--text-muted);
}

.activation-info .value {
  font-weight: 600;
}

.payments-list {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 0 20px;
}

.payments-header {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Subscription Section */
.subscription-status {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 24px;
}

.status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.status-header h3 {
  font-size: 14px;
  color: var(--text-muted);
}

.plan-badge {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(74, 222, 128, 0.15);
  color: var(--success);
}

.plan-badge.cancelled {
  background: rgba(234, 179, 8, 0.15);
  color: var(--warning);
}

.plan-badge.refunded {
  background: rgba(248, 113, 113, 0.15);
  color: var(--error);
}

.plan-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.plan-price {
  color: var(--text-secondary);
}

.subscription-actions h3 {
  font-size: 16px;
  margin-bottom: 16px;
}

.action-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  margin-bottom: 12px;
}

.action-info strong {
  display: block;
  margin-bottom: 4px;
}

.action-info p {
  color: var(--text-secondary);
  font-size: 13px;
  margin: 0;
}

.action-row button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .payment-row,
  .payments-header {
    grid-template-columns: 1fr 1fr;
  }
  
  .payment-method,
  .payments-header span:nth-child(3) {
    display: none;
  }
  
  .action-row {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
```

---

## Checklist

- [ ] Create Account page container
- [ ] Add TabGroup with 3 tabs
- [ ] Create Profile editing form
- [ ] Add save functionality with Redux
- [ ] Create Payment history list
- [ ] Show activation date
- [ ] Create Subscription status display
- [ ] Add Cancel button with confirmation
- [ ] Add Refund button with logic (5-day window)
- [ ] Add Tooltip component
- [ ] Add ConfirmDialog component
- [ ] Test responsive layout

---

## Business Logic

### Refund Window
- Check: `daysSinceActivation < 5`
- If true: Allow refund
- If false: Disable button, show tooltip

### Cancellation
- Sets status to 'cancelled'
- Keeps service until end of billing period
- No more charges

---

## Estimated Time

- **Development:** 2-3 hours
- **Testing:** 30 minutes
--- Implementation Notes ---
Updated: 2026-04-28
- Implemented as part of heyron-docs local deployment
- Running on https://thesumblers.duckdns.org:9843/heyron-docs/
