import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">
                    <a href="#/">ConsultorIA</a>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#/" className="text-slate-600 hover:text-indigo-600">Inicio</a>
                    <a href="/#services" className="text-slate-600 hover:text-indigo-600">Servicios</a>
                    <a href="/#benefits" className="text-slate-600 hover:text-indigo-600">Beneficios</a>
                    <a href="#/blog" className="text-slate-600 hover:text-indigo-600">Blog</a>
                    <a href="/#contact" className="text-slate-600 hover:text-indigo-600">Contacto</a>
                </nav>
                <a href="/#contact" className="hidden md:inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Hablemos
                </a>
            </div>
        </header>
    );
};

export default Header;