export default function ServicesCatalogPage() {
  const categories = [
    {
      title: "HDS - Domestic Services",
      color: "border-brand-customer-red",
      services: [
        { code: "HDS-01", name: "House Cleaning", rule: "Both" },
        { code: "HDS-02", name: "Deep Cleaning", rule: "Both" },
        { code: "HDS-04", name: "Laundry & Ironing", rule: "Women Only" },
        { code: "HDS-05", name: "Yard Cleaning", rule: "Men Only" },
        { code: "HDS-06", name: "Garden Maintenance", rule: "Men Only" },
        { code: "HDS-08", name: "Pool Cleaning", rule: "Men Only" },
      ]
    },
    {
      title: "CSS - Care & Support",
      color: "border-brand-customer-red",
      services: [
        { code: "CSS-11", name: "Babysitting", rule: "Women Only" },
        { code: "CSS-12", name: "Nanny – Stay In", rule: "Women Only" },
        { code: "CSS-14", name: "Elderly Care – Home Visits", rule: "Both" },
        { code: "CSS-16", name: "Disability Care Assistant", rule: "Both" },
      ]
    },
    {
      title: "HMS - Handyman & Repairs",
      color: "border-brand-customer-red",
      services: [
        { code: "HMS-17", name: "General Handyman", rule: "Both" },
        { code: "HMS-18", name: "Minor Electrical Repairs", rule: "Both" },
        { code: "HMS-19", name: "Minor Plumbing Repairs", rule: "Both" },
        { code: "HMS-20", name: "Painting (Small Jobs)", rule: "Men Only" },
        { code: "HMS-21", name: "Furniture Assembly", rule: "Men Only" },
      ]
    },
    {
      title: "OPS - Outdoor & Property",
      color: "border-brand-customer-red",
      services: [
        { code: "OPS-26", name: "Grass Cutting", rule: "Men Only" },
        { code: "OPS-27", name: "Tree Trimming", rule: "Men Only" },
        { code: "OPS-30", name: "Pest Control / Fumigation", rule: "Both" },
      ]
    },
    {
      title: "LLS - Convenience & Lifestyle",
      color: "border-brand-customer-red",
      services: [
        { code: "LLS-31", name: "Mobile Car Wash", rule: "Both" },
        { code: "LLS-35", name: "Moving Help", rule: "Men Only" },
        { code: "LLS-37", name: "Pet Sitting", rule: "Both" },
      ]
    },
    {
      title: "TSS - Tech & Home Setup",
      color: "border-brand-customer-red",
      services: [
        { code: "TSS-39", name: "TV Mounting", rule: "Both" },
        { code: "TSS-40", name: "Wi-Fi & Router Setup", rule: "Both" },
        { code: "TSS-41", name: "Computer & Phone Setup", rule: "Both" },
      ]
    }
  ];

  return (
    <div className="bg-[#FBFBFB] min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-dark mb-4">
            SERVICE <span className="text-brand-customer-red">CATALOG</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-medium">
            Explore 41+ professional service categories. Filtered by expertise, gender requirements, and localized availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col">
              <h2 className={`text-xs font-black uppercase tracking-widest mb-6 border-l-4 pl-4 ${cat.color}`}>
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.services.map((service) => (
                  <div key={service.code} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:translate-x-2 transition-all group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-gray-400 font-mono tracking-tighter">{service.code}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        service.rule.includes('Women') ? 'bg-pink-50 text-pink-600' :
                        service.rule.includes('Men') ? 'bg-blue-50 text-blue-600' :
                        'bg-gray-50 text-gray-600'
                      }`}>
                        {service.rule}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-brand-customer-red transition-colors">{service.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-12 rounded-[48px] bg-brand-customer-red text-white text-center">
            <h2 className="text-4xl font-black mb-6">DON'T SEE WHAT YOU NEED?</h2>
            <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">We are constantly expanding our catalog based on regional demand and provider expertise.</p>
            <button className="px-10 py-5 bg-white text-brand-customer-red font-bold rounded-full hover:scale-105 transition-transform">
                Request a Category
            </button>
        </div>
      </div>
    </div>
  );
}
