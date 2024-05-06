import {PortfolioItemProps} from "@/components/hero/portfolio";
import Image from "../../public/next.svg"

export const portfolioItems: PortfolioItemProps[] = [
    {
        title: "SOCTools",
        affiliation: "Georgia Institute of Technology",
        buttonText: "View Details",
        link: {pathname: "/projects/soctools"},
        backgroundImage: Image,
        categories: [
            'Information Security',
            'Web Development',
            'Software Engineering',
            'Systems Administration'
        ]
    },
    {
        title: "Detection with Elasticsearch",
        affiliation: "Georgia Institute of Technology",
        buttonText: "View Details",
        link: {pathname: '/projects/detection-with-elasticsearch'},
        backgroundImage: Image,
        categories: [
            'Information Security',
            'Software Engineering',
            'Log Management'
        ]
    },
    {
        title: "Community Mower System",
        affiliation: "Unyson System",
        buttonText: "Explore",
        link: {pathname: '/projects/community-mower-system'},
        backgroundImage: Image,
        categories: [
            'Software Engineering',
            'Web Development',
            'Systems Administration',
            'Cloud Computing'
        ]
    },
    {
        title: "jaysonfong.org",
        affiliation: "Personal Project",
        buttonText: "Explore",
        link: {pathname: '/projects/jaysonfong-org'},
        backgroundImage: Image,
        categories: [
            'Software Engineering',
            'Web Development',
            'Systems Administration',
            'Cloud Computing'
        ]
    },
    {
        title: "Credential Dump Reviwer",
        affiliation: "Georgia Institute of Technology",
        buttonText: "Learn More",
        link: {pathname: '/projects/credential-dump-reviewer'},
        backgroundImage: Image,
        categories: [
            'Software Engineering',
            'Systems Administration',
            'Information Security'
        ]
    },
    {
        title: "CyberForce Competition",
        affiliation: "Georgia Institute of Technology",
        buttonText: "About",
        link: {pathname: '/projects/cyberforce-competition'},
        backgroundImage: Image,
        categories: [
            'Software Engineering',
            'Systems Administration',
            'Information Security',
            'Web Development',
            'Log Management'
        ]
    }
]