import {Introduction} from "@/components/hero/introduction";
import {Wrapper} from "@/components/frame/wrapper";
import {Portfolio} from "@/components/hero/portfolio";
import {metadataCreate} from "@/util/metadata-interface";

export const metadata = metadataCreate();

export default async function Home() {
    return (
        <Wrapper>
            <Introduction />
            <Portfolio />
        </Wrapper>
    );
}
