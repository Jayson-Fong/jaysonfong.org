import {Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Header from "@/components/frame/header";
import {links} from "@/navigation";
import {classNames} from "@/util/css";

const roboto = Roboto({weight: '400', subsets: ["latin"]});

export default function RootLayout({
                                       children
                                   }: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
        <body className={classNames(roboto.className, 'bg-white dark:bg-gray-900')}>
        <header>
            <Header links={links}/>
        </header>

        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
