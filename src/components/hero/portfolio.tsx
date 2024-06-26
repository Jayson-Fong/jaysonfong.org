'use client';

import Image, {StaticImageData} from "next/image";
import {Clickable, Url} from "@/types";
import Link from "next/link";
import {Iterate} from "@/components/logic/iterate";
import React, {useState} from "react";
import {collect} from "@/util/collect";
import {classNames} from "@/util/css";
import {If} from "@/components/logic/condition";

export type PortfolioItemProps = {
    title: string,
    shortDescription?: string,
    affiliation: string,
    buttonText: string,
    link: Url,
    backgroundImage?: StaticImageData,
    backgroundImageAlt?: string,
    categories?: string[]
}

function PortfolioItem(props: PortfolioItemProps) {
    return (
        <div>
            <If currentState={!!props.backgroundImage}>
                <Link href={props.link}>
                    <div className="group relative">
                        <Image className="object-cover w-full rounded-lg h-96 opacity-50 hover:opacity-100"
                               src={props.backgroundImage as StaticImageData}
                               alt={props?.backgroundImageAlt ?? ''}/>
                        <If currentState={!!props.shortDescription}>
                            <div className="hidden group-hover:block absolute bottom-5 left-5">
                                <p className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-600 p-0.5 rounded group-hover:hover:bg-transparent">{props.shortDescription}</p>
                            </div>
                        </If>
                    </div>
                </Link>
            </If>
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
    active?: boolean,
    count?: number
} & Clickable;

function PortfolioCategoryLink(props: PortfolioCategoryLinkProps) {
    return (
        <div onClick={props?.onClick}
           className={classNames("block text-gray-500 dark:text-gray-300 hover:underline",
               props.active ? 'underline' : '')}>{props.title}{props.count !== undefined ?
            ` (${props.count})` : null}</div>
    );
}

type PortfolioProps = {
    title: string,
    categoriesText: string,
    portfolioItems: PortfolioItemProps[]
}

export function Portfolio(props: PortfolioProps) {
    const [displayedCategory, setDisplayedCategory] = useState('All');

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">{props.title}</h1>

                <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                    <div className="lg:mx-12">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{props.categoriesText}</h1>

                        <div className="mt-4 space-y-4 lg:mt-8">
                            <Iterate iterable={['All', ...collect(props.portfolioItems, 'categories')].map(v => {
                                return {
                                    title: v,
                                    active: v == displayedCategory,
                                    count: v == 'All' ? props.portfolioItems.length : props.portfolioItems
                                        .filter(p => p?.categories && p.categories.includes(v)).length
                                }
                            })} constructor={PortfolioCategoryLink} onClick={setDisplayedCategory}
                                     onClickValue={p => p.title}/>
                        </div>
                    </div>

                    <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                            <Iterate iterable={props.portfolioItems} constructor={PortfolioItem}
                                     filter={p => displayedCategory == 'All' || p.categories?.includes(displayedCategory)}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}