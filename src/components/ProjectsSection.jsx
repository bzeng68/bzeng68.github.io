import TimelineSection from "./TimelineSection";
import YouTubeIcon from '../assets/youtube-icon.png'
import TwitterIcon from '../assets/twitter-icon.png'

const projects = [
    {
        title: 'Foresight-ML: Financial Distress Forecasting',
        period: 'January 2026 - May 2026',
        description: [
            'Won 1st place at Northeastern × Google MLOps Expo 2026 for a 6–12 month financial distress forecasting platform',
            'Orchestrated end-to-end ML pipelines via scheduled Airflow DAGs (ingestion, preprocessing, retraining) with Cloud Monitoring alerts for data drift and Cloud Run failures, sustaining a 0.977 ROC-AUC financial distress model',
            'Provisioned GCP infra via Terraform (Cloud Run, Cloud SQL, GCS, IAM, Secret Manager), deploying MLflow on Cloud Run with serverless auto-scaling to eliminate managed platform costs'

        ],
        link: 'https://github.com/Foresight-ML/foresight_ml',
        emoji: '⚠️'
    },
    {
        title: 'Large-Scale Misinformation Classification',
        period: 'September 2025 - December 2025',
        description: [
            'Trained deep learning models (CNN, LSTM, FNN, Longformer) for misinformation detection across 3.4M articles, achieving 99.6% accuracy with Longformer outperforming baseline SVM/XGBoost models'
        ],
        emoji: '🤖'
    },
    {
        title: 'Cheffy: AI Cooking Assistant',
        period: 'September 2025 - December 2025',
        description: [
            'Co-designed AI agentic search cooking assistant using Gemini and multi-agent RAG to autonomously retrieve recipes and provide personalized cooking guidance'
        ],
        link: 'https://github.com/bzeng68/cheffy',
        emoji: '😋'
    },
    {
        title: 'Finance Tracker AI Chatbot',
        period: 'June 2025 - Present',
        description: [
            'Created RAG-powered chatbot using LangChain for automated financial analysis transaction categorization and personalized budget insights'
        ],
        link: 'https://github.com/bzeng68/finance-tracker',
        emoji: '📈'
    },
    {
        title: 'YouTube Spam Classifier',
        period: 'February 2023 - May 2023',
        description: [
            'Constructed quantitative trading model using NLP sentiment analysis (NLTK, Scikit-Learn) on 1.75M+ tweets'
        ],
        link: 'https://github.com/bzeng68/Youtube-Spam-Classification',
        image: YouTubeIcon
    },
    {
        title: 'Twitter Sentiment Analysis Stock Portfolio',
        period: 'October 2022 - December 2022',
        description: [
            'Constructed quantitative trading model using NLP sentiment analysis (NLTK, Scikit-Learn) on 1.75M+ tweets'
        ],
        link: 'https://github.com/bzeng68/Sentiment-Analysis-Stock-Portfolio',
        image: TwitterIcon
    },
    {
        title: 'Desktop Bear',
        period: 'March 2022 - May 2024',
        description: [
            'Developed a Python state-managed draggable desktop bear that has multiple self-drawn pixel art actions for my girlfriend'
        ],
        link: 'https://github.com/bzeng68/Desktop-Pet',
        emoji: '🧸'
    }
]

export default function ProjectsSection() {
    return (
        <TimelineSection
            title='Projects'
            emoji='💡'
            items={projects}
        />
    )
}