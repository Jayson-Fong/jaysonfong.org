import {PortfolioItemProps} from "@/components/hero/portfolio";

export const experienceItems: (PortfolioItemProps & {businessSlug: string, positionSlug: string})[] = [
    {
        title: "Security Operations Analyst",
        businessSlug: "gatech",
        positionSlug: "security-operations-analyst",
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
        businessSlug: "gtri",
        positionSlug: "research-intern",
        affiliation: "Georgia Tech Research Institute",
        buttonText: "About",
        link: {pathname: '/experience/gtri/research-intern'},
        categories: [
            'Information Security',
            'Software Engineering'
        ]
    },
    {
        title: "Systems Administrator",
        businessSlug: "bbyb",
        positionSlug: "systems-administrator",
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
        businessSlug: "bbyb",
        positionSlug: "developer",
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
        businessSlug: "interbix",
        positionSlug: "chief-operating-officer",
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
