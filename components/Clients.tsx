import React from 'react';

interface Logo {
    name: string;
    src: string;
}

interface ClientsProps {
    title: string;
    description: string;
    logos: Logo[];
}

const Clients: React.FC<ClientsProps> = ({ title, description, logos }) => {
    // Ensure we have enough logos for a smooth infinite scroll
    const displayLogos = logos.length > 0 ? Array(Math.ceil(20 / logos.length)).fill(logos).flat() : [];

    return (
        <section id="clients" className="py-16 md:py-24 bg-slate-100">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                    {description}
                </p>
                {displayLogos.length > 0 && (
                    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
                        <div className="flex w-max animate-marquee">
                            {displayLogos.map((logo, index) => (
                                <div key={index} className="flex-shrink-0 w-64 h-24 flex items-center justify-center mx-8">
                                    <img src={logo.src} alt={logo.name} className="max-h-12 w-auto object-contain client-logo-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Clients;