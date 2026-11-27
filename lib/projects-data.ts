export type ProjectGroup =
  | 'All'
  | 'BI & Dashboards'
  | 'Machine Learning'
  | 'AI & NLP'

export type Project = {
  slug: string
  title: string
  category: string
  group: ProjectGroup
  description: string
  stack: string[]
  github: string
  live?: string
  metric: string
  trend: number[]
  problem: string
  methodology: string[]
  findings: string[]
}

export const projectFilters: ProjectGroup[] = [
  'All',
  'BI & Dashboards',
  'Machine Learning',
  'AI & NLP',
]

export const projects: Project[] = [
  {
    slug: 'ecommerce-rfm-analytics',
    title: 'E-Commerce Revenue & RFM Segmentation Engine',
    category: 'Business Intelligence & SQL Analytics',
    group: 'BI & Dashboards',
    description:
      'End-to-end customer segmentation and margin recovery engine built with SQL, Python, and Power BI—identifying high-value cohorts and modeling What-If discount scenarios.',
    stack: ['Python', 'SQL', 'Power BI', 'RFM Modeling', 'DAX'],
    github: 'https://github.com/Anukram01/Ecommerce-Sales-Analytics',
    metric: '+$47.4K Margin Recovery',
    trend: [38, 42, 45, 51, 58, 64, 72],
    problem:
      'Broad, untargeted discounting was eroding net profit margins while high-value repeat buyers went unsegmented.',
    methodology: [
      'Engineered Recency, Frequency, and Monetary (RFM) customer cohorts using SQL window functions and Python.',
      'Built an interactive Power BI executive dashboard with dynamic DAX What-If parameters to simulate discount caps.',
    ],
    findings: [
      'Identified top 18% Champion & Loyal segments generating over half of repeat revenue.',
      'Simulated targeted discount guardrails projecting +$47.4K in recoverable profit margin.',
    ],
  },
  {
    slug: 'ipl-match-intelligence',
    title: 'IPL Match Intelligence & Win-Probability App',
    category: 'Predictive Analytics & Interactive Web App',
    group: 'Machine Learning',
    description:
      'Live Streamlit analytics platform delivering ball-by-ball win probability, venue bias decomposition, and head-to-head matchup intelligence across IPL seasons.',
    stack: ['Python', 'Pandas', 'SQLite', 'Scikit-Learn', 'Streamlit'],
    github: 'https://github.com/Anukram01/IPL--DATA-ANALYTICS-',
    live: 'https://ipl-prediction-anukram2.streamlit.app',
    metric: 'Live Streamlit App',
    trend: [52, 56, 61, 65, 69, 74, 79],
    problem:
      'Static match scorecards fail to capture real-time chase momentum, venue dew bias, and phase-wise bowling pressure.',
    methodology: [
      'Structured multi-season ball-by-ball match records into a relational SQLite database for fast analytical querying.',
      'Trained a calibrated win-probability classifier incorporating required run rate, wickets in hand, and venue chase history.',
    ],
    findings: [
      'Quantified toss and second-innings chase advantage across high-scoring venues.',
      'Deployed a public Streamlit interface enabling instant pre-match and live-chase scenario analysis.',
    ],
  },
  {
    slug: 'customer-churn-bi',
    title: 'Telecom Customer Churn & Retention BI Suite',
    category: 'Executive Dashboard & Cohort Diagnostics',
    group: 'BI & Dashboards',
    description:
      'Interactive Power BI diagnostic report uncovering contract-level churn drivers, tenure drop-off cliffs, and high-risk subscriber segments.',
    stack: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    github: 'https://github.com/Anukram01',
    metric: 'Executive Churn KPI Suite',
    trend: [68, 64, 61, 57, 53, 49, 45],
    problem:
      'Leadership lacked granular visibility into which billing plans and onboarding windows drove the steepest customer attrition.',
    methodology: [
      'Modeled star-schema customer demographics, tenure bands, and service add-ons in Power BI.',
      'Designed DAX measures for churn rate, monthly revenue at risk, and multi-attribute slicer drill-downs.',
    ],
    findings: [
      'Isolated month-to-month contracts without tech-support add-ons as the highest-attrition cohort.',
      'Highlighted the first 6 months of tenure as the critical intervention window for retention offers.',
    ],
  },
  {
    slug: 'ai-voice-journal',
    title: 'AI-Powered Voice Journal & Sentiment Pipeline',
    category: 'NLP & Automated SQL Trend Modeling',
    group: 'AI & NLP',
    description:
      'Automated speech-to-insight pipeline transcribing audio entries via OpenAI Whisper, scoring emotional polarity, and tracking longitudinal mood trends in SQL.',
    stack: ['Python', 'OpenAI Whisper', 'NLP', 'SQL', 'Pandas'],
    github: 'https://github.com/Anukram01/Ai-Powered-Voice-Journal-With-Whisper',
    metric: 'End-to-End Audio → SQL',
    trend: [40, 48, 54, 60, 66, 73, 81],
    problem:
      'Unstructured voice logs hold rich behavioral signals but cannot be queried or tracked over time without automated transcription and tagging.',
    methodology: [
      'Built an ingestion workflow converting raw audio recordings into clean text transcripts using OpenAI Whisper.',
      'Applied NLP sentiment scoring and stored timestamped entries in SQL to compute rolling mood averages via window functions.',
    ],
    findings: [
      'Eliminated manual journaling friction with automated transcription and topic/sentiment tagging.',
      'Enabled longitudinal trend queries surfacing weekly sentiment shifts and recurring themes.',
    ],
  },
  {
    slug: 'titanic-survival-ml',
    title: 'Titanic Survival Classification & Feature Pipeline',
    category: 'Supervised Machine Learning',
    group: 'Machine Learning',
    description:
      'End-to-end tabular ML workflow featuring domain feature engineering, missing-value imputation, and cross-validated ensemble benchmarking.',
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Seaborn'],
    github:
      'https://github.com/Anukram01/Titanic_Survival_Prediction-_Using-_Machine-Learning',
    metric: '82.38% CV Accuracy',
    trend: [71, 75, 78, 80, 81, 82, 82.38],
    problem:
      'Raw passenger manifests contain missing age/cabin records and non-linear interaction effects across class, sex, and family size.',
    methodology: [
      'Extracted title prefixes, family-size buckets, and fare-per-person features while imputing missing values without leakage.',
      'Benchmarked Logistic Regression, Random Forest, and Gradient Boosting models using stratified k-fold cross-validation.',
    ],
    findings: [
      'Achieved 82.38% cross-validation accuracy with engineered family-group and socio-economic features.',
      'Demonstrated strong generalization gains over baseline models through systematic feature selection.',
    ],
  },
]
