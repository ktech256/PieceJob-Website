import { Globe, MapPin, CheckCircle2 } from "lucide-react";

export default function CountriesPage() {
  const regions = [
    {
      country: "South Africa",
      code: "ZA",
      status: "Operational",
      cities: ["Johannesburg", "Pretoria", "Cape Town", "Durban"],
      flag: "🇿🇦"
    },
    {
      country: "Namibia",
      code: "NA",
      status: "Soft Launch",
      cities: ["Windhoek", "Walvis Bay"],
      flag: "🇳🇦"
    },
    {
      country: "Botswana",
      code: "BW",
      status: "Closed Beta",
      cities: ["Gaborone", "Francistown"],
      flag: "🇧🇼"
    },
    {
      country: "Zimbabwe",
      code: "ZW",
      status: "Expansion Phase",
      cities: ["Harare", "Bulawayo"],
      flag: "🇿🇼"
    }
  ];

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#0A0A0A] py-32 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="px-4 py-2 border border-white/20 rounded-full flex items-center gap-3 bg-white/5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest">Live Multi-Tenant Map</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-[0.8]">
            GLOBAL <span className="text-brand-customer-red italic">REACH</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            PieceJob's unique isolated workspace architecture allows for rapid scaling while respecting local regional compliance and pricing.
          </p>
        </div>
      </section>

      {/* REGIONAL GRID */}
      <section className="py-24 px-6 flex justify-center">
        <div className="max-w-6xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regions.map((reg) => (
                    <div key={reg.code} className="bg-white rounded-[40px] border border-gray-100 p-10 flex flex-col justify-between h-[400px] shadow-sm hover:shadow-2xl transition-shadow group">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-5xl">{reg.flag}</span>
                                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    reg.status === 'Operational' ? 'bg-green-100 text-green-700' : 'bg-brand-customer-red/10 text-brand-customer-red'
                                }`}>
                                    {reg.status}
                                </span>
                            </div>
                            <h2 className="text-4xl font-black tracking-tight mb-2 uppercase">{reg.country}</h2>
                            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-8">Workspace Code: {reg.code}</p>

                            <div className="flex flex-wrap gap-2">
                                {reg.cities.map(city => (
                                    <span key={city} className="px-4 py-2 bg-gray-50 rounded-xl text-sm font-medium text-gray-600 group-hover:bg-brand-customer-red group-hover:text-white transition-colors">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-brand-customer-red">
                            <CheckCircle2 size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Localized Pricing & Safety Active</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 p-16 rounded-[64px] bg-brand-customer-red text-white flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6">WE ARE <br />EXPANDING.</h2>
                    <p className="text-xl text-white/70">Want PieceJob in your country? Our enterprise team is actively looking for regional partners.</p>
                </div>
                <button className="px-12 py-6 bg-white text-brand-customer-red font-black rounded-full text-xl hover:scale-105 transition-transform shrink-0 shadow-2xl">
                    Partner With Us
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
