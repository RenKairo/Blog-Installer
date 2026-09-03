import { BlogPost, InstallerInfo } from '../types';

export const OFFICIAL_INSTALLER: InstallerInfo = {
  version: '1.0.0 (v0.0 Release Candidate)',
  buildDate: 'September 2026',
  fileSize: '122.25 MB',
  fileSizeBytes: 122252814,
  fileName: 'RenKairo.IDE.Setup.1.0.0.exe',
  downloadUrl: 'https://github.com/RenKairo/Renkairo-ui/releases/download/v1.0.0/RenKairo.IDE.Setup.1.0.0.exe',
  sha256: '9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e',
  md5: 'e10adc3949ba59abbe56e057f20f883e',
  minRequirements: {
    os: 'Windows 10 / 11 (64-bit), macOS 12+, Ubuntu 22.04 LTS',
    cpu: 'Intel Core i5 (4th Gen+) or AMD Ryzen 5',
    ram: '4 GB (8 GB Recommended for local container streaming)',
    disk: '500 MB free space for IDE core + 2 GB for Docker runtime buffers',
    optional: [
      'Docker Desktop 4.25+ (for local containerized execution)',
      'OpenSSH Client / Server (for bare-metal node federation)',
      'Python 3.11+ (for local FastAPI compute agent node hosting)'
    ]
  },
  features: [
    'Electron 44 + Monaco Code Editor with multi-cursor syntax parsing',
    'XTerm.js live PTY terminal multiplexer with WebSocket streaming',
    'AI Natural Language Intent Orchestration Engine',
    'PeerJS WebRTC zero-latency screen share & live code pairing',
    'Real-time CPU/GPU/RAM Telemetry via FastAPI + Spring Boot 3 backend',
    'Colab / AWS disposable GPU integration & SSH node joiner'
  ]
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Introducing RenKairo IDE',
    subtitle: 'A next-gen cloud IDE built for modern developers and AI workflows.',
    slug: 'introducing-renkairo-ide',
    author: {
      name: 'Mahammad Azhar',
      role: 'Lead Architect & Core Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    date: 'May 12, 2025',
    readTime: '6 min read',
    category: 'RENKAIRO',
    tags: ['Cloud IDE', 'AI Workflows', 'Spring Boot 3', 'FastAPI', 'Monaco Editor'],
    summary: 'A next-gen cloud IDE built for modern developers and AI workflows. Seamlessly combine local Docker, bare-metal SSH nodes, and disposable cloud GPUs.',
    codeSnippet: {
      language: 'java',
      filename: 'OrchestrationPipelineService.java',
      code: `@Service
@Slf4j
public class OrchestrationPipelineService {

    private final IntentParserEngine intentParser;
    private final ComputeScheduler computeScheduler;

    public ExecutionPlan processUserIntent(String prompt, UserContext context) {
        ParsedIntent intent = intentParser.parse(prompt);
        DirectedAcyclicGraph<StepNode, Edge> dag = computeScheduler.buildExecutionDAG(intent);
        return new ExecutionPlan(dag.getId(), Status.IN_PROGRESS);
    }
}`
    },
    content: `
### The Cloud Orchestration Paradox

Modern software infrastructure has become deeply fragmented. Developers find themselves juggling Cloudflare Workers, AWS EC2 instances, Docker Desktop containers, Google Colab notebooks, and private home-lab servers.

**RenKairo** was engineered to solve this exact problem by introducing an **Intent-Driven Cloud Mesh**. Instead of manually configuring YAML files and Terraform state scripts, developers describe their execution goal in plain language.
`
  },
  {
    id: 'post-2',
    title: 'Install RenKairo in Minutes',
    subtitle: 'Step-by-step guide to install RenKairo on your local machine.',
    slug: 'install-renkairo-in-minutes',
    author: {
      name: 'Mahammad Azhar',
      role: 'Lead Architect & Core Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    date: 'May 10, 2025',
    readTime: '4 min read',
    category: 'INSTALL',
    tags: ['Setup', 'Installer', 'Windows', 'Electron 44', 'CLI'],
    summary: 'Step-by-step guide to install RenKairo on your local machine. Download the official standalone setup executable for instant 64-bit deployment.',
    codeSnippet: {
      language: 'bash',
      filename: 'install-cli.cmd',
      code: `# Download and run silent installer:
.\\RenKairo-IDE-Setup-1.0.0.exe /S

# Check installer hash verification:
Get-FileHash ".\\RenKairo IDE Setup 1.0.0.exe" -Algorithm SHA256`
    },
    content: `
### Instant Standalone Installation

Installing the **RenKairo Desktop IDE** (\`renkairo/Rekairo-ui\`) requires zero complex setup. Download the 122 MB executable binary directly from this repository and run the setup wizard.
`
  },
  {
    id: 'post-3',
    title: 'Hosting RenKairo on the Cloud',
    subtitle: 'Best practices for deploying RenKairo securely and scalably.',
    slug: 'hosting-renkairo-on-the-cloud',
    author: {
      name: 'Mahammad Azhar',
      role: 'Lead Architect & Core Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    date: 'May 8, 2025',
    readTime: '7 min read',
    category: 'HOSTING',
    tags: ['Cloud', 'Docker', 'KVM', 'Bare-Metal', 'Spring Boot 3'],
    summary: 'Best practices for deploying RenKairo securely and scalably. Learn how to federate bare-metal hardware and remote VPS nodes into a single cluster.',
    codeSnippet: {
      language: 'bash',
      filename: 'node-join.sh',
      code: `curl -sSL https://renkairo.io/install-node.sh | bash -s -- \\
  --master-ip="192.168.1.100" \\
  --node-name="gpu-workstation-01" \\
  --auth-token="rk_live_98a7b6c5d4e3f2a1"`
    },
    content: `
### Secure Self-Hosted Mesh Architecture

RenKairo allows developers to federate idle PCs, bare-metal Linux servers, and cloud VPS targets over secure SSH reverse tunnels with zero agent bloat.
`
  },
  {
    id: 'post-4',
    title: 'The RenKairo Startup Story',
    subtitle: 'How RenKairo started and what drives us to build for developers.',
    slug: 'the-renkairo-startup-story',
    author: {
      name: 'Mahammad Azhar',
      role: 'Lead Architect & Core Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    date: 'May 5, 2025',
    readTime: '5 min read',
    category: 'STARTUP',
    tags: ['Vision', 'Story', 'AI Engineering', 'Developer Tools'],
    summary: 'How RenKairo started and what drives us to build for developers. Our journey from fragmented cloud dashboards to a unified natural language developer canvas.',
    codeSnippet: {
      language: 'typescript',
      filename: 'vision.ts',
      code: `export const RENKAIRO_VISION = {
  mission: "Eliminate cloud configuration friction through natural language intent",
  architecture: "Spring Boot 3 + FastAPI + Electron 44 + Monaco Code Editor"
};`
    },
    content: `
### Our Origin & Vision

RenKairo was born out of frustration with fragmented cloud tools. We envisioned a single developer space where natural language intent seamlessly bridges code editing, container execution, and multi-cloud scheduling.
`
  }
];
