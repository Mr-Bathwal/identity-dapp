import CardButton from '../components/CardButton'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="relative rounded-xl overflow-hidden">
        <img src="/images/hero.svg" alt="Digital India" className="absolute inset-0 h-48 w-full object-cover opacity-90" />
        <div className="relative p-6 h-48 grid content-center bg-gradient-to-r from-slate-900/40 to-transparent text-white">
          <div className="text-2xl font-bold drop-shadow">Welcome to Digital Identity Services</div>
          <div className="text-sm opacity-90 drop-shadow">Verify your identity in simple steps. Choose a service below:</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardButton to="/wizard?step=face" title="Face Check" subtitle="Quick selfie verification" img="/images/selfie-illustration.svg" />
        <CardButton to="/wizard?step=aadhaar" title="Aadhaar" subtitle="Scan QR or upload Aadhaar" img="/images/aadhaar-illustration.svg" />
        <CardButton to="/wizard?step=income" title="Income Proof" subtitle="Upload income document" img="/images/income-illustration.svg" />
        <CardButton to="/status" title="My Status" subtitle="View your verification status" img="/images/status-illustration.svg" />
        <CardButton to="/admin" title="Admin Services" subtitle="Organizations, certificates, recognitions" img="/images/gov-building.svg" />
        <CardButton to="/settings" title="Settings" subtitle="Network & contract addresses" img="/images/settings.svg" />
      </div>
    </div>
  )
}
