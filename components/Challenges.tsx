import React from 'react';
import { BriefcaseIcon, ClockIcon, BarChartIcon, UserGroupIcon } from './icons';
import type { IconProps } from './icons';

interface ChallengeCardProps {
    icon: React.ComponentType<IconProps>;
    title: string;
    description: string;
    iconClassName: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ icon: Icon, title, description, iconClassName }) => (
    <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <Icon className={`w-7 h-7 ${iconClassName}`} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const Challenges: React.FC = () => {
    const challenges: ChallengeCardProps[] = [
        {
            icon: BriefcaseIcon,
            title: 'Costes operativos crecientes',
            description: 'Los gastos aumentan mientras la eficiencia se estanca, limitando el potencial de crecimiento y rentabilidad.',
            iconClassName: 'icon-briefcase'
        },
        {
            icon: ClockIcon,
            title: 'Tareas manuales y repetitivas',
            description: 'Equipos cualificados pierden tiempo valioso en procesos manuales que la IA podría automatizar por completo.',
            iconClassName: 'icon-clock'
        },
        {
            icon: BarChartIcon,
            title: 'Decisiones sin datos completos',
            description: 'La toma de decisiones críticas se basa en información parcial, aumentando el riesgo y perdiendo oportunidades.',
            iconClassName: 'icon-barchart'
        },
        {
            icon: UserGroupIcon,
            title: 'Exigencias del cliente moderno',
            description: 'La rapidez, personalización y eficiencia ya no son una ventaja, sino un requisito imprescindible para competir.',
            iconClassName: 'icon-usergroup'
        }
    ];

    return (
        <section id="challenges" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">El Reto Actual de las Empresas</h2>
                    <p className="text-lg text-slate-600">
                        La respuesta a los desafíos de hoy no es trabajar más, sino trabajar de forma más inteligente. La respuesta es la Inteligencia Artificial.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challenges.map(challenge => (
                        <ChallengeCard key={challenge.title} {...challenge} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Challenges;