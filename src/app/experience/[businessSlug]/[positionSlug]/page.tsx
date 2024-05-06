import {ComingSoon} from "@/components/hero/coming-soon";
import {experienceItems} from "@/config/experience";

export async function generateStaticParams() {
    return experienceItems;
}

export default function ExperienceEntry({ params }: { params: { businessSlug: string, positionSlug: string } }) {
    const positionEntries = experienceItems.filter(e =>
        e.businessSlug == params.businessSlug && e.positionSlug == params.positionSlug);

    if (positionEntries.length === 0) {
        return null;
    }

    const positionEntry = positionEntries[0];

    return (
        <ComingSoon message={`${positionEntry.title}, ${positionEntry.affiliation}`} />
    );
}