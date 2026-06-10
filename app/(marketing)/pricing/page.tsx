import { Info, Globe, Map, DollarSign } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="bg-white text-neutral-dark min-h-screen">
      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
            Transparent <br /><span className="text-brand-customer-red italic">Value</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
            PieceJob utilizes a dynamic pricing engine to ensure fair earnings for providers and competitive costs for customers.
          </p>
        </div>
      </section>

      {/* CORE PRICING PILLARS (SECTION 11 & 12) */}
      <section className="py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black mb-8 tracking-tight uppercase flex items-center gap-3">
                <Map className="text-brand-customer-red" />
                Regional Dynamic Pricing
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                Our platform uses local workspace isolation. Pricing is specifically tailored to your Country, City, and specific Geo-fenced Zone.
            </p>
            <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckIcon />
                    <div>
                        <p className="font-bold">Base Booking Fees</p>
                        <p className="text-sm text-gray-500">Calculated per service category to cover verification and safety ops.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckIcon />
                    <div>
                        <p className="font-bold">Demand Surge (PriceBot)</p>
                        <p className="text-sm text-gray-500">Dynamic multipliers up to 2.5x during extreme high-demand periods.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckIcon />
                    <div>
                        <p className="font-bold">Time-based Surcharges</p>
                        <p className="text-sm text-gray-500">Automatic adjustments for weekends, public holidays, and emergency requests.</p>
                    </div>
                </li>
            </ul>
          </div>

          <div className="bg-[#0A0A0A] rounded-3xl p-10 text-white flex flex-col justify-center">
            <span className="text-brand-customer-red font-bold uppercase tracking-widest text-sm mb-4">Revenue Model</span>
            <h3 className="text-4xl font-black mb-8 leading-tight">HOW THE <br />PIECE SPLITS.</h3>

            <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <p className="text-gray-400">Booking Fee (Customer)</p>
                    <p className="font-black text-xl">100% Platform</p>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <p className="text-gray-400">Service Fee (Provider)</p>
                    <p className="font-black text-xl">80-90% Provider</p>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <p className="text-gray-400">Platform Commission</p>
                    <p className="font-black text-xl">10-20% Based on Tier</p>
                </div>
                <div className="flex justify-between items-center pb-4">
                    <p className="text-gray-400">Surge Fees</p>
                    <p className="font-black text-xl">50/50 Split</p>
                </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 flex gap-4 items-center">
                <Info size={24} className="text-brand-customer-red shrink-0" />
                <p className="text-xs text-gray-400">Prices are automatically adjusted based on local currency (USD reference logic enabled).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
    return <div className="w-6 h-6 bg-brand-customer-red rounded-full flex items-center justify-center shrink-0"><CheckCircle2 size={14} className="text-white" /></div>;
}
