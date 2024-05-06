import {PortfolioItemProps} from "@/components/hero/portfolio";

export const experienceItems: PortfolioItemProps[] = [
    {
        title: "Security Operations Analyst",
        affiliation: "Georgia Institute of Technology",
        buttonText: "About",
        link: {pathname: '/experience/gatech/security-operations-analyst'},
        categories: [
            'Information Security',
            'Web Development',
            'Software Engineering',
            'Systems Administration',
            'Log Management'
        ]
    },
    {
        title: "Research Intern",
        affiliation: "Georgia Tech Research Institute",
        buttonText: "About",
        link: {pathname: '/experience/gtri/security-operations-analyst'},
        categories: [
            'Information Security',
            'Software Engineering'
        ]
    },
    {
        title: "Systems Administrator",
        affiliation: "BuiltByBit",
        buttonText: "About",
        link: {pathname: '/experience/bbyb/systems-administrator'},
        categories: [
            'Software Engineering',
            'Systems Administration',
            'Log Management'
        ]
    },
    {
        title: "Developer",
        affiliation: "BuiltByBit",
        buttonText: "About",
        link: {pathname: '/experience/bbyb/developer'},
        categories: [
            'Software Engineering',
            'Web Development'
        ]
    },
    {
        title: "Chief Operating Officer",
        affiliation: "Interbix Holdings",
        buttonText: "About",
        link: {pathname: '/experience/interbix/chief-operating-officer'},
        categories: [
            'Information Security',
            'Systems Administration',
            'Software Engineering',
            'Web Development'
        ]
    }
]
