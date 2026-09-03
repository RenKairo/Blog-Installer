export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  summary: string;
  content: string; // Markdown / HTML formatted string
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  architectureDiagram?: string;
}

export interface InstallerInfo {
  version: string;
  buildDate: string;
  fileSize: string;
  fileSizeBytes: number;
  fileName: string;
  downloadUrl: string;
  sha256: string;
  md5: string;
  minRequirements: {
    os: string;
    cpu: string;
    ram: string;
    disk: string;
    optional: string[];
  };
  features: string[];
}

export interface ArchitectureComponent {
  id: string;
  name: string;
  type: 'client' | 'gateway' | 'backend' | 'node' | 'compute';
  description: string;
  tech: string[];
  details: string;
  status: 'active' | 'standby' | 'disposable';
}

export interface IntentSimStep {
  phase: string;
  status: 'pending' | 'running' | 'completed';
  detail: string;
  timestamp: string;
  log?: string;
}
