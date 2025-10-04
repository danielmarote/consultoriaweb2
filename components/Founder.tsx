import React from 'react';

interface FounderProps {
    name: string;
    title: string;
    bio: string[];
    image: string;
}

const Founder: React.FC<FounderProps> = ({ name, title, bio, image }) => {
    return (
        <section className="py-20 md:py-28 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2">
                        <img 
                            src={image || 'https://placehold.co/800x1000/e2e8f0/64748b?text=Daniel+Marote'} 
                            alt={`${name}, Fundador de ConsultorIA`} 
                            className="rounded-2xl shadow-2xl object-cover w-full h-full aspect-[4/5]"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: title }}>
                        </h2>
                        <h3 className="text-2xl font-bold text-indigo-600 mb-4">{name}</h3>
                        <div className="prose prose-lg text-slate-600 max-w-none space-y-4">
                            {bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;