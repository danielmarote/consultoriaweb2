import React from 'react';
import { TargetIcon, CodeBracketIcon, PresentationChartBarIcon } from './icons';
import type { IconProps } from './icons';

interface Service {
    icon: React.ComponentType<IconProps>;
    title: string;
    description: string;
    features: string[];
    iconClassName: string;
}

const services: Service[] = [
    {
        icon: TargetIcon,
        title: "Consultoría Estratégica",
        description: "Identificamos oportunidades de alto impacto y diseñamos el roadmap de IA para tu éxito.",
        features: ["Análisis de negocio y ROI", "Diseño de roadmap de implementación", "Modelos y frameworks a medida"],
        iconClassName: "icon-target",
    },
    {
        icon: CodeBracketIcon,
        title: "Implementación Avanzada",
        description: "Desarrollamos y programamos soluciones de IA personalizadas que se integran en tu ecosistema.",
        features: ["Automatización inteligente (RPA)", "Sistemas de predicción y analítica", "Integraciones con APIs y cloud"],
        iconClassName: "icon-codebracket",
    },
    {
        icon: PresentationChartBarIcon,
        title: "Formación y Conferencias",
        description: "Preparamos a tus equipos directivos para liderar la transformación con una visión estratégica.",
        features: ["Seminarios ejecutivos", "Workshops prácticos con casos reales", "Inspiración y cultura de innovación"],
        iconClassName: "icon-presentationchart",
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Nuestros 3 Servicios Principales</h2>
                    <p className="text-lg text-slate-600">
                        Un ecosistema completo de soluciones para guiarte en cada paso de tu viaje hacia la inteligencia artificial.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map(({ icon: Icon, title, description, features, iconClassName }) => (
                        <div key={title} className="group bg-white p-8 rounded-2xl flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                            <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Icon className={`w-8 h-8 ${iconClassName}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
                            <p className="text-slate-600 mb-6 flex-grow">{description}</p>
                            <ul className="space-y-3">
                                {features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <svg className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;