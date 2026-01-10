export type BrandIconName =
  | "aws"
  | "docker"
  | "python"
  | "postgres"
  | "elasticsearch"
  | "github"
  | "linux"
  | "airflow"
  | "tableau"
  | "powerbi"
  | "wireshark"
  | "burpsuite"
  | "metasploit"
  | "google"
  | "microsoft"
  | "azure"
  | "gcp"
  | "cloud"
  | "iam"
  | "zerotrust"
  | "siem"
  | "cisnist"
  | "rbac"
  | "qradar"
  | "suricata"
  | "accesscontrol"
  | "sql"
  | "java"
  | "cplusplus"
  | "mysql"
  | "sqlite"
  | "r"
  | "vba"
  | "javafx"
  | "jdbc"
  | "excel"
  | "kms"
  | "cicd"
  | "spark"
  | "tensorflow"
  | "sklearn"
  | "opencv"
  | "cnn"
  | "feature"
  | "predict"
  | "matplotlib"
  | "seaborn"
  | "kpi";

type BrandIconDefinition = {
  viewBox: string;
  paths: { d: string }[];
};

export const brandIcons: Record<BrandIconName, BrandIconDefinition> = {
  aws: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M4 7l8-4 8 4" },
      { d: "M4 13l8-4 8 4" },
      { d: "M4 17l8 4 8-4" }
    ]
  },
  docker: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M4 12h4v4H4z" },
      { d: "M9 12h4v4H9z" },
      { d: "M14 12h4v4h-4z" },
      { d: "M9 7h4v4H9z" },
      { d: "M14 7h4v4h-4z" },
      { d: "M3 17h18c-1 3-4 4-7 4H9c-3 0-5-1-6-4z" }
    ]
  },
  python: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M7 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2H9a2 2 0 0 0-2 2v2H7a3 3 0 0 1-3-3V8z" },
      { d: "M17 16a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2h8a2 2 0 0 0 2-2v-2h0a3 3 0 0 1 3 3v3z" }
    ]
  },
  postgres: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 6c0-2 12-2 12 0s-12 2-12 0z" },
      { d: "M6 6v12c0 2 12 2 12 0V6" }
    ]
  },
  elasticsearch: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M4 7h16" },
      { d: "M4 12h12" },
      { d: "M4 17h14" }
    ]
  },
  github: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M12 3c-4.4 0-8 3-8 7 0 3.5 2.2 6.4 5.3 7.3.7.2.9-.2.9-.6v-1.8c-2.2.5-2.7-1-2.7-1-.3-.8-.8-1-1.2-1-.9-.1-.1-.9.7-.6.9.3 1.4 1.1 1.4 1.1.8 1.3 2.1.9 2.6.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2 .0 0 1-.3 2.2.8.7-.2 1.4-.3 2.1-.3.7 0 1.4.1 2.1.3 1.2-1.1 2.2-.8 2.2-.8.5 1 .2 1.8.1 2 .5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.3c0 .4.3.8.9.6C17.8 16.4 20 13.5 20 10c0-4-3.6-7-8-7z" }
    ]
  },
  linux: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M4 6h16" },
      { d: "M4 18h16" },
      { d: "M7 10l2 2-2 2" },
      { d: "M12 14h5" }
    ]
  },
  airflow: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M12 4a8 8 0 1 1-5.7 2.3" },
      { d: "M12 8v4l3 3" }
    ]
  },
  tableau: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M12 4v16" },
      { d: "M4 12h16" },
      { d: "M8 8h8" },
      { d: "M8 16h8" }
    ]
  },
  powerbi: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M5 18V9h3v9H5z" },
      { d: "M10 18V6h3v12h-3z" },
      { d: "M15 18v-7h3v7h-3z" }
    ]
  },
  wireshark: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M4 14c4-6 12-6 16 0" },
      { d: "M4 10c5-5 11-5 16 0" },
      { d: "M8 16c2-2 6-2 8 0" }
    ]
  },
  burpsuite: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 6h8a4 4 0 0 1 0 8H6z" },
      { d: "M6 14h8a4 4 0 0 1 0 8H6z" }
    ]
  },
  metasploit: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 18c6-1 10-5 12-12" },
      { d: "M6 18c1-6 5-10 12-12" },
      { d: "M6 18h6" }
    ]
  },
  google: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 12a6 6 0 1 0 6-6" },
      { d: "M12 12h6" }
    ]
  },
  microsoft: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M5 5h6v6H5z" },
      { d: "M13 5h6v6h-6z" },
      { d: "M5 13h6v6H5z" },
      { d: "M13 13h6v6h-6z" }
    ]
  },
  azure: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 18l6-12 6 12" },
      { d: "M9.5 12h5" }
    ]
  },
  gcp: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 14a6 6 0 0 1 12 0" },
      { d: "M8 14h8" }
    ]
  },
  cloud: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M7 16h10a3 3 0 0 0 0-6 4 4 0 0 0-7.6-1.2A3 3 0 0 0 7 16z" }
    ]
  },
  iam: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M12 6l7 4v8l-7 4-7-4v-8l7-4z" }]
  },
  zerotrust: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M12 4l7 3v5c0 4-3 6-7 8-4-2-7-4-7-8V7l7-3z" }]
  },
  siem: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M4 12h6l2-4 2 8 2-4h4" }]
  },
  cisnist: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 12h12" }, { d: "M6 8h12" }, { d: "M6 16h12" }]
  },
  rbac: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" },
      { d: "M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" },
      { d: "M4 18c1-3 8-3 9 0" },
      { d: "M11 18c1-3 8-3 9 0" }
    ]
  },
  qradar: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 6h12v12H6z" }, { d: "M9 9h6v6H9z" }]
  },
  suricata: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M5 18l7-12 7 12" }, { d: "M9 14h6" }]
  },
  accesscontrol: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M7 12h10v7H7z" }, { d: "M9 12V9a3 3 0 0 1 6 0v3" }]
  },
  sql: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M6 6c0-2 12-2 12 0s-12 2-12 0z" },
      { d: "M6 6v6c0 2 12 2 12 0V6" }
    ]
  },
  java: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M10 5c2 1 2 2 0 3" }, { d: "M8 18c4 2 8 2 12 0" }]
  },
  cplusplus: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 12h6" }, { d: "M15 10h4" }, { d: "M17 8v4" }]
  },
  mysql: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 7h12" }, { d: "M6 12h12" }, { d: "M6 17h12" }]
  },
  sqlite: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M7 6h10v12H7z" }, { d: "M10 9h4" }, { d: "M10 13h4" }]
  },
  r: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M7 17V7h6a3 3 0 0 1 0 6H7" }, { d: "M13 13l4 4" }]
  },
  vba: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 7h12v10H6z" }, { d: "M9 10h6" }, { d: "M9 14h6" }]
  },
  javafx: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M12 6v12" }, { d: "M6 12h12" }]
  },
  jdbc: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M5 12h14" }, { d: "M12 5v14" }]
  },
  excel: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 5h12v14H6z" }, { d: "M9 9l6 6" }, { d: "M15 9l-6 6" }]
  },
  kms: {
    viewBox: "0 0 24 24",
    paths: [
      { d: "M7 12h10v7H7z" },
      { d: "M9 12V9a3 3 0 0 1 6 0v3" },
      { d: "M12 15v2" }
    ]
  },
  cicd: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 12h12" }, { d: "M9 8l-3 4 3 4" }, { d: "M15 8l3 4-3 4" }]
  },
  spark: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M12 5c2 2 2 4 0 6-2 2-2 4 0 6" }]
  },
  tensorflow: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 7h12" }, { d: "M12 7v12" }]
  },
  sklearn: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M7 12a5 5 0 1 1 10 0" }, { d: "M12 7v10" }]
  },
  opencv: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M12 6a3 3 0 1 1-3 3" }, { d: "M12 18a3 3 0 1 1 3-3" }]
  },
  cnn: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 7h12" }, { d: "M6 12h12" }, { d: "M6 17h12" }]
  },
  feature: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 18V6" }, { d: "M10 14V6" }, { d: "M14 18V6" }, { d: "M18 12V6" }]
  },
  predict: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 16l4-4 3 3 5-5" }]
  },
  matplotlib: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 18V6" }, { d: "M6 18h12" }, { d: "M9 15l3-4 3 2 3-5" }]
  },
  seaborn: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M6 16c2-4 6-4 8 0" }, { d: "M10 12c2-4 6-4 8 0" }]
  },
  kpi: {
    viewBox: "0 0 24 24",
    paths: [{ d: "M5 18V9" }, { d: "M10 18V6" }, { d: "M15 18v-4" }]
  }
};
