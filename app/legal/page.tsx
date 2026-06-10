export default function LegalPage() {
  const sections = [
    { title: "Privacy Policy", link: "#privacy" },
    { title: "Terms of Service", link: "#terms" },
    { title: "Provider Agreement", link: "#provider" },
    { title: "Safety Standards", link: "#safety" },
    { title: "Refund & Cancellation Policy", link: "#refunds" },
    { title: "Cookie Policy", link: "#cookies" }
  ];

  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter uppercase">LEGAL <span className="text-gray-400">HUB</span>.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            {sections.map((s) => (
                <div key={s.title} className="p-8 rounded-2xl border border-gray-100 hover:border-brand-customer-red transition-colors cursor-pointer group">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-brand-customer-red transition-colors">{s.title}</h3>
                    <p className="text-sm text-gray-500">Updated: October 2024</p>
                </div>
            ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
            <h2 id="privacy" className="text-3xl font-black text-neutral-dark mb-6 uppercase tracking-tight">PRIVACY POLICY</h2>
            <p className="mb-4">PieceJob ("we", "our", or "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information across our global platform.</p>

            <h3 className="text-xl font-bold text-neutral-dark mt-8 mb-4">1. Data Collection</h3>
            <p className="mb-4">We collect information to provide better services to all our users. This includes your location for matching, identification for verification, and transaction history for financial transparency.</p>

            <h3 className="text-xl font-bold text-neutral-dark mt-8 mb-4">2. Device Hardening & Binding</h3>
            <p className="mb-4">As specified in our security protocols (SECTION 15), we bind accounts to physical device hardware IDs to prevent unauthorized access and referral fraud.</p>

            <div className="h-px bg-gray-100 my-16"></div>

            <h2 id="terms" className="text-3xl font-black text-neutral-dark mb-6 uppercase tracking-tight">TERMS OF SERVICE</h2>
            <p className="mb-4">By using PieceJob, you agree to comply with our operational guidelines, including the 20m proximity rule and strict cancellation grace windows.</p>
        </div>
      </div>
    </div>
  );
}
