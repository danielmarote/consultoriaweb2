import React from 'react';
import { MailIcon, LinkedInIcon } from './icons';

interface CTAProps {
    title: string;
    description: string;
    buttonText: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonText }) => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-indigo-700 text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                    {title}
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-200 mb-12">
                    {description}
                </p>
                <a
                    href="mailto:daniel@consultorpro.es"
                    className="bg-white text-indigo-700 font-bold text-lg px-12 py-4 rounded-xl hover:bg-slate-100 transition-transform duration-300 transform hover:scale-105 shadow-2xl"
                >
                    {buttonText}
                </a>

                <div className="mt-16 flex justify-center items-center space-x-12">
                     <div className="text-center">
                        <div className="flex justify-center mb-2"><MailIcon className="w-8 h-8 text-indigo-300" /></div>
                        <h4 className="font-bold">Email</h4>
                        <a href="mailto:daniel@consultorpro.es" className="text-indigo-200 hover:text-white">daniel@consultorpro.es</a>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-2"><LinkedInIcon className="w-8 h-8 text-indigo-300" /></div>
                        <h4 className="font-bold">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/danielmarote/" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white">/danielmarote</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;