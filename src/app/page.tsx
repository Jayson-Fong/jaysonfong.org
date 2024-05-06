import {Introduction} from "@/components/hero/introduction";
import {Wrapper} from "@/components/frame/wrapper";
import {Portfolio} from "@/components/hero/portfolio";
import {metadataCreate} from "@/util/metadata-interface";
import {portfolioItems} from "@/config/portfolio";
import {experienceItems} from "@/config/experience";

export const metadata = metadataCreate();

export default async function Home() {
    return (
        <Wrapper>
            <Introduction />
            <Portfolio portfolioItems={portfolioItems} title="Projects" categoriesText="Project Categories" />
            <Portfolio title="Experience" categoriesText="Industry" portfolioItems={experienceItems} />
        </Wrapper>
    );
}
