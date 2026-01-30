import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, ChefHat, Heart } from 'lucide-react';
import { portfolioItems } from '../../data/portfolio';

export function generateStaticParams() {
    return portfolioItems.map((item) => ({
        slug: item.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const resolvedParams = await params;
    const project = portfolioItems.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto">
                    <Link 
                        href="/#work" 
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-background/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-foreground/10"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        返回作品集
                    </Link>
                </div>
            </nav>

            {/* Hero Section - Full Width */}
            <section className="relative h-screen flex items-end">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Solid Color Overlay - No Gradient */}
                    <div className="absolute inset-0 bg-dark/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full px-6 pb-16 md:pb-24">
                    <div className="max-w-7xl mx-auto">
                        {/* Category Tag */}
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-dark bg-white rounded-full">
                                精选作品
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
                            {project.title}
                        </h1>

                        {/* Subtitle */}
                        {project.subtitle && (
                            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                                {project.subtitle}
                            </p>
                        )}

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 mt-8 text-white/80">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span className="text-sm">手工制作</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChefHat className="w-5 h-5" />
                                <span className="text-sm">精选食材</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm">用心烘焙</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - Asymmetric Layout */}
            <section className="px-6 py-20 md:py-32">
                <div className="max-w-7xl mx-auto">
                    {project.content.length > 0 ? (
                        <div className="space-y-24 md:space-y-32">
                            {project.content.map((block, index) => {
                                const isEven = index % 2 === 0;
                                
                                if (block.type === 'text') {
                                    return (
                                        <div 
                                            key={index} 
                                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
                                        >
                                            <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-2' : 'lg:col-start-7'}`}>
                                                <div className="relative">
                                                    {/* Decorative Line */}
                                                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent rounded-full" />
                                                    
                                                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/90 font-light pl-6">
                                                        {block.value}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Empty space for asymmetry */}
                                            <div className={`hidden lg:block lg:col-span-5 ${isEven ? 'lg:col-start-8' : 'lg:col-start-2'}`} />
                                        </div>
                                    );
                                } else if (block.type === 'image') {
                                    return (
                                        <div 
                                            key={index} 
                                            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:direction-rtl'}`}
                                        >
                                            <div className={`lg:col-span-8 ${isEven ? 'lg:col-start-3' : 'lg:col-start-3'}`}>
                                                <div className="relative group">
                                                    {/* Image Container with Solid Border */}
                                                    <div className="relative overflow-hidden rounded-2xl bg-foreground/5">
                                                        <Image
                                                            src={block.value}
                                                            alt={`${project.title} - 细节展示`}
                                                            width={1200}
                                                            height={800}
                                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    
                                                    {/* Caption */}
                                                    <div className="mt-4 flex items-center gap-3">
                                                        <div className="w-8 h-[2px] bg-accent" />
                                                        <span className="text-sm text-foreground/60 font-medium tracking-wide uppercase">
                                                            细节展示 {Math.floor(index / 2) + 1}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-foreground/50 text-lg">暂无详细内容</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="px-6 py-20 md:py-32 bg-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        探索更多作品
                    </h2>
                    <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                        每一件烘焙作品都承载着对美味的追求与热爱
                    </p>
                    
                    <Link 
                        href="/#work" 
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        返回作品集
                    </Link>
                </div>
            </section>
        </article>
    );
}
