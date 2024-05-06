import {Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Header from "@/components/frame/header";
import {links} from "@/navigation";

const roboto = Roboto({weight: '400', subsets: ["latin"]});

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
        <body className={roboto.className}>
        <header>
            <Header links={links}/>
        </header>

        <main className="bg-white dark:bg-gray-900">
            {children}
        </main>
        </body>
        </html>
    );
}
