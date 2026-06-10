import { Award, Users, Globe2, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-dark min-h-screen">
      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-customer-red font-bold uppercase tracking-widest text-sm mb-4 block">Our Origin Story</span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.85]">
            Engineering the <br /><span className="text-brand-customer-red italic">Future of Work</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mt-12">
            PieceJob was born from a simple observation: the global piece-job market was fragmented, opaque, and often unsafe. We set out to build the world's most advanced work operating system.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-customer-red/10 text-brand-customer-red rounded-2xl flex items-center justify-center shrink-0">
                    <Globe2 size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Global Scale, Local Isolation</h3>
                    <p className="text-gray-600">Built on a multi-tenant architecture that ensures every country operates within its own secured, isolated workspace while benefiting from global technology.</p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-customer-red/10 text-brand-customer-red rounded-2xl flex items-center justify-center shrink-0">
                    <Award size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Second Generation Platform</h3>
                    <p className="text-gray-600">Building on the legacy of TowMech, PieceJob represents a quantum leap in marketplace engineering—hardened by real-world operational data.</p>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="w-14 h-14 bg-brand-customer-red/10 text-brand-customer-red rounded-2xl flex items-center justify-center shrink-0">
                    <Users size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Empowering Local Pros</h3>
                    <p className="text-gray-600">We don't just provide jobs; we provide a career ladder. From Bronze to Elite, we reward excellence with lower costs and higher priority.</p>
                </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-[64px] h-[500px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-customer-red/20 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur p-8 rounded-3xl border border-white/20">
                <p className="text-sm font-bold text-brand-customer-red mb-2 uppercase tracking-widest">Our Mission</p>
                <p className="text-2xl font-black tracking-tight">To connect 1 million verified professionals to high-value opportunities by 2030.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
