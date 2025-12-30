import Link from "next/link";
import { LayoutDashboard, FileText, CreditCard, LifeBuoy, ArrowLeft } from "lucide-react";
import Button from "@/components/Button";

export default function PortalComingSoon() {
    return (
        <main className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

            <div className="max-w-4xl w-full bg-black/40 border border-brand-blue/10 rounded-2xl p-12 backdrop-blur-xl relative z-10 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-brand-blue/5 rounded-full mb-8">
                    <LayoutDashboard className="w-12 h-12 text-brand-blue animate-pulse" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Client Portal Under Development
                </h1>
                <p className="text-brand-silver text-lg mb-12 max-w-2xl mx-auto">
                    We are building a comprehensive dashboard for our partners to manage their digital ecosystem.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: <LayoutDashboard className="w-6 h-6" />, title: "Track Projects", desc: "Real-time milestones" },
                        { icon: <FileText className="w-6 h-6" />, title: "Access Reports", desc: "Performance metrics" },
                        { icon: <CreditCard className="w-6 h-6" />, title: "Manage Payments", desc: "Invoices & billing" },
                        { icon: <LifeBuoy className="w-6 h-6" />, title: "Get Support", desc: "24/7 dedicated line" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-brand-navy/50 border border-brand-blue/10 rounded-xl hover:border-brand-blue/30 transition-colors">
                            <div className="text-brand-blue mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-white font-bold mb-1">{item.title}</h3>
                            <p className="text-brand-silver/60 text-xs uppercase tracking-wider">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <Link href="/">
                    <Button variant="outline" className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Return to Homepage
                    </Button>
                </Link>
            </div>
        </main>
    );
}
