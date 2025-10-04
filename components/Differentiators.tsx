
import React from 'react';

interface DifferentiatorProps {
    title: string;
    description: string;
}

const DifferentiatorItem: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 text-4xl font-extrabold text-indigo-200">
            0{number}
        </div>
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </div>
    </div>
);

const Differentiators: React.FC = () => {
    const differentiators = [
        { title: "Experiencia Global Real", description: "Lideramos proyectos en más de 25 países con resultados medibles y sostenibles, aportando una perspectiva internacional única." },
        { title: "Visión Estratégica + Tecnología", description: "Combinamos una profunda estrategia de negocio con las tecnologías de IA más avanzadas del mercado para un impacto real." },
        { title: "Equipo Multidisciplinar Internacional", description: "Contamos con talento de alto nivel especializado en todas las disciplinas clave de la inteligencia artificial moderna." },
        { title: "Enfoque Humano y Ético", description: "Desarrollamos una IA responsable que potencia el factor humano en las organizaciones, no lo reemplaza." }
    ];

    return (
        <section className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Lo que nos diferencia</h2>
                    <p className="text-lg text-slate-600">
                       Más allá de la tecnología, nuestro valor reside en la estrategia, la experiencia y un enfoque centrado en las personas.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {differentiators.map((d, index) => (
                        <DifferentiatorItem key={d.title} number={index + 1} {...d} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;