import Link from "next/link";
import AppConnect from "@/components/sections/AppConnect";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* SECTION 1: GLOBAL HERO */}
      <section className="relative w-full py-24 md:py-48 px-6 flex flex-col items-center justify-center text-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-transparent opacity-50 z-0"></div>

        {/* ANIMATED BACKGROUND ACCENT */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-customer-red opacity-10 blur-[120px] rounded-full z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-provider-green opacity-10 blur-[120px] rounded-full z-0"></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.9]">
            THE GLOBAL <span className="text-brand-customer-red">WORK</span> <br />
            OS FOR <span className="text-brand-provider-green">PIECE JOBS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Scale local labor with enterprise safety. Verified pros, real-time tracking, and multi-tenant isolation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="px-10 py-5 bg-brand-customer-red text-white font-bold rounded-full text-lg hover:scale-105 transition-transform"
            >
              Find a Service
            </Link>
            <Link
              href="/become-a-provider"
              className="px-10 py-5 bg-brand-provider-green text-white font-bold rounded-full text-lg hover:scale-105 transition-transform"
            >
              Start Earning
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STATS */}
      <section className="w-full py-12 px-6 border-b border-gray-100 flex justify-center bg-white">
        <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-neutral-dark">41+</p>
            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Service Categories</p>
          </div>
          <div>
            <p className="text-3xl font-black text-neutral-dark">100%</p>
            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Verified Pros</p>
          </div>
          <div>
            <p className="text-3xl font-black text-neutral-dark">20m</p>
            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Proximity Tracking</p>
          </div>
          <div>
            <p className="text-3xl font-black text-neutral-dark">GLOBAL</p>
            <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Workspace Ready</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BENTO GRID SERVICES (SCALABILITY) */}
      <section className="w-full py-24 px-6 bg-[#F9F9F9] flex flex-col items-center">
        <div className="max-w-6xl w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-dark tracking-tighter">
              A SERVICE FOR <br /> EVERY <span className="text-brand-customer-red italic">PIECE</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-80 flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">HDS - Domestic</span>
                <h3 className="text-2xl font-bold mt-2">Home & Deep Cleaning</h3>
              </div>
              <div className="w-12 h-1 bg-brand-customer-red"></div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-80 flex flex-col justify-between md:col-span-2 relative overflow-hidden group">
               <div className="relative z-10 bg-white/90 p-4 rounded-xl inline-block w-fit">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">HMS - Handyman</span>
                <h3 className="text-2xl font-bold mt-2">Technical & Repairs</h3>
              </div>
              <p className="relative z-10 text-gray-600 font-medium">Licensed plumbers, electricians, and technicians on demand.</p>
              <div className="absolute inset-0 bg-brand-customer-red opacity-0 group-hover:opacity-5 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: APP CONNECT */}
      <AppConnect />
    </main>
  );
}
