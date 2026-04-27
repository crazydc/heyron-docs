import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() { return (<BrowserRouter><div className="app"><Routes><Route path="/" element={<Landing />} /><Route path="/signup" element={<SignUp />} /><Route path="/signin" element={<SignIn />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/onboarding" element={<Onboarding />} /><Route path="/account" element={<Account />} /></Routes></div></BrowserRouter>); }
function Landing() { return <div style={{padding:'2rem',textAlign:'center'}}><h1>Heyron</h1><p>Your AI-powered assistant platform</p><a href="/signup">Get Started</a> | <a href="/signin">Sign In</a></div>; }
function SignUp() { return <div style={{padding:'2rem'}}><h1>Sign Up</h1></div>; }
function SignIn() { return <div style={{padding:'2rem'}}><h1>Sign In</h1></div>; }
function Dashboard() { return <div style={{padding:'2rem'}}><h1>Dashboard</h1></div>; }
function Onboarding() { return <div style={{padding:'2rem'}}><h1>Onboarding</h1></div>; }
function Account() { return <div style={{padding:'2rem'}}><h1>Account</h1></div>; }
export default App;
