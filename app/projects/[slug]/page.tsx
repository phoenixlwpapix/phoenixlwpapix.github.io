import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '../../data/portfolio';

// Correct syntax for params in Next.js 15/16 App Router: params is a Promise or directly accessible depending on version. 
// In Next 15/16, params is a Promise.
// But as of current stable, Page props: { params: { slug: string } } is standard.
// Recent breaking change: params must be awaited in async component? 
// Let's use standard async component.

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
        <article className="min-h-screen">
            {/* Intro / Header for the project */}
            <section className="relative py-16 px-8 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-light mb-2">
                    <strong>{project.title.substring(0, 2)}</strong>{project.title.substring(2)}
                </h1>
                {project.subtitle && (
                    <p className="bg-accent text-light py-1 px-4 font-mono inline-block mb-8 text-xl">
                        {project.subtitle}
                    </p>
                )}
                <div className="relative shadow-lg max-w-2xl mx-auto">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-8 pb-16 text-center">
                {project.content.length > 0 ? (
                    project.content.map((block, index) => {
                        if (block.type === 'text') {
                            return <p key={index} className="mb-8 text-lg leading-relaxed text-justify max-w-2xl mx-auto">{block.value}</p>;
                        } else if (block.type === 'image') {
                            return (
                                <div key={index} className="my-8 shadow-md">
                                    <Image
                                        src={block.value}
                                        alt=""
                                        width={800}
                                        height={600}
                                        className="w-full h-auto mx-auto"
                                    />
                                </div>
                            );
                        }
                        return null;
                    })
                ) : (
                    <p className="text-gray-500 italic">No detailed content available for this items yet.</p>
                )}

                <div className="mt-12">
                    <Link href="/#work" className="inline-block py-2 px-10 text-light bg-accent font-bold uppercase no-underline transition-transform duration-200 hover:scale-125">
                        返回作品集
                    </Link>
                </div>
            </div>
        </article>
    );
}
