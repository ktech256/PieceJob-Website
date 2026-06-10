import { Shield, MapPin, Zap, Lock, Bell, AlertCircle } from "lucide-react";

export default function SafetyCenterPage() {
  return (
    <div className="bg-white text-neutral-dark min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-brand-customer-red py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            Safe by <span className="italic opacity-80">Design</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            PieceJob is engineered with enterprise-grade safety protocols to protect every customer and provider, every time.
          </p>
        </div>
      </section>

      {/* CORE SAFETY PILLARS */}
      <section className="py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-brand-customer-red/10 text-brand-customer-red flex items-center justify-center rounded-full mb-6">
              <Shield size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Vetted Professionals</h3>
            <p className="text-gray-600 leading-relaxed">
              Every provider undergoes a rigorous 4-tier verification process, including criminal background checks, trade license validation, and 3-step reference screening.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-brand-customer-red/10 text-brand-customer-red flex items-center justify-center rounded-full mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Real-Time Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience the peace of mind that comes with precise live tracking. Our 20-meter proximity enforcement ensures jobs only start when the pro is at your door.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="w-16 h-16 bg-brand-customer-red/10 text-brand-customer-red flex items-center justify-center rounded-full mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Stealth SOS System</h3>
            <p className="text-gray-600 leading-relaxed">
              A high-priority emergency button is integrated into every job. One tap alerts the 5 nearest providers, local admins, and your emergency contacts instantly.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & HARDENING */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-customer-red font-bold uppercase tracking-widest text-sm">Engineered for Trust</span>
            <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8 tracking-tighter">OUR SAFETY STACK</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-customer-red font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Device Binding</h4>
                  <p className="text-gray-400">One account, one device. We bind provider profiles to physical hardware IDs to prevent account sharing and identity fraud.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-customer-red font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Immutable Audit Logs</h4>
                  <p className="text-gray-400">Every single action—from a price change to a chat message—is logged permanently. Our blockchain-inspired ledger ensures total accountability.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center">
                  <span className="text-brand-customer-red font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Identity Verification</h4>
                  <p className="text-gray-400">Automated facial matching against government-issued IDs ensures the person at your door is exactly who they claim to be.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] bg-brand-customer-red/10 rounded-[48px] border border-white/10 flex items-center justify-center overflow-hidden">
             {/* SIMULATED SOS UI UI */}
             <div className="w-64 h-[500px] bg-white rounded-[32px] border-8 border-gray-800 p-4 text-neutral-dark shadow-2xl">
                <div className="w-12 h-1 bg-gray-200 mx-auto mb-8 rounded-full"></div>
                <div className="h-24 w-24 bg-red-600 rounded-full mx-auto flex items-center justify-center text-white mb-6 animate-pulse">
                  <Bell size={40} />
                </div>
                <p className="text-center font-black text-xl mb-2">SOS ACTIVE</p>
                <p className="text-center text-xs text-gray-500 mb-8 px-4">Emergency alerts sent to local units and nearby pros.</p>
                <div className="space-y-3">
                  <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 gap-3">
                    <MapPin size={16} className="text-red-600" />
                    <div className="h-2 w-24 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-10 bg-gray-100 rounded-lg flex items-center px-3 gap-3">
                    <Lock size={16} className="text-red-600" />
                    <div className="h-2 w-32 bg-gray-300 rounded"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// MOCKED LUCIDE ICONS (Since we don't have the lib installed yet)
function LucidePlaceholder() { return <div className="w-full h-full bg-current opacity-20"></div>; }
