import {PortfolioItemProps} from "@/components/hero/portfolio";
import Image from "../../public/next.svg"
import CyberForceCover from "../../public/portfolio/CyberForce.jpg"
import SharedMowerCover from "../../public/portfolio/SharedMower.jpg"
import SOCToolsCover from "../../public/portfolio/SOCTools.jpg"
import ElasticsearchDetectionCover from "../../public/portfolio/ElasticsearchDetection.jpg"
import CredentialDumpReviewerCover from "../../public/portfolio/CredentialDumpReviewer.jpg"

export const portfolioItems: (PortfolioItemProps & {slug: string})[] = [
    {
        title: "SOCTools",
        slug: "soctools",
        shortDescription: "Tools for a SOC",
        affiliation: "Georgia Institute of Technology",
        buttonText: "View Details",
        link: {pathname: "/projects/soctools"},
        backgroundImage: SOCToolsCover,
        backgroundImageAlt: "Security Operations Center Tools Website",
        categories: [
            'Information Security',
            'Web Development',
            'Software Engineering',
            'Systems Administration'
        ]
    },
    {
        title: "Detection with Elasticsearch",
        slug: "detection-with-elasticsearch",
        shortDescription: "Novel Detection Techniques",
        affiliation: "Georgia Institute of Technology",
        buttonText: "View Details",
        link: {pathname: '/projects/detection-with-elasticsearch'},
        backgroundImage: ElasticsearchDetectionCover,
        backgroundImageAlt: "Elastic Security and Watchers Logo",
        categories: [
            'Information Security',
            'Software Engineering',
            'Log Management'
        ]
    },
    {
        title: "Shared Mower System",
        slug: "community-mower-system",
        shortDescription: "Serverless Mower Management",
        affiliation: "Unyson System",
        buttonText: "Explore",
        link: {pathname: '/projects/community-mower-system'},
        backgroundImage: SharedMowerCover,
        backgroundImageAlt: "Jayson Fong Presenting",
        categories: [
            'Software Engineering',
            'Web Development',
            'Systems Administration',
            'Cloud Computing'
        ]
    },
    {
        title: "Personal Website",
        slug: "personal-website",
        shortDescription: "This Website.",
        affiliation: "Personal Project",
        buttonText: "Explore",
        link: {pathname: '/projects/personal-website'},
        backgroundImage: Image,
        backgroundImageAlt: "The Current Website",
        categories: [
            'Software Engineering',
            'Web Development',
            'Systems Administration',
            'Cloud Computing'
        ]
    },
    {
        title: "Credential Dump Reviewer",
        slug: "credential-dump-reviewer",
        shortDescription: "Automated Credential Testing",
        affiliation: "Georgia Institute of Technology",
        buttonText: "Learn More",
        link: {pathname: '/projects/credential-dump-reviewer'},
        backgroundImage: CredentialDumpReviewerCover,
        backgroundImageAlt: "Graphical Interface with a Table of Usernames and Passwords",
        categories: [
            'Software Engineering',
            'Systems Administration',
            'Information Security'
        ]
    },
    {
        title: "CyberForce Competition",
        slug: "cyberforce-competition",
        shortDescription: "Rapid-Fire Blue Team Exercise",
        affiliation: "Georgia Institute of Technology",
        buttonText: "About",
        link: {pathname: '/projects/cyberforce-competition'},
        backgroundImage: CyberForceCover,
        backgroundImageAlt: "Jayson Competing at the 2023 CyberForce Competition",
        categories: [
            'Software Engineering',
            'Systems Administration',
            'Information Security',
            'Web Development',
            'Log Management'
        ]
    }
]