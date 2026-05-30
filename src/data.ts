import { Project, BlogPost, ExperienceItem, EducationItem, SeminarItem } from "./types";

export const projectsData: Project[] = [
  {
    id: "tasi-lab",
    title: "Experimental Behavioral Modeling",
    description: "Designed multi-variable statistical experiments and predictive behavioral analysis patterns (TASi Lab).",
    detailedDescription: "At the Theoretical and Applied Statistical Innovation Lab (TASi Lab), developed research methodologies and structured models analyzing client/user actions. Cleared and parsed survey telemetry to extract behavioral insights and compiled findings into formal research outlines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    tags: ["R Language", "Python", "Predictive Analytics", "Hypothesis Testing", "SPSS", "STATA"],
    features: [
      "Designed quantitative experimental paradigms for behavioral observation",
      "Drafted high-impact statistical reports utilizing R and Python analysis libraries",
      "Executed linear/logistics regressions to uncover consumer choices and trends",
      "Synthesized complex behavioral datasets into structured academic findings and publications"
    ],
    liveUrl: "https://www.linkedin.com/in/ishrat-jerin-9518a317b/",
    category: "Statistical Research",
    featured: true
  },
  {
    id: "ngo-forum",
    title: "WASH Impact Evaluation Hub",
    description: "Geospatial mapping and survey pipelines assessing public health and climate actions (NGO Forum).",
    detailedDescription: "Coordinated baseline, follow-up, and periodical impact evaluation surveys surrounding water safety, sanitation, hygiene (WASH), and environmental risk. Created robust data collection protocols, trained field assistants, and programmed advanced Kobo Toolbox dashboards.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
    tags: ["Kobo Toolbox", "GIS", "SPSS", "SurveyCTO", "STATA", "Project Budgeting"],
    features: [
      "Led baseline & follow-up impact evaluations across multiple remote sectors",
      "Programmed advanced validation matrices inside Kobo Toolbox and SurveyCTO templates",
      "Scripted comprehensive spatial research questionnaires for sanitation and hygiene indicators",
      "Monitored incoming survey results to maintain high data consistency and fraud prevention"
    ],
    liveUrl: "https://www.linkedin.com/in/ishrat-jerin-9518a317b/",
    category: "Impact Evaluation",
    featured: true
  },
  {
    id: "cdip-mis",
    title: "Credit Analytics MIS Platform",
    description: "Automated credit data extraction, ingestion pipelines, and interactive visual reporting (CDIP).",
    detailedDescription: "Designed and deployed custom Management Information System (MIS) workflows to track microfinance and credit data. Automated the validation and merging of heterogeneous databases, presenting live reports in compliance with regulatory agencies like MRA and CIB.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    tags: ["Python", "SQL Queries", "Power BI", "Data Ingestion", "Excel Solver", "MIS Reports"],
    features: [
      "Coded helper automation scripts in Python to parse and clean financial ledger sheets",
      "Wrote responsive SQL queries to extract loan metrics from distributed relational databases",
      "Created highly detailed Power BI and Microsoft Excel executive performance dashboards",
      "Enforced compliance with credit audit regulations through strict double-entry verification techniques"
    ],
    liveUrl: "https://www.linkedin.com/in/ishrat-jerin-9518a317b/",
    category: "Data Analytics & MIS",
    featured: true
  },
  {
    id: "autism-study",
    title: "Autistic Babies Behavioral Study",
    description: "A statistical study identifying indicators, triggers, and therapeutic remedies for developmental autism.",
    detailedDescription: "Drafted a complete academic thesis utilizing multi-factor variance analysis to isolate core developmental triggers in infants. Designed custom observation surveys and applied statistical distribution fits to map behavioral responses.",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop",
    tags: ["M.Sc. Thesis", "ANOVA Tests", "Statistical Inference", "Social Research", "SPSS Modeling"],
    features: [
      "Formulated probabilistic behavioral matrices assessing autistic infant groups",
      "Identified risk correlations between environmental triggers and specific response spikes",
      "Analyzed factors affecting accessibility to mobile banking frameworks in regional zones",
      "Delivered a detailed guide mapping therapeutic paths based on multivariate statistical fits"
    ],
    liveUrl: "https://www.linkedin.com/in/ishrat-jerin-9518a317b/",
    category: "Social Studies",
    featured: false
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "survey-scripting-patterns",
    title: "Dynamic Form Architecture: Advanced Scripting Patterns in Kobo Toolbox and SurveyCTO",
    slug: "dynamic-survey-form-architecture",
    summary: "How to script responsive field questionnaires, implement double-entry validations, and prevent field surveyor fatigue with clean skip patterns.",
    content: `Field-scale scientific and social surveys are only as strong as the data collection instruments used to capture them. When surveying critical health metrics or credit parameters across hundreds of remote households, minor errors in questionnaire design can introduce fatal downstream bias.

Modern mobile data collections engines (such as Kobo Toolbox, SurveyCTO, and Survey Solution) execute a highly custom XML standard called XLSForm. Implementing a professional instrument goes far beyond importing a list of text fields; it requires careful validation scripting.

### 1. Advanced Skip Logic and Group Triggers

A fundamental key to reducing survey fatigue and ensuring data accuracy is dynamic skip patterns. Instead of forcing a field interviewer to manually read instructions like "If No, skip to Q12", XLSForm lets you define these conditions via the \`relevant\` column using logical expressions:

\`\`\`xml
# In XLSForm "survey" sheet
+-------------+----------------------+-----------------------------+-------------------------------+
|    type     |         name         |            label            |           relevant            |
+-------------+----------------------+-----------------------------+-------------------------------+
| select_one  | has_potable_water    | Do you have safe water?    |                               |
| integer     | water_source_distance| Distance to source (meters) | \${has_potable_water} = 'yes' |
+-------------+----------------------+-----------------------------+-------------------------------+
\`\`\`

Using bracket references (\`\${field_name}\`), you can seamlessly group complex dependencies inside hidden layout sections to keep the mobile interface highly focused.

### 2. Guarding Data Quality with Validation Expressions

Never trust post-field data cleaning to catch easily preventable entry typos. XLSForm allows you to construct real-time logic constraints using declarative code logic inside the \`constraint\` column, paired with a custom \`constraint_message\` warning:

\`\`\`xml
# Validating child age parameters
+---------+-----------+----------------------+-----------------------------------+
|  type   |   name    |      constraint      |        constraint_message         |
+---------+-----------+----------------------+-----------------------------------+
| integer | child_age | . >= 0 and . <= 120  | Age value must be between 0 & 120 |
+---------+-----------+----------------------+-----------------------------------+
\`\`\`

By writing structural calculations (such as matching household counts to child index loops), you can enforce absolute integrity before the survey package leaves the field.

### 3. Automated Server Uploads and Data Decryption

Secure surveying often requires zero-exposure key cryptography. When scripting within SurveyCTO, you can define public key pairs directly in the form's header tags. Once submitted, the data payload is automatically encrypted using 2048-bit AES-GCM on the mobile device, ensuring that stored records remain fully unreadable in case of physical phone loss or server intrusion.`,
    publishedAt: "2026-05-10",
    readTime: "7 min read",
    category: "Methodology Guidelines",
    tags: ["Kobo Toolbox", "SurveyCTO", "XLSForm", "Data Security"],
    author: {
      name: "Ishrat Jerin",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      role: "Statistical Research Scientist"
    }
  },
  {
    id: "r-vs-stata-regressions",
    title: "R vs STATA: Navigating Multi-Variable Regressions in Social Impact Investigations",
    slug: "r-vs-stata-social-regressions",
    summary: "An objective comparative review for developmental researchers. Learn when to prioritize STATA's unified commands over R's tidyverse wrappers.",
    content: `In social and developmental research, identifying causal relationships between interventions (like installing a local drinking well) and outcomes (like reducing child infection rates) requires robust multivariate analysis. 

The two primary analytical environments in this space are STATA, a favorite of economists and NGOs, and R, the open-source statistical standard. Both packages can execute complex regression models, but choosing between them alters your data pipeline.

### 1. Robust Standard Errors and Clustered Analysis

In social trials, field observations are rarely wholly independent. Households nested within the same village often share latent geographic or socio-economic features. Failing to cluster standard errors understates the variance, yielding false confidence.

In STATA, executing a regression with robust, clustered standard errors is exceptionally succinct:

\`\`\`stata
* Executing a multivariate linear regression with clustered errors
regress infection_rate has_wash_intervention household_size distance_to_clinic, cluster(village_id) robust
\`\`\`

To replicate this exact clustered model inside R, we leverage the \`lm\` function combined with the \`sandwich\` and \`lmtest\` packages, which requires manual covariate structural steps:

\`\`\`r
# Executing R model with clustered standard covariance matrices
library(sandwich)
library(lmtest)

model <- lm(infection_rate ~ has_wash_intervention + household_size + distance_to_clinic, data = survey_df)
clustered_results <- coeftest(model, vcov = vcovCL(model, cluster = ~village_id))
summary(clustered_results)
\`\`\`

### 2. Panel Data and Fixed Effects

When analyzing longitudinal datasets (interviews track across multiple years—baseline, midpoint, follow-up), fixed effects models control for unobserved individual traits. 

- **STATA**'s \`xtset\` declarations and \`xtreg\` command simplify fixed effects, making it the industry benchmark for long structural models.
- **R** excels in high-dimension datasets using packages like \`plm\` and \`fixest\`. R’s \`ggplot2\` ecosystem is superior for generating publication-quality visual models for journal papers.

Determining which tool is appropriate relies heavily on your final delivery: specify STATA for highly standardized NGO project briefs, and leverage R to deploy flexible visual dashboards and open data frameworks.`,
    publishedAt: "2026-04-18",
    readTime: "9 min read",
    category: "Statistical Research",
    tags: ["R Language", "STATA", "Regression Analysis", "Social Impact"],
    author: {
      name: "Ishrat Jerin",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      role: "Statistical Research Scientist"
    }
  },
  {
    id: "dashboard-visualization-tips",
    title: "Dashboard Ergonomics: Decisive Visual Analytics for Non-Technical Stakeholders",
    slug: "dashboard-ergonomics-nontechnical-views",
    summary: "How to layout Power BI and Excel reports that drive board decisions. A guide to setting up high-impact visual grids for NGOs and funders.",
    content: `When reporting the success of a development sector project to global funding groups (like the World Bank or UNICEF) or local government departments, displaying raw spreadsheets or dense tables of numbers rarely drives decision-making. 

Stakeholders require high-density, easily scannable dashboards that emphasize outcomes, trends, and outliers at a glance.

### 1. Visual Hierarchy and Information Real Estate

An effective board dashboard is built on strict layout rules. Position the most critical "Key Performance Indicators" (KPIs) in prominent focal points:

1. **Upper-Left Quadrant**: Reserve for the absolute baseline metrics: total participants reached, active coverage, and target achievement percentage.
2. **Horizontal Flows**: Detail trend lines across time—do not stack random charts in a bento layout if they do not follow a sequence.
3. **Interactive Side Sliders**: Allow stakeholders to filter indicators dynamically by region, demographic, or campaign.

### 2. Selecting the Best Splicing Methods in Power BI

Avoid complex or exotic layouts like radar charts or unlabelled donut slices. Stick to highly interpretable displays:

- **Clustered Bar Charts**: Excellent for comparing nominal categories, such as regional spending metrics.
- **Decomposition Trees**: Indispensable in Power BI for mapping credit risks, allowing board members to drill down from high-level categories directly into microfinance loan anomalies.
- **Trend Line Spans**: Always include shaded confidence intervals around trend forecasts to represent experimental variance honestly.

By styling your analytics dashboards with clean typography, consistent color rules, and standard responsive grids, you convert static reports into dynamic assets that clarify project impacts.`,
    publishedAt: "2026-03-05",
    readTime: "6 min read",
    category: "Data Visualization",
    tags: ["Power BI", "Excel Dashboards", "KPI Design", "Business Analytics"],
    author: {
      name: "Ishrat Jerin",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
      role: "Statistical Research Scientist"
    }
  }
];

export const cmsGuides = {
  kobo: {
    name: "Kobo Toolbox API",
    description: "Use Python or Node.js to fetch survey data directly from Kobo servers. This enables automatic updates to dynamic portfolios or public status dashboards.",
    npmPackages: ["axios", "dotenv"],
    clientCode: `# Fetch survey metrics from Kobo Toolbox using Python
import requests
import os

KOBO_API_TOKEN = os.getenv("KOBO_API_TOKEN") # Secure credentials in .env
ASSET_UID = "your_survey_asset_uid_here"     # Kobo Form ID
url = f"https://kf.kobotoolbox.org/api/v2/assets/{ASSET_UID}/data.json"

headers = {
    "Authorization": f"Token {KOBO_API_TOKEN}"
}

def fetch_survey_records():
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        results = data.get("results", [])
        print(f"Loaded {len(results)} active survey submittals.")
        return results
    else:
        print(f"Retrieval failed with code: {response.status_code}")
        return []`
  },
  surveycto: {
    name: "SurveyCTO API",
    description: "Leverage SurveyCTO's secure server APIs to ingest formatted research tables directly into STATA, R, or custom full-stack visualization panels.",
    npmPackages: ["dotenv", "node-fetch"],
    clientCode: `# Pull encrypted data from SurveyCTO server
import requests

SERVER_NAME = "your-server"
FORM_ID = "your_form_id"
USERNAME = "api_user_email"
PASSWORD = "api_user_password"

url = f"https://{SERVER_NAME}.surveycto.com/api/v1/urls/csv/{FORM_ID}"

def download_survey_csv():
    response = requests.get(
        url, 
        auth=(USERNAME, PASSWORD), 
        headers={"X-OpenRosa-Version": "1.0"}
    )
    if response.status_code == 200:
        with open("survey_responses.csv", "wb") as f:
            f.write(response.content)
        print("Survey records imported successfully.")
    else:
        print("Failed to pull CSV table from server.")`
  }
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "tasi",
    role: "Researcher",
    company: "Theoretical and Applied Statistical Innovation Lab (TASi Lab)",
    period: "July 2025 - Present",
    category: "Research",
    responsibilities: [
      "Designing experiments and developing research report based on analytical results.",
      "Data processing and analysis as per the analysis plan using statistical software R and Python."
    ]
  },
  {
    id: "cdip",
    role: "MIS (Management Information System) Officer",
    company: "Centre for development Innovation and Practices (CDIP)",
    period: "October 2025 - March 2026",
    category: "Work",
    responsibilities: [
      "Develop and maintain scheduled MIS reports; ensure high standards of data quality and consistency.",
      "Write Python and SQL queries to extract, summarize and analyze data.",
      "Visualize data through dashboards, charts and presentations using Power BI and Excel.",
      "Collect, validate and manage credit data from internal and external sources. Train staff on MIS tools and data protocols.",
      "Monitor system performance and maintain infrastructure, optimize workflows.",
      "Prepare and submit reports in line with regulatory standards (CIB, MRA).",
      "Ensure timely submission and proper documentation. Maintain accurate records for audits and reviews."
    ]
  },
  {
    id: "ngof",
    role: "Research Officer",
    company: "NGO Forum for Public Health",
    period: "October 2023 - July 2025",
    category: "Work",
    responsibilities: [
      "Coordinate Impact Evaluation- Baseline, Follow-up, and Periodical Surveys through quantitative and qualitative methods, case studies.",
      "Process and analyze data as per the analysis plan using SPSS, STATA and R to identify patterns and draw insights on resource sharing and risk mitigation strategies.",
      "Design methodologies and develop research protocols and develop tools for data collection.",
      "Script/program and upload questionnaire to the server of SurveyCTO and Kobo Toolbox.",
      "Prepare comprehensive research reports, summarize findings and analysis.",
      "Prepare training manual and train research assistant, enumerators and supervisors on survey and data collection procedure.",
      "Validate collected data through supervisors and inform client if any discrepancy found. Deliver data & household list to client as per schedule.",
      "Prepare and maintain budget of different projects.",
      "Liaise with clients, stakeholders, including academic institutions, NGOs and local authorities, to align efforts and share findings."
    ]
  },
  {
    id: "nexel",
    role: "Research Analyst",
    company: "Nexel Research Ltd.",
    period: "January 2023 - August 2023",
    category: "Work",
    responsibilities: [
      "Support to proposal and report development.",
      "Script questionnaire in Kobo Toolbox.",
      "Analyze both qualitative and quantitative data using SPSS after coding and categorizing qualitative data.",
      "Transcript verbatim of case Stories, KII and FGDs.",
      "Monitor outcoming data through Survey to go.",
      "Manage Data including cleaning & processing.",
      "Maintain liaison with clients."
    ]
  },
  {
    id: "org-quest-prog",
    role: "Programmer",
    company: "Org-Quest Research Limited",
    period: "March 2020 - December 2022",
    category: "Work",
    responsibilities: [
      "Program data processor.",
      "Conduct Qualitative and Quantitative Data analysis using SPSS.",
      "Monitor outcoming data after extracted from the data collection server SurveyCTO, Survey Solution, Survey to go.",
      "Clean data using Excel and SPSS.",
      "Coded and categorized qualitative data using Excel and SPSS."
    ]
  },
  {
    id: "org-quest-qa",
    role: "Data Quality Auditor",
    company: "Org-Quest Research Limited",
    period: "July 2019 - November 2019",
    category: "Work",
    responsibilities: [
      "Missing and wrong data had been identified and appropriate solutions had been devised in order to establish strong data.",
      "The process for ensuring good quality of data collection tool and devices had managed."
    ]
  },
  {
    id: "crown-cement",
    role: "Intern",
    company: "Crown Cement Company Limited",
    period: "March 2018 - April 2018",
    category: "Internship",
    responsibilities: [
      "Completed standard corporate internship on 'Business Research on Brand Equity'.",
      "Conducted focus surveys and qualitative research regarding brand perception metrics."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Science (M.Sc.)",
    major: "Statistics",
    cgpa: "3.48",
    year: "2018",
    institution: "Jahangirnagar University"
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    major: "Statistics",
    cgpa: "3.31",
    year: "2017",
    institution: "Jahangirnagar University"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    cgpa: "5.00",
    year: "2012",
    institution: "B A F Shaheen College, Tejgaon",
    board: "Dhaka Board"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    cgpa: "5.00",
    year: "2010",
    institution: "Sher-e-Bangla Nagar Govt. Girls’ High School",
    board: "Dhaka Board"
  }
];

export const seminarData: SeminarItem[] = [
  {
    id: "sem-1",
    title: "Attended seminar on 'Gender and Development Concept' organized by Water Resource Ministry",
    year: "2025",
    type: "Seminar"
  },
  {
    id: "sem-2",
    title: "Arranged workshop on Tubewell’s Mechanism Engagement at Narsingdi",
    year: "2024",
    type: "Workshop"
  },
  {
    id: "sem-3",
    title: "Member of 'Shikkha Sova' since 2019",
    year: "2019",
    type: "Extracurricular"
  },
  {
    id: "sem-4",
    title: "Participated in Workshop on 'D-Net' for upholding 'Right to Information Act: Youth’s View' at Jahangirnagar University",
    year: "2019",
    type: "Workshop"
  },
  {
    id: "sem-5",
    title: "Attended 'International Conference on Recent Advances in Mathematical and Physical Sciences' at Jahangirnagar University",
    year: "2018",
    type: "Seminar"
  },
  {
    id: "sem-6",
    title: "Attended Workshop on STATA organized by Statistical lead club, Jahangirnagar University",
    year: "2017",
    type: "Workshop"
  },
  {
    id: "sem-7",
    title: "Attended Workshop on 'Big Data'",
    year: "2016",
    type: "Workshop"
  },
  {
    id: "sem-8",
    title: "Acted as a volunteer at 'ShopnoBUZZ'",
    year: "2014",
    type: "Extracurricular"
  }
];
