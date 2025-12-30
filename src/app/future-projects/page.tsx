import PageHeader from "@/components/PageHeader";

export const metadata = {
    title: "Future Projects | PATHAN X INDUSTRY",
    description: "Glimpses into our experimental projects and the next horizon of innovation.",
};

export default function FuturePage() {
    return (
        <main className="min-h-screen bg-brand-navy">
            <PageHeader
                title="Future Projects"
                subtitle="Confidential. Experimental. The next horizon of innovation."
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {/* Project 1 */}
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video bg-black border border-brand-blue/30 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-blue/10 animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-mono text-brand-blue/50 text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">TOP SECRET</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="text-brand-blue tracking-widest uppercase text-sm mb-2 block">Project 01</span>
                                <h2 className="text-3xl font-bold text-white mb-4">Neural Interface Alpha</h2>
                                <p className="text-brand-silver mb-6 leading-relaxed">
                                    A non-invasive brain-computer interface designed to allow direct control of smart home environments via thought patterns. Currently in closed beta testing.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded uppercase tracking-wider">AI</span>
                                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded uppercase tracking-wider">Neurotech</span>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="aspect-video bg-black border border-brand-silver/30 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-silver/5 animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-mono text-brand-silver/50 text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">RESTRICTED</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="text-brand-blue tracking-widest uppercase text-sm mb-2 block">Project 02</span>
                                <h2 className="text-3xl font-bold text-white mb-4">Urban Sentinel Drone</h2>
                                <p className="text-brand-silver mb-6 leading-relaxed">
                                    Autonomous security drone system for smart cities, featuring real-time threat detection and emergency response coordination.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded uppercase tracking-wider">Robotics</span>
                                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded uppercase tracking-wider">Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
