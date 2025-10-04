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
        <a href={`#/blog/${slug}`} className="block">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <p className="text-sm text-slate-500 mb-2">{new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
        </a>
    </div>
);


const BlogSection: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('/content/blog.json')
            .then(res => res.json())
            .then(data => {
                // Get the 3 most recent posts from the new structure
                setPosts((data.posts || []).slice(0, 3));
            })
            .catch(err => console.error("Error loading blog index for section:", err));
    }, []);

    return (
        <section id="blog" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Desde Nuestro Blog</h2>
                    <p className="text-lg text-slate-600">
                        Explora nuestros últimos artículos, análisis y reflexiones sobre el mundo de la Inteligencia Artificial.
                    </p>
                </div>
                {posts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => (
                            <PostCard key={post.slug} {...post} />
                        ))}
                    </div>
                )}
                <div className="mt-16 text-center">
                    <a href="#/blog" className="bg-indigo-600 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                        Ver todos los artículos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;