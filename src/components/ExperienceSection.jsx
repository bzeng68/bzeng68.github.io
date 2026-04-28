import TimelineSection from "./TimelineSection"
import ISSIcon from '../assets/iss-icon.png'
import UpToDateIcon from '../assets/uptodate-icon.png'
import NURoverIcon from '../assets/nurover-icon.png'

const experience = [
    {
        title: 'INTEGRITY Security Services',
        role: 'Full-Stack Software Engineer',
        period: 'Jan 2024 – Dec 2025',
        description: [
            'Architected AWS-based full-stack web applications (Node.js, React) that support the certificate provisioning and lifecycle management for 100K+ IEEE 1609.2 certificates',
            'Engineered cross-platform mobile apps (Kotlin, Swift) enabling real-time V2X interoperability between roadside units, vehicles, and mobile devices for construction zone hazard detection and worker safety alerts',
            'Built cryptographic signing libraries (Kotlin, Swift) implementing ECDH key exchange for secure V2X message authentication, enabling tamper-proof communication across connected transportation infrastructure',
            'Optimized system observability by migrating 32M+ logs to DocumentDB, accelerating queries and cutting overhead',
            'Containerized EV2G app and ensured reliable CI/CD by creating Jenkins pipelines for build, deployment, and testing',
            'Developed Flask microservice for traffic intersection validation, enabling Python-based validation from the web app',
            'Consolidated three repos into a monorepo to facilitate end-to-end testing and increase reusability and extensibility',
        ],
        link: 'https://www.ghsiss.com/',
        image: ISSIcon
    },
    {
        title: 'Wolters Kluwer - UpToDate',
        role: 'Product Full-Stack Software Engineer',
        period: 'Jan 2023 – Dec 2024',
        description: [
            'Led modernization initiatives (Java, Spring Boot, Vue.js) eliminating technical debt and resolving critical security vulnerabilities for a medical resources platform serving 2M+ health professionals ',
            'Improved internal dev tooling for 150+ developers, reducing misconfiguration and onboarding friction',
            'Redesigned error-handling front-end architecture across application, improving user experience and maintainability',
        ],
        link: 'https://www.wolterskluwer.com/en/solutions/uptodate',
        image: UpToDateIcon
    },
    {
        title: 'NURover',
        role: 'Software Developer | Webmaster',
        period: 'Sep 2021 – May 2025',
        description: [
            'Developed haptic control interface in C++ as proof-of-concept for teleoperated 4-DOF robotic arm manipulation',
            'Implemented Python ROS state machine for autonomous navigation with Zed2 camera and IMU/GPS sensor fusion',
        ],
        link: 'https://www.linkedin.com/company/northeasternrover',
        image: NURoverIcon
    }
]

export default function ExperienceSection() {
    return (
        <TimelineSection
            title='Experience'
            emoji='🚀'
            items={experience}
        />
    )
}