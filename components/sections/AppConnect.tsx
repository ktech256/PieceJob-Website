import { Smartphone, Download } from "lucide-react";

export default function AppConnect() {
  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="text-brand-customer-red font-bold uppercase tracking-widest text-sm">Experience the platform</span>
          <h2 className="text-4xl md:text-7xl font-black mt-4 mb-8 tracking-tighter leading-[0.9]">
            EVERY PIECE <br /> IN YOUR <span className="text-brand-customer-red italic">POCKET</span>.
          </h2>
          <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
            Download our native apps designed for extreme reliability. Real-time matching, secure payments, and live tracking at your fingertips.
          </p>

          <div className="flex flex-wrap gap-4">
             <div className="px-8 py-4 bg-black text-white rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-gray-900 transition-colors">
                <Smartphone size={32} />
                <div>
                   <p className="text-[10px] opacity-60 uppercase font-bold">Download for</p>
                   <p className="text-lg font-bold leading-none mt-1">iOS App Store</p>
                </div>
             </div>
             <div className="px-8 py-4 bg-black text-white rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-gray-900 transition-colors">
                <Download size={32} />
                <div>
                   <p className="text-[10px] opacity-60 uppercase font-bold">Get it on</p>
                   <p className="text-lg font-bold leading-none mt-1">Google Play</p>
                </div>
             </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center">
            {/* DUAL APP MOCKUP MOCKUP */}
            <div className="relative w-72 h-[550px] bg-gray-900 rounded-[40px] border-[6px] border-gray-800 shadow-2xl z-20 -rotate-6">
                {/* CUSTOMER APP THEME */}
                <div className="absolute inset-0 bg-brand-customer-red m-2 rounded-[32px] overflow-hidden flex flex-col p-6">
                    <div className="h-2 w-12 bg-white/20 mx-auto mb-10 rounded-full"></div>
                    <div className="h-6 w-32 bg-white/40 rounded mb-8"></div>
                    <div className="space-y-4">
                        <div className="h-24 bg-white/10 rounded-2xl"></div>
                        <div className="h-24 bg-white/10 rounded-2xl"></div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 right-0 w-72 h-[550px] bg-gray-900 rounded-[40px] border-[6px] border-gray-800 shadow-2xl z-10 rotate-12 md:translate-x-12">
                {/* PROVIDER APP THEME */}
                <div className="absolute inset-0 bg-brand-provider-green m-2 rounded-[32px] overflow-hidden flex flex-col p-6">
                    <div className="h-2 w-12 bg-white/20 mx-auto mb-10 rounded-full"></div>
                    <div className="h-6 w-32 bg-white/40 rounded mb-8"></div>
                    <div className="h-48 bg-white/10 rounded-2xl mb-4"></div>
                    <div className="h-12 bg-white/90 rounded-xl"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
