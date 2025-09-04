import { Outlet, Link, useLocation } from 'react-router-dom'
import WalletConnectButton from './components/WalletConnectButton'

export default function App() {
  const { pathname } = useLocation()
  const tabs = [
    { to: '/', label: 'Home' },
    { to: '/status', label: 'My Status' },
    { to: '/wizard', label: 'Verification' },
    { to: '/admin', label: 'Admin Services' },
    { to: '/settings', label: 'Settings' },
  ]
  return (
    <div className="min-h-screen crystal-bg text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur glass">
        <div className="flag-ribbon animate-flag" />
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-600 to-indiaGreen grid place-items-center">
              <img src="/images/ashoka.svg" alt="Ashoka" className="h-6 w-6" />
            </div>
            <div className="font-semibold">
              Digital Identity Services
              <div className="text-xs text-white/60">Government of India</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map(t => (
              <Link
                key={t.to}
                to={t.to}
                className={`px-3 py-1.5 rounded-md hover:bg-white/10 ${pathname === t.to ? 'bg-white/10' : ''}`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 rounded-full text-xs bg-white/10 border border-white/20 text-slate-200">Network: Ethereum Sepolia</span>
            <WalletConnectButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
      <footer className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-white/50">
        Bharat Digital Public Infrastructure • Secure • Private
      </footer>
    </div>
  )
}

