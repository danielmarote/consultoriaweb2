import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Challenges from '../components/Challenges';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Differentiators from '../components/Differentiators';
import Expertise from '../components/Expertise';
import Founder from '../components/Founder';
import CTA from '../components/CTA';
import BlogSection from '../components/BlogSection';

const HomePage: React.FC = () => {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetch('/content/home.json')
            .then(res => res.json())
            .then(data => setContent(data))
            .catch(err => console.error("Error loading homepage content:", err));
    }, []);

    if (!content) {
        return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
    }

    return (
        <>
            <Hero 
                title={content.hero_title}
                subtitle={content.hero_subtitle}
                buttonText={content.hero_button_text}
                subtext={content.hero_subtext}
            />
            <Clients 
                title={content.clients_title}
                description={content.clients_description}
                logos={content.client_logos}
            />
            <Challenges />
            <Services />
            <Benefits />
            <Differentiators />
            <Expertise />
            <Founder 
                name={content.founder_name}
                title={content.founder_title}
                bio={content.founder_bio}
                image={content.founder_image}
            />
            <BlogSection />
            <CTA 
                title={content.cta_title}
                description={content.cta_description}
                buttonText={content.cta_button_text}
            />
        </>
    );
};

export default HomePage;