import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white text-neutral-dark min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* CONTACT INFO */}
        <section className="py-24 px-6 md:px-24 bg-[#0A0A0A] text-white flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
            Let's <br /><span className="text-brand-customer-red italic">Talk</span>.
          </h1>
          <p className="text-xl text-gray-400 mb-16 max-w-sm">
            Have a question about the platform? Our regional teams are here to help.
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-brand-customer-red">
                    <Mail size={20} />
                </div>
                <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email Us</p>
                    <p className="text-xl font-bold">hello@piecejob.com</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-brand-customer-red">
                    <Phone size={20} />
                </div>
                <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Call Center</p>
                    <p className="text-xl font-bold">+27 (0) 11 450 1234</p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-brand-customer-red">
                    <MapPin size={20} />
                </div>
                <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Regional Hub</p>
                    <p className="text-xl font-bold">Johannesburg, South Africa</p>
                </div>
            </div>
          </div>
        </section>

        {/* LEAD GEN FORM */}
        <section className="py-24 px-6 md:px-24 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <h2 className="text-3xl font-black mb-8 tracking-tight uppercase">Send a Message</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-customer-red outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-customer-red outline-none transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                        <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-customer-red outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                        <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 outline-none">
                            <option>General Inquiry</option>
                            <option>Provider Support</option>
                            <option>Enterprise Solutions</option>
                            <option>Country Expansion</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                        <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-customer-red outline-none transition-all"></textarea>
                    </div>
                    <button className="w-full py-5 bg-brand-customer-red text-white font-black rounded-full text-lg hover:scale-105 transition-transform shadow-xl">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
      </div>
    </div>
  );
}
