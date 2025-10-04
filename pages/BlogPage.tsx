import React, { useState, useEffect } from 'react';

interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    image: string;
}

const PostCard: React.FC<Post> = ({ slug, title, description, date, image }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <a href={`#/blog/${slug}`} className="block h-full flex flex-col">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-slate-500 mb-2">{new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{description}</p>
            </div>
        </a>
    </div>
);

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center items-center space-x-4 mt-12 md:mt-16">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Anterior
            </button>
            <div className="flex items-center space-x-2">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={`w-10 h-10 rounded-lg ${currentPage === number ? 'bg-indigo-600 text-white font-bold' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'}`}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Siguiente
            </button>
        </nav>
    );
};


const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch('/content/blog.json')
            .then(res => {
                if (!res.ok) throw new Error('Could not fetch blog posts');
                return res.json();
            })
            .then(data => {
                setPosts(data.posts || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading blog posts:", err);
                setError(true);
                setLoading(false);
            });
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Cargando artículos...</div>;
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Error al cargar el blog</h1>
                <p className="text-lg text-slate-600">Lo sentimos, no pudimos cargar los artículos en este momento.</p>
            </div>
        );
    }

    return (
        <section className="py-12 md:py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">Nuestro Blog</h1>
                    <p className="text-lg text-slate-600">
                        Explora nuestros últimos artículos, análisis y reflexiones sobre el mundo de la Inteligencia Artificial.
                    </p>
                </div>
                {currentPosts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {currentPosts.map(post => (
                                <PostCard key={post.slug} {...post} />
                            ))}
                        </div>
                        {totalPages > 1 && (
                             <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        )}
                    </>
                ) : (
                    <div className="text-center text-slate-600">
                        <p>No hay artículos disponibles en este momento.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogPage;