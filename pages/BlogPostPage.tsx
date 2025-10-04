import React, { useEffect, useState } from 'react';

// Make TypeScript aware of the 'marked' library loaded from the CDN
declare var marked: any;

interface Post {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    body: string;
    image: string;
}

interface BlogPostPageProps {
    slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(`/content/blog.json`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Could not fetch blog posts');
                }
                return res.json();
            })
            .then(data => {
                const postData = (data.posts || []).find((p: Post) => p.slug === slug);
                if (postData) {
                    setPost(postData);
                } else {
                    throw new Error('Post not found');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading blog post:", err);
                setError(true);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Cargando artículo...</div>;
    }

    if (error || !post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Artículo no encontrado</h1>
                <p className="text-lg text-slate-600 mb-8">Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
                <a href="#/blog" className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                    Volver al Blog
                </a>
            </div>
        );
    }

    // Safely parse markdown content to HTML
    const getMarkdownText = () => {
        if (post && post.body && typeof marked !== 'undefined') {
            const rawMarkup = marked.parse(post.body);
            return { __html: rawMarkup };
        }
        return { __html: '' };
    };

    return (
        <article className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-8 md:mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">{post.title}</h1>
                    <p className="text-slate-500 text-lg">
                        Por {post.author} &middot; {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </header>
                
                <img src={post.image} alt={post.title} className="w-full h-auto rounded-2xl shadow-lg mb-8 md:mb-12" />

                <div 
                    className="prose prose-lg lg:prose-xl max-w-none mx-auto text-slate-700"
                    dangerouslySetInnerHTML={getMarkdownText()} 
                />

                <div className="mt-12 md:mt-16 border-t border-slate-200 pt-8 text-center">
                    <a href="#/blog" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                        &larr; Volver a todos los artículos
                    </a>
                </div>
            </div>
        </article>
    );
};

export default BlogPostPage;