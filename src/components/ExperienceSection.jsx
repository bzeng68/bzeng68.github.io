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
            'Engineered cross-platform mobile apps (Kotlin, Swift) enabling real-time V2X interoperability for 50+ devices at 500+ messages/second for construction zone hazard detection and worker safety alerts',
            'Built ECDH cryptographic signing libraries (Kotlin, Swift) for tamper-proof V2X message authentication',
            'Optimized system observability by migrating 32M+ logs to DocumentDB, reducing infra costs by ~50%',
            'Containerized EV2G app and automated CI/CD via Jenkins pipelines, eliminating manual build, test, and release steps',
            'Developed Flask microservice for traffic intersection validation, eliminating reliance on an inconsistent external tool',
            'Consolidated three repos into a monorepo, enabling 14 end-to-end tests across all services for the first time'
        ],
        link: 'https://www.ghsiss.com/',
        image: ISSIcon
    },
    {
        title: 'Wolters Kluwer - UpToDate',
        role: 'Product Full-Stack Software Engineer',
        period: 'Jan 2023 – Dec 2024',
        description: [
            'Led modernization initiatives (Java, Spring Boot, Vue.js), resolving critical security vulnerabilities and eliminating technical debt for a platform serving 3M+ health professionals',
            'Automated environment validation for 150+ developers, reducing setup failures and onboarding friction',
            'Consolidated fragmented JSP error pages into unified front-end error-handling architecture, improving maintainability'
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