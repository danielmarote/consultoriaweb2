import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
    buttonText: string;
    subtext: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText, subtext }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_0%,white_75%,transparent_100%)]"></div>
            <div className="relative container mx-auto px-6 text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: title }}>
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
                    {subtitle}
                </p>
                <a
                    href="#contact"
                    className="bg-indigo-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
                >
                    {buttonText}
                </a>
                 <p className="mt-6 text-sm text-slate-500">{subtext}</p>
            </div>
        </section>
    );
};

export default Hero;