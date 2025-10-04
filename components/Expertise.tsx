
import React from 'react';
import { DatabaseIcon, LanguageIcon, EyeIcon, CogIcon, CloudIcon, ChatBubbleBottomCenterTextIcon } from './icons';
import type { IconProps } from './icons';

interface ExpertiseArea {
    icon: React.ComponentType<IconProps>;
    title: string;
    description: string;
}

const expertiseAreas: ExpertiseArea[] = [
    { icon: DatabaseIcon, title: "Data Science & ML", description: "Algoritmos avanzados para resolver problemas complejos de negocio." },
    { icon: LanguageIcon, title: "NLP Avanzado", description: "Procesamiento de lenguaje natural para chatbots, análisis y automatización." },
    { icon: EyeIcon, title: "Computer Vision", description: "Reconocimiento de imágenes y análisis visual para automatizar procesos." },
    { icon: CogIcon, title: "RPA Inteligente", description: "Automatización robótica de procesos con capacidades cognitivas y adaptativas." },
    { icon: CloudIcon, title: "Arquitecturas Cloud", description: "Infraestructuras escalables en AWS, Azure y GCP con IA generativa." },
    { icon: ChatBubbleBottomCenterTextIcon, title: "UX Conversacional", description: "Interfaces y experiencias de usuario optimizadas para interacciones con IA." }
];

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Equipo de Clase Mundial</h2>
                    <p className="text-lg text-slate-600">
                        Contamos con un equipo multidisciplinar de expertos internacionales especializados en las áreas que definen el futuro de la IA.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {expertiseAreas.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="flex items-start space-x-5 p-6 bg-slate-50 rounded-xl">
                            <div className="flex-shrink-0 text-indigo-600">
                                <Icon className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
                                <p className="text-slate-600">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-16 text-center">
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 text-base font-semibold px-6 py-3 rounded-lg">
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                        Capacidad para diseñar e implementar soluciones de IA avanzadas de forma ágil y escalable.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;