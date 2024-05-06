import {PortfolioItemProps} from "@/components/hero/portfolio";
import Image from "../../public/next.svg"
import CyberForceCover from "../../public/portfolio/CyberForce.jpg"
import SharedMowerCover from "../../public/portfolio/SharedMower.jpg"
import SOCToolsCover from "../../public/portfolio/SOCTools.jpg"
import ElasticsearchDetectionCover from "../../public/portfolio/ElasticsearchDetection.jpg"
import CredentialDumpReviewerCover from "../../public/portfolio/CredentialDumpReviewer.jpg"

export const portfolioItems: PortfolioItemProps[] = [
    {
        title: "SOCTools",
        affiliation: "Georgia Institute of Technology",
        buttonText: "View Details",
        link: {pathname: "/projects/soctools"},
        backgroundImage: SOCToolsCover,
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
        backgroundImage: ElasticsearchDetectionCover,
        categories: [
            'Information Security',
            'Software Engineering',
            'Log Management'
        ]
    },
    {
        title: "Shared Mower System",
        affiliation: "Unyson System",
        buttonText: "Explore",
        link: {pathname: '/projects/community-mower-system'},
        backgroundImage: SharedMowerCover,
        categories: [
            'Software Engineering',
            'Web Development',
            'Systems Administration',
            'Cloud Computing'
        ]
    },
    {
        title: "Personal Website",
        affiliation: "Personal Project",
        buttonText: "Explore",
        link: {pathname: '/projects/personal-website'},
        backgroundImage: Image,
        categories: [
            'Software Engineering',
            'Web Development',
            'Systems Administration',
            'Cloud Computing'
        ]
    },
    {
        title: "Credential Dump Reviewer",
        affiliation: "Georgia Institute of Technology",
        buttonText: "Learn More",
        link: {pathname: '/projects/credential-dump-reviewer'},
        backgroundImage: CredentialDumpReviewerCover,
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
        backgroundImage: CyberForceCover,
        categories: [
            'Software Engineering',
            'Systems Administration',
            'Information Security',
            'Web Development',
            'Log Management'
        ]
    }
]