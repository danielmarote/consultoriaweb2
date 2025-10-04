
import React from 'react';

interface StatCircleProps {
    value: string;
    label: string;
    description: string;
    percentage: number; // 0 to 100
}

const StatCircle: React.FC<StatCircleProps> = ({ value, label, description, percentage }) => {
    const circumference = 2 * Math.PI * 50; // 2 * pi * r
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="text-center flex flex-col items-center">
            <div className="relative w-48 h-48 mb-6">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <circle
                        className="progress-circle"
                        cx="60" cy="60" r="50" fill="none" stroke="#4f46e5" strokeWidth="10"
                        strokeDasharray="314"
                        strokeDashoffset={314}
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                        style={{ strokeDashoffset: offset, animationDelay: `${Math.random() * 0.5}s` }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-slate-900">{value}</span>
                </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{label}</h3>
            <p className="text-slate-600 max-w-xs">{description}</p>
        </div>
    );
};

const Benefits: React.FC = () => {
    const benefits = [
        { value: '+70%', label: 'Eficiencia operativa', description: 'Incremento en procesos clave mediante automatización inteligente.', percentage: 70 },
        { value: '-65%', label: 'Reducción de costes', description: 'Ahorro en tareas repetitivas y manuales, liberando recursos.', percentage: 65 },
        { value: '+60%', label: 'Velocidad de decisión', description: 'Mejora con datos predictivos y analytics en tiempo real.', percentage: 60 }
    ];

    return (
        <section id="benefits" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Impacto Real y Medible</h2>
                    <p className="text-lg text-slate-600">
                        No solo implementamos tecnología, generamos resultados tangibles que impulsan tu organización al siguiente nivel.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">
                    {benefits.map(benefit => <StatCircle key={benefit.label} {...benefit} />)}
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-slate-100 p-8 rounded-2xl">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Equipos Potenciados</h4>
                        <p className="text-slate-600">Personal empoderado por IA, no reemplazado, con mayor capacidad de impacto estratégico y creativo.</p>
                    </div>
                    <div className="bg-slate-100 p-8 rounded-2xl">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Escalabilidad Real</h4>
                        <p className="text-slate-600">Crecimiento sostenible sin aumentar proporcionalmente la estructura de personal o la complejidad operativa.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;