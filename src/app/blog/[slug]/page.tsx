import Link from "next/link";
import {Wrapper} from "@/components/frame/wrapper";
import {links} from "@/navigation";
import {GetStaticProps} from "next";
import {HeaderProps} from "@/components/frame/header";
import RootLayout from "@/app/layout";


export async function generateStaticParams() {
    return [{slug: 'test'}]
}
export default async function Home({ params }: { params: { slug: string } }) {
    const {slug} = params;
    return (
        <Wrapper>
            Hello
        </Wrapper>
    );
}