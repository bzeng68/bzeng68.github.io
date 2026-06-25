import issIcon from '../assets/iss-icon.png'
import upToDateIcon from '../assets/uptodate-icon.png'
import nuroverIcon from '../assets/nurover-icon.png'
import twitterIcon from '../assets/twitter-icon.png'
import youtubeIcon from '../assets/youtube-icon.png'

export const socialLinks = [
  {
    label: 'Resume',
    href: '/BZeng_CS_Resume_Public.pdf',
    icon: 'description',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/b-zeng',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://www.github.com/bzeng68',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:zeng.br@northeastern.edu',
    icon: 'email',
  },
]

export const experienceCards = [
  {
    title: 'OmniTrust (Formerly INTEGRITY Security Services)',
    icon: issIcon,
    role: 'Full-Stack Software Engineer',
    meta: 'Jan 2024 – Dec 2025',
    details: [
      'Architected AWS-based web applications in Node.js and React for certificate provisioning and lifecycle management across 100K+ IEEE 1609.2 certificates.',
      'Engineered cross-platform mobile apps in Kotlin and Swift for real-time V2X interoperability at 500+ messages per second across 50+ devices.',
      'Built ECDH signing libraries for tamper-proof message authentication and tightened observability by migrating 32M+ logs to DocumentDB.',
      'Containerized the EV2G app, automated CI/CD with Jenkins, and consolidated three repos into a monorepo with 14 end-to-end tests.',
    ],
    link: 'https://www.ghsiss.com/',
  },
  {
    title: 'Wolters Kluwer - UpToDate',
    icon: upToDateIcon,
    role: 'Product Full-Stack Software Engineer',
    meta: 'Jan 2023 – Dec 2024',
    details: [
      'Modernized Java, Spring Boot, and Vue.js systems while resolving security issues and reducing technical debt for a platform serving 3M+ health professionals.',
      'Automated environment validation for 150+ developers to reduce setup failures and onboarding friction.',
      'Unified fragmented JSP error pages into a single front-end error-handling flow to improve maintainability.',
    ],
    link: 'https://www.wolterskluwer.com/en/solutions/uptodate',
  },
  {
    title: 'NURover',
    icon: nuroverIcon,
    role: 'Software Developer | Webmaster',
    meta: 'Sep 2021 – May 2025',
    details: [
      'Developed a haptic control interface in C++ as a proof of concept for teleoperated 4-DOF robotic arm manipulation.',
      'Implemented a Python ROS state machine for autonomous navigation with Zed2 camera and IMU/GPS sensor fusion.',
    ],
    link: 'https://www.linkedin.com/company/northeasternrover',
  },
]

export const projectCards = [
  {
    title: 'Foresight-ML: Financial Distress Forecasting',
    emoji: '⚠️',
    meta: 'Jan 2026 – May 2026',
    details: [
      'Won 1st place at Northeastern × Google MLOps Expo 2026 for a 6–12 month financial distress forecasting platform.',
      'Orchestrated Airflow DAGs for ingestion, preprocessing, and retraining with Cloud Monitoring alerts for drift and Cloud Run failures.',
      'Provisioned GCP infrastructure with Terraform and deployed MLflow on Cloud Run with serverless scaling to eliminate managed platform costs.',
    ],
    link: 'https://github.com/Foresight-ML/foresight_ml',
  },
  {
    title: 'Large-Scale Misinformation Classification',
    emoji: '🧠',
    meta: 'Sep 2025 – Dec 2025',
    details: [
      'Trained CNN, LSTM, FNN, and Longformer models for misinformation detection across 3.4M articles.',
      'Reached 99.6% accuracy with Longformer outperforming baseline SVM and XGBoost models.',
    ],
  },
  {
    title: 'Cheffy: AI Cooking Assistant',
    emoji: '😋',
    meta: 'Sep 2025 – Dec 2025',
    details: [
      'Built a multi-agent cooking assistant with Gemini, RAG, three external tools, and an iterative output-grading agent.',
    ],
    link: 'https://github.com/bzeng68/cheffy',
  },
  {
    title: 'Finance Tracker AI Chatbot',
    emoji: '📈',
    meta: 'Jun 2025 – Present',
    details: [
      'Created a LangChain RAG chatbot for natural-language transaction analysis and budget insights.',
    ],
    link: 'https://github.com/bzeng68/finance-tracker',
  },
  {
    title: 'YouTube Spam Classifier',
    icon: youtubeIcon,
    meta: 'Feb 2023 – May 2023',
    details: [
      'Constructed an NLP pipeline with NLTK and Scikit-Learn to classify spam comments at scale.',
    ],
    link: 'https://github.com/bzeng68/Youtube-Spam-Classification',
  },
  {
    title: 'Twitter Sentiment Analysis Stock Portfolio',
    icon: twitterIcon,
    meta: 'Oct 2022 – Dec 2022',
    details: [
      'Built a quantitative trading model using sentiment analysis on 1.75M+ tweets.',
    ],
    link: 'https://github.com/bzeng68/Sentiment-Analysis-Stock-Portfolio',
  },
  {
    title: 'Desktop Bear',
    emoji: '🧸',
    meta: 'Mar 2022 – May 2024',
    details: [
      'Developed a Python state-managed draggable desktop bear with multiple self-drawn pixel-art actions.',
    ],
    link: 'https://github.com/bzeng68/Desktop-Pet',
  },
]