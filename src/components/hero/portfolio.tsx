'use client';

import {StaticImageData} from "next/image";
import {Clickable, Url} from "@/types";
import Link from "next/link";
import {Iterate} from "@/components/logic/iterate";
import {portfolioItems} from "@/config/portfolio";
import React, {useState} from "react";
import {collect} from "@/util/collect";
import {classNames} from "@/util/css";

export type PortfolioItemProps = {
    title: string,
    affiliation: string,
    buttonText: string,
    link: Url,
    backgroundImage: StaticImageData,
    backgroundImageAlt?: string,
    categories?: string[]
}

function PortfolioItem(props: PortfolioItemProps) {
    return (
        <div>
            <Link href={props.link}>
                <img className="object-cover w-full rounded-lg h-96 hover:opacity-50"
                     src={props.backgroundImage.src}
                     alt={props?.backgroundImageAlt ?? ''}/>
            </Link>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{props.title}</h2>
            <h2 className="mt-4 text-sm font-semibold text-gray-700 capitalize dark:text-gray-200">{props.affiliation}</h2>
            <Link href={props.link}>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">{props.buttonText}</p>
            </Link>
        </div>
    );
}

type PortfolioCategoryLinkProps = {
    title: string,
    active?: boolean
} & Clickable;

function PortfolioCategoryLink(props: PortfolioCategoryLinkProps) {
    return (
        <a {...props}
           className={classNames("block text-gray-500 dark:text-gray-300 hover:underline",
               props.active ? 'underline' : '')}>{props.title}</a>
    );
}

export function Portfolio() {
    const [displayedCategory, setDisplayedCategory] = useState('All');

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Portfolio</h1>

                <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                    <div className="lg:mx-12">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Project Categories</h1>

                        <div className="mt-4 space-y-4 lg:mt-8">
                            <Iterate iterable={['All', ...collect(portfolioItems, 'categories')].map(v => {
                                return {title: v, active: v == displayedCategory}
                            })} constructor={PortfolioCategoryLink} onClick={setDisplayedCategory}
                                     onClickValue={p => p.title}/>
                        </div>
                    </div>

                    <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                            <Iterate iterable={portfolioItems} constructor={PortfolioItem}
                                     filter={p => displayedCategory == 'All' || p.categories?.includes(displayedCategory)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}