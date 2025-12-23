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
            'Architected AWS-based full-stack web applications (Node.js, React) that support the provisioning of 100,000+ IEEE 1609.2 certificates for V2X infrastructure, streamlining the certificate management lifecycle',
            'Engineered cross-platform mobile apps (Kotlin, Swift) enabling real-time interoperability between roadside units, vehicles, and mobile devices, improving on-site hazard awareness and worker safety',
            'Implemented mobile signing libraries (Kotlin, Swift) using ECDH key exchange to enable secure, authenticated V2X messaging across transportation infrastructure',
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
            'Spearheaded modernization initiatives (Java, Spring Boot, Vue.js) eliminating technical debt and resolving critical security vulnerabilities for a medical resources platform serving 2M+ health professionals ',
            'Enhanced internal developer tooling for 150+ developers to ensure proper backend configuration, reducing setup errors and accelerating onboarding',
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
            'Co-developed a small-scale haptic arm in C++ as a PoC of controlling a full 4-degree-of-freedom robotic arm',
            'Built Python ROS state machine, powering autonomous Rover navigation via Zed2 camera GPS and IMU data',
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