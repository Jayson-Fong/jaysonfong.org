import {ComingSoon} from "@/components/hero/coming-soon";
import {portfolioItems} from "@/config/portfolio";

export async function generateStaticParams() {
    return portfolioItems;
}

export default function ExperienceEntry({ params }: { params: { slug: string } }) {
    const projectEntries = portfolioItems.filter(e =>
        e.slug == params.slug);

    if (projectEntries.length === 0) {
        return null;
    }

    const projectEntry = projectEntries[0];

    return (
        <ComingSoon message={`${projectEntry.title}, ${projectEntry.affiliation}`} />
    );
}