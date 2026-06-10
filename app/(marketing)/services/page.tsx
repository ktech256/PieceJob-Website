"use client";

import { useEffect, useState } from 'react';
import { fetchServices } from '@/lib/api';

export default function ServicesCatalogPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
        const list = await fetchServices();
        setServices(list);
        setLoading(false);
    };
    load();
  }, []);

  // For visual consistency, we group them if they have a category field,
  // otherwise we show a list or use our fallback grouping.
  const categories = [
    {
      title: "Active Platform Services",
      color: "border-brand-customer-red",
      services: services.map(s => ({
          code: s.serviceCode,
          name: s.serviceName || s.serviceCode,
          rule: s.genderRule || "Both"
      }))
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
