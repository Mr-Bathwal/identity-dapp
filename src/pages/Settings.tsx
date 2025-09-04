import { useConfigStore, CONTRACT_KEYS } from '../store/config'
import { useState } from 'react'

export default function Settings() {
  const { chainId, setChainId, addresses, setAddress } = useConfigStore()
  const [local, setLocal] = useState(addresses)

  function save() {
    CONTRACT_KEYS.forEach((k) => {
      const v = (local as any)[k] || ''
      if (v) setAddress(k, v)
    })
    alert('Saved!')
  }

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-xl">
        <img src="/images/settings.svg" alt="Settings" className="absolute inset-0 h-32 w-full object-cover opacity-20" />
        <div className="relative h-32 grid content-center p-4 bg-gradient-to-r from-[#0b1f3a]/60 to-transparent text-white">
          <div className="text-lg font-semibold">Settings</div>
          <div className="text-xs opacity-90">Network and service addresses</div>
        </div>
      </section>
      <section className="glass p-4 rounded-lg border border-white/10">
        <div className="font-semibold mb-3">Network (Ethereum Sepolia)</div>
        <label className="block text-sm">
          <div className="mb-1 text-white/70">Chain ID</div>
          <input
            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/50"
            type="number"
            value={chainId}
            onChange={(e) => setChainId(parseInt(e.target.value || '0', 10))}
          />
        </label>
      </section>

      <section className="glass p-4 rounded-lg border border-white/10">
        <div className="font-semibold mb-3">Service Addresses (Advanced)</div>
        <div className="grid md:grid-cols-2 gap-3">
          {CONTRACT_KEYS.map((key) => (
            <label key={key} className="block text-sm">
              <div className="mb-1 text-white/70">{key}</div>
              <input
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/50"
                placeholder="0x..."
                value={(local as any)[key] || ''}
                onChange={(e) => setLocal((s) => ({ ...s, [key]: e.target.value }))}
              />
            </label>
          ))}
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 rounded-md bg-brand-600 hover:bg-brand-700" onClick={save}>Save</button>
        </div>
      </section>

      <section className="glass p-4 rounded-lg border border-white/10 text-sm text-white/70">
        <div className="font-semibold mb-2">Help</div>
        <ul className="list-disc pl-5 space-y-1">
          <li>Paste deployed addresses for each service above.</li>
          <li>Chain ID for Sepolia is 11155111.</li>
          <li>Optional: set VITE_WALLETCONNECT_PROJECT_ID in a .env to enable WalletConnect.</li>
        </ul>
      </section>
    </div>
  )
}

