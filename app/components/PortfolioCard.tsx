import Link from 'next/link';
import Image from 'next/image';
import { PortfolioItem } from '../data/portfolio';

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
    return (
        <Link
            href={`/projects/${item.slug}`}
            className="group block relative overflow-hidden rounded-xl shadow-md bg-accent transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl focus:relative focus:z-10"
        >
            <div className="relative w-full h-full">
                <Image
                    src={item.coverImage}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-90"
                />
            </div>
        </Link>
    );
}
