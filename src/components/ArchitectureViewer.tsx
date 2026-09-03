import React, { useState } from 'react';
import { Layers, Server, Cpu, Shield, ArrowDown, Monitor, Box, Flame } from 'lucide-react';
import { ArchitectureComponent } from '../types';

const ARCHITECTURE_COMPONENTS: ArchitectureComponent[] = [
  {
    id: 'client-ide',
    name: 'RenKairo Desktop IDE (v1.0.0)',
    type: 'client',
    description: 'Electron 44 desktop container hosting React 19 UI, Monaco Code Editor, and xterm.js terminal stream.',
    tech: ['Electron 44', 'React 19', 'Monaco Editor', 'xterm.js', 'PeerJS WebRTC'],
    details: 'Exposes context-isolated IPC channels to interact with local file watcher, node-pty process manager, and native system telemetry.',
    status: 'active'
  },
  {
    id: 'gateway',
    name: 'RenKairo API Gateway & Auth Guard',
    type: 'gateway',
    description: 'Central security perimeter handling JWT validation, WebSocket session upgrades, and rate-limiting.',
    tech: ['Spring Cloud Gateway', 'JWT', 'OAuth2', 'WebSocket Handler'],
    details: 'Handles load balancing across backend microservices and sanitizes input prompts before passing to AI intent parser.',
    status: 'active'
  },
  {
    id: 'shiro-backend',
    name: 'Shiro Control Plane (Spring Boot 3.2)',
    type: 'backend',
    description: 'Core orchestration engine maintaining cluster state, user sessions, resource graphs, and workflow DAGs.',
    tech: ['Java 21', 'Spring Boot 3.2.3', 'Spring Data JPA', 'Prometheus Metrics'],
    details: 'Orchestrates container lifecycles, schedules bare-metal SSH provisioning, and manages disposable GPU tunnels.',
    status: 'active'
  },
  {
    id: 'fastapi-agents',
    name: 'FastAPI Node Compute Agents',
    type: 'node',
    description: 'Lightweight agent daemon deployed on private SSH machines and remote compute targets.',
    tech: ['Python 3.11', 'FastAPI', 'psutil', 'Docker SDK', 'PyTorch'],
    details: 'Pushes hardware metrics (CPU, VRAM, I/O) back to Shiro backend over TLS WebSockets every 1000ms.',
    status: 'active'
  },
  {
    id: 'docker-engine',
    name: 'Local Docker & Container Driver',
    type: 'compute',
    description: 'Direct integration with local Docker Daemon for fast microservice containerization.',
    tech: ['Docker Engine API', 'BuildKit', 'Overlay2 Storage'],
    details: 'Allows seamless container creation, stop/start primitives, and binary log streaming to xterm terminal UI.',
    status: 'active'
  },
  {
    id: 'colab-gpu-bridge',
    name: 'Disposable Cloud GPU Bridge (Colab / AWS)',
    type: 'compute',
    description: 'Zero-cost ephemeral GPU compute engine tapping into free T4/A100 instances.',
    tech: ['CUDA 12', 'PyTorch 2.4', 'gRPC Stream', 'S3 Checkpointer'],
    details: 'Automatically snapshots tensor weights before instance termination and fallback redirects execution to private GPU nodes.',
    status: 'disposable'
  }
];

export const ArchitectureViewer: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<ArchitectureComponent>(ARCHITECTURE_COMPONENTS[0]);

  return (
    <section className="py-16 lg:py-24 border-t border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-600 font-mono text-xs font-bold uppercase">
            <Layers className="w-4 h-4" />
            <span>Interactive Technical Topology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            RenKairo System <span className="text-red-600">Architecture Blueprint</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-medium">
            Click on any architectural component below to inspect its core responsibilities, technology stack, and runtime communication protocols.
          </p>
        </div>

        {/* Visual Diagram + Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Topology Map (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#12151e] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm theme-card">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span>SYSTEM LAYERS & COMPONENT FLOW</span>
              <span className="text-red-600 font-bold">SPRING BOOT 3 + FASTAPI + ELECTRON</span>
            </div>

            {/* Layer 1: Client */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 font-semibold tracking-wider">Layer 1: Client & User Interface</div>
              <button
                onClick={() => setSelectedComp(ARCHITECTURE_COMPONENTS[0])}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedComp.id === 'client-ide'
                    ? 'bg-red-50 dark:bg-red-950/40 border-red-600 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-[#0a0b0e] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-red-600/10 text-red-600">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold font-mono text-sm text-slate-900 dark:text-white">RenKairo Desktop IDE (Electron 44 + React 19)</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Monaco Editor • xterm.js PTY • PeerJS WebRTC</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-red-600 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/30 font-semibold">Active</span>
              </button>
            </div>

            <div className="flex justify-center text-slate-400 dark:text-slate-600">
              <ArrowDown className="w-5 h-5 animate-pulse" />
            </div>

            {/* Layer 2: API Gateway */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 font-semibold tracking-wider">Layer 2: API Gateway & Security</div>
              <button
                onClick={() => setSelectedComp(ARCHITECTURE_COMPONENTS[1])}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedComp.id === 'gateway'
                    ? 'bg-red-50 dark:bg-red-950/40 border-red-600 text-slate-900 dark:text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-[#0a0b0e] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-red-600/10 text-red-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold font-mono text-sm text-slate-900 dark:text-white">Spring Cloud API Gateway & Auth Guard</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">JWT Token Security • Rate Limiting • WebSocket Proxy</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-red-600 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/30 font-semibold">Active</span>
              </button>
            </div>

            <div className="flex justify-center text-slate-400 dark:text-slate-600">
              <ArrowDown className="w-5 h-5 animate-pulse" />
            </div>

            {/* Layer 3: Control Plane & Node Mesh */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 font-semibold tracking-wider">Layer 3: Orchestration & Compute Nodes</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedComp(ARCHITECTURE_COMPONENTS[2])}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedComp.id === 'shiro-backend'
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-600 text-slate-900 dark:text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-[#0a0b0e] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600">
                    <Server className="w-4 h-4" />
                    <span>Shiro Backend</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Spring Boot 3.2 Orchestrator</div>
                </button>

                <button
                  onClick={() => setSelectedComp(ARCHITECTURE_COMPONENTS[3])}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedComp.id === 'fastapi-agents'
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-600 text-slate-900 dark:text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-[#0a0b0e] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600">
                    <Cpu className="w-4 h-4" />
                    <span>FastAPI Agents</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">SSH Hardware Telemetry</div>
                </button>
              </div>
            </div>

            <div className="flex justify-center text-slate-400 dark:text-slate-600">
              <ArrowDown className="w-5 h-5 animate-pulse" />
            </div>

            {/* Layer 4: Compute Engines */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 font-semibold tracking-wider">Layer 4: Target Compute Execution Layer</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedComp(ARCHITECTURE_COMPONENTS[4])}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedComp.id === 'docker-engine'
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-600 text-slate-900 dark:text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-[#0a0b0e] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600">
                    <Box className="w-4 h-4" />
                    <span>Local Docker Engine</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Containerized Workloads</div>
                </button>

                <button
                  onClick={() => setSelectedComp(ARCHITECTURE_COMPONENTS[5])}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedComp.id === 'colab-gpu-bridge'
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-600 text-slate-900 dark:text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-[#0a0b0e] border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600">
                    <Flame className="w-4 h-4" />
                    <span>Disposable Colab GPUs</span>
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">Free T4/A100 Compute</div>
                </button>
              </div>
            </div>

          </div>

          {/* Component Deep Inspection Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#12151e] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm theme-card">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase font-semibold">Component Inspector</span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">{selectedComp.name}</h3>
              </div>
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-red-600/10 text-red-600 border border-red-600/30">
                {selectedComp.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <h4 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase mb-1 font-semibold">Description:</h4>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">{selectedComp.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase mb-2 font-semibold">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedComp.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#0a0b0e] border border-slate-200 dark:border-slate-800 text-xs font-mono text-red-600 dark:text-red-400 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase mb-1 font-semibold">Implementation Detail:</h4>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-mono leading-relaxed bg-slate-50 dark:bg-[#0a0b0e] p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  {selectedComp.details}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
