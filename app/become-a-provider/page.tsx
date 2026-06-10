import { CheckCircle2, TrendingUp, ShieldCheck, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function BecomeProviderPage() {
  return (
    <div className="bg-white text-neutral-dark min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-brand-provider-green py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/provider-pattern.svg')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
            Work on Your <br /><span className="italic opacity-80">Own Terms</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
            Join the elite network of providers and earn more with the world's most advanced work operating system.
          </p>
          <button className="px-12 py-6 bg-white text-brand-provider-green font-black rounded-full text-xl hover:scale-105 transition-transform shadow-xl">
            Apply to Join
          </button>
        </div>
      </section>

      {/* WHY PIECEJOB SECTION */}
      <section className="py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">WHY PROVIDERS CHOOSE PIECEJOB</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <TrendingUp size={40} className="text-brand-provider-green mb-6" />
                <h3 className="text-2xl font-bold mb-4">Higher Earnings</h3>
                <p className="text-gray-600">Competitive commission rates that decrease as you level up. Keep more of what you earn.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <ShieldCheck size={40} className="text-brand-provider-green mb-6" />
                <h3 className="text-2xl font-bold mb-4">Secured Payments</h3>
                <p className="text-gray-600">Every booking fee is paid upfront. No more chasing customers for payment.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <Zap size={40} className="text-brand-provider-green mb-6" />
                <h3 className="text-2xl font-bold mb-4">Instant Matching</h3>
                <p className="text-gray-600">Our Wave-Matching algorithm ensures the best jobs near you find you first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIER SYSTEM (SECTION 14) */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <span className="text-brand-provider-green font-bold uppercase tracking-widest text-sm">Performance Excellence</span>
                    <h2 className="text-4xl md:text-6xl font-black mt-4 tracking-tighter">THE ELITE LADDER</h2>
                </div>
                <p className="text-gray-400 text-lg md:text-right max-w-sm">Level up your status to unlock lower commissions and priority broadcasts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                    { name: 'Bronze', comm: '20%', req: 'New Entry', color: 'bg-orange-900' },
                    { name: 'Silver', comm: '18%', req: '20+ Jobs', color: 'bg-gray-400' },
                    { name: 'Gold', comm: '15%', req: '50+ Jobs', color: 'bg-yellow-500' },
                    { name: 'Platinum', comm: '12%', req: '150+ Jobs', color: 'bg-blue-300' },
                    { name: 'Elite', comm: '10%', req: '300+ Jobs', color: 'bg-brand-provider-green' }
                ].map((tier) => (
                    <div key={tier.name} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between h-64">
                        <div>
                            <div className={`w-3 h-3 rounded-full ${tier.color} mb-4`}></div>
                            <h4 className="text-2xl font-black">{tier.name}</h4>
                            <p className="text-brand-provider-green font-bold text-sm">{tier.comm} Commission</p>
                        </div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{tier.req}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* VERIFICATION STEPS (SECTION 7) */}
      <section className="py-24 px-6 flex justify-center bg-[#F9F9F9]">
        <div className="max-w-4xl w-full">
            <h2 className="text-4xl font-black mb-16 text-center tracking-tight">4 STEPS TO VERIFICATION</h2>
            <div className="space-y-12">
                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-provider-green rounded-full flex items-center justify-center font-black text-white shrink-0">1</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Create Profile</h3>
                        <p className="text-gray-600">Register on the app and select up to 3 service categories based on your expertise.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-provider-green rounded-full flex items-center justify-center font-black text-white shrink-0">2</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Upload Documents</h3>
                        <p className="text-gray-600">Submit your ID, criminal background check, and relevant trade licenses or certifications.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-provider-green rounded-full flex items-center justify-center font-black text-white shrink-0">3</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Vetting Process</h3>
                        <p className="text-gray-600">Our verification admins review your application. High-vetting services may require a short video interview.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-provider-green rounded-full flex items-center justify-center font-black text-white shrink-0">4</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Go Live</h3>
                        <p className="text-gray-600">Once approved, toggle your status to Online and start receiving high-priority job broadcasts.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
