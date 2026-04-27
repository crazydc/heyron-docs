import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './styles/global.css'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import Account from './pages/Account'

function PrivateRoute({ children }) {
  const isAuthenticated = store.getState().auth.isAuthenticated
  return isAuthenticated ? children : <Navigate to="/signin" />
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
