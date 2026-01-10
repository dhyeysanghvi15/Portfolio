export const profile = {
  name: "Dhyey Sanghvi",
  role: "Cybersecurity Student",
  positioning: {
    headline:
      "AWS-first security, Cybersecurity & Cloud Security student building secure, scalable software—automating detections, hardening AWS environments, and using data engineering + AI to turn telemetry into real-world security outcomes.",
    subhead:
      "Cybersecurity & Cloud Security Student | Secure Software • AWS Hardening • Detection Automation • Data + AI"
  },
  contact: {
    phone: "+1 623-206-9860",
    email: "dhyeysanghvi15@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhyeysanghvi/",
    github: "https://github.com/dhyeysanghvi15"
  },
  education: {
    school: "Arizona State University",
    degree: "B.S. Computer Science (Cybersecurity)",
    dates: "Aug 2022 - May 2026",
    graduation: "May 2026",
    minor: "Mathematics",
    certificate: "Business Data Analytics",
    activities:
      "Activities and societies: CodeDevils, Software Developers Association, Scholars of Physical Mathematics at ASU",
    skills: [
      "Object Oriented Programming",
      "Information Assurance",
      "Cybersecurity Fundamentals",
      "Data Analytics"
    ],
    secondary: {
      school: "Delhi Public School Modern Indian School (DPS-MIS)",
      degree: "High School Diploma, Science",
      dates: "Apr 2009 - Mar 2022",
      gpa: "3.90"
    }
  },
  stats: [
    { label: "Telemetry processed", value: "1TB+" },
    { label: "Cloud regions monitored", value: "12" },
    { label: "Enterprise users supported", value: "100+" },
    { label: "Daily log volume", value: "50GB+" }
  ],
  experience: [
    {
      company: "Projacs International",
      role: "Cybersecurity Analyst Intern",
      location: "Doha, Qatar",
      dates: "May 2024 - Jul 2024",
      tools: [
        { name: "AWS", icon: "aws" },
        { name: "Apache Airflow", icon: "airflow" },
        { name: "PostgreSQL", icon: "postgres" },
        { name: "Elasticsearch", icon: "elasticsearch" },
        { name: "CloudTrail" }
      ],
      highlights: [
        "Airflow ETL in Python/PostgreSQL handled 1TB+ telemetry; latency cut from 2s to 300ms.",
        "Zero-trust data lake on AWS S3/IAM/KMS with encryption-at-rest, access logging, and compliance for 100+ enterprise users.",
        "CloudTrail to Elasticsearch anomaly detection across 12 regions; detection time reduced by 40%.",
        "Python log normalization for SIEM ingestion improved alert accuracy; triage time reduced by 35%."
      ],
      metrics: ["1TB+ telemetry", "2s -> 300ms", "12 regions", "40% faster detection"]
    },
    {
      company: "Human Resources Office - ASU",
      role: "Office Data Aide",
      location: "Tempe, AZ",
      dates: "Aug 2023 - Jan 2024",
      tools: [
        { name: "Python", icon: "python" },
        { name: "SQL" },
        { name: "RBAC" }
      ],
      highlights: [
        "Python + Excel macros reduced manual entry by 75% across 350+ faculty profiles.",
        "SQL relational databases cut query response time 4x for 20+ daily HR requests.",
        "RBAC and access reviews ensured FERPA + ASU privacy compliance.",
        "Python audit scripts flagged anomalies/duplicates; quarterly audits with zero discrepancies."
      ],
      metrics: ["75% less manual entry", "4x faster queries", "350+ profiles"]
    },
    {
      company: "Keepet Containers",
      role: "Cybersecurity & IT Intern",
      location: "Gujarat, India",
      dates: "May 2023 - Aug 2023",
      tools: [
        { name: "Docker", icon: "docker" },
        { name: "Suricata IDS" },
        { name: "Metasploit", icon: "metasploit" },
        { name: "Burp Suite", icon: "burpsuite" },
        { name: "Elasticsearch", icon: "elasticsearch" }
      ],
      highlights: [
        "Suricata IDS in Docker processed 50GB+ logs/day; false positives reduced 26%.",
        "Metasploit + Burp Suite testing uncovered 12 critical exploits in internal VLANs.",
        "Elasticsearch correlation across firewall/DHCP/app logs improved incident traceability; 99.2% SLA adherence.",
        "CIS-aligned reports prevented $25K potential data loss."
      ],
      metrics: ["50GB+ logs/day", "26% fewer false positives", "$25K risk avoided"]
    },
    {
      company: "Toastmasters International",
      role: "Vice President Education",
      location: "Doha, Qatar",
      dates: "Mar 2020 - Aug 2021",
      tools: [
        { name: "Public Speaking" },
        { name: "Data-driven Decision Making" },
        { name: "Strategic Planning" },
        { name: "Data Governance" }
      ],
      highlights: [
        "Developed and executed strategic plans to enhance student performance, achieving a 10% improvement in academic metrics while aligning with institutional mission.",
        "Spearheaded membership growth for the Gavels Club, increasing retention by 25% through onboarding, orientation sessions, and follow-ups.",
        "Organized cultural events and workshops, boosting participation by 30% and fostering inclusivity and cultural awareness among 75+ students."
      ],
      metrics: [
        "10% academic uplift",
        "25% retention increase",
        "30% participation growth",
        "75+ students"
      ]
    }
  ],
  projects: [
    {
      title: "Healthcare Automation System",
      slug: "healthcare-automation-system",
      summary: "Multi-role healthcare platform with secure access control and resilient audit trails.",
      problem: "Manual healthcare workflows created slow record retrieval and higher exposure risk.",
      approach:
        "Built role-based access control, strict input validation, and immutable logging for a secure multi-role system.",
      security:
        "RBAC, least-privilege policies, and audit logging across all sensitive operations.",
      results:
        "Protected 5K+ patient records, improved retrieval speed by 40%, and reduced exposure risk.",
      next: "Add automated anomaly detection for access patterns and continuous compliance checks.",
      stack: ["RBAC", "Audit Logging", "SQL", "Access Control"],
      metrics: ["5K+ records", "40% faster retrieval"]
    },
    {
      title: "Face Recognition Attendance System",
      slug: "face-recognition-attendance-system",
      summary: "Real-time CNN attendance pipeline optimized for low-latency concurrency.",
      problem: "Legacy attendance tools struggled with real-time video and concurrent users.",
      approach:
        "Designed a CNN-based pipeline with optimized inference and concurrency-safe request handling.",
      security:
        "Implemented input validation, rate limiting, and access control for biometric workflows.",
      results:
        "Handled 100+ users with latency reduced from 2s to 200ms under concurrency.",
      next: "Add liveness detection and privacy-preserving embeddings storage.",
      stack: ["CNN", "OpenCV", "Python", "Concurrency"],
      metrics: ["100+ users", "2s -> 200ms"]
    },
    {
      title: "Customer Churn Prediction System",
      slug: "customer-churn-prediction-system",
      summary: "ML pipeline with KPI dashboards to recover churn risk and revenue leakage.",
      problem: "Customer attrition signals were hard to track across disparate systems.",
      approach:
        "Built predictive models with feature engineering and automated dashboards for actionable insights.",
      security:
        "Applied least-privilege analytics access and data validation for modeling inputs.",
      results:
        "Analyzed 50K+ customers and recovered $40K in leakage with Tableau KPIs.",
      next: "Add drift monitoring and automated model retraining.",
      stack: ["scikit-learn", "Tableau", "Python", "Feature Engineering"],
      metrics: ["50K+ customers", "$40K recovered"]
    }
  ],
  skills: {
    "Security & Monitoring": [
      { name: "Suricata IDS", icon: "suricata" },
      { name: "Metasploit", icon: "metasploit" },
      { name: "Burp Suite", icon: "burpsuite" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "IBM QRadar", icon: "qradar" },
      { name: "Wireshark", icon: "wireshark" },
      { name: "IAM", icon: "iam" },
      { name: "CIS/NIST Controls", icon: "cisnist" },
      { name: "Zero-Trust", icon: "zerotrust" },
      { name: "SIEM pipelines", icon: "siem" },
      { name: "CloudTrail", icon: "cloud" },
      { name: "access control mgmt", icon: "accesscontrol" }
    ],
    "Programming & Databases": [
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C/C++", icon: "cplusplus" },
      { name: "SQL", icon: "sql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "R", icon: "r" },
      { name: "VBA", icon: "vba" },
      { name: "JavaFX", icon: "javafx" },
      { name: "JDBC", icon: "jdbc" },
      { name: "Excel macros", icon: "excel" }
    ],
    "Cloud & Infra": [
      { name: "AWS S3", icon: "aws" },
      { name: "IAM", icon: "iam" },
      { name: "KMS", icon: "kms" },
      { name: "CloudTrail", icon: "cloud" },
      { name: "GCP", icon: "gcp" },
      { name: "Docker", icon: "docker" },
      { name: "Apache Airflow", icon: "airflow" },
      { name: "CI/CD", icon: "cicd" },
      { name: "cloud data lakes", icon: "cloud" },
      { name: "RBAC", icon: "rbac" }
    ],
    "AI/ML & Data": [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "scikit-learn", icon: "sklearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "CNNs", icon: "cnn" },
      { name: "Apache Spark", icon: "spark" },
      { name: "feature engineering", icon: "feature" },
      { name: "predictive modeling", icon: "predict" }
    ],
    Visualization: [
      { name: "Tableau", icon: "tableau" },
      { name: "Power BI", icon: "powerbi" },
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "seaborn", icon: "seaborn" },
      { name: "KPI reporting", icon: "kpi" },
      { name: "SQL analytics", icon: "sql" }
    ]
  },
  featuredRepos: [
    {
      name: "Growingacompetency",
      description: "Git/GitHub competency showcase",
      url: "https://github.com/dhyeysanghvi15/Growingacompetency"
    },
    {
      name: "FaceRecognitionAttendanceSystem",
      description: "CNN-powered attendance system",
      url: "https://github.com/dhyeysanghvi15/FaceRecognitionAttendanceSystem"
    },
    {
      name: "Student-DBMS",
      description: "Student database management",
      url: "https://github.com/dhyeysanghvi15/Student-DBMS"
    },
    {
      name: "Healthcare-Automation-System",
      description: "Healthcare workflow automation",
      url: "https://github.com/dhyeysanghvi15/Healthcare-Automation-System"
    },
    {
      name: "dhyeysanghvi15",
      description: "GitHub profile README",
      url: "https://github.com/dhyeysanghvi15"
    }
  ]
};

export type Profile = typeof profile;
