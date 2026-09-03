import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Loader2, Sparkles, Cpu, Zap } from 'lucide-react';
import { IntentSimStep } from '../types';

const SAMPLE_PROMPTS = [
  'Deploy Node.js microservice to local Docker and attach PostgreSQL 16',
  'Provision Colab T4 GPU node and execute PyTorch model training script',
  'Join private SSH node 192.168.1.50 and stream live CPU/VRAM telemetry',
  'Scale container cluster to 3 replicas and configure Nginx reverse proxy'
];

export const IntentSimulator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>(SAMPLE_PROMPTS[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [steps, setSteps] = useState<IntentSimStep[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setCompleted(false);
    setSteps([]);

    const timeline: { delay: number; step: IntentSimStep }[] = [
      {
        delay: 400,
        step: {
          phase: '1. Intent Tokenization',
          status: 'running',
          detail: 'Parsing natural language AST tokens via RenKairo LLM Engine...',
          timestamp: '00:00.12',
          log: `[AI-PARSER] Input prompt: "${prompt}" -> Extracted primitives: [ACTION: DEPLOY, RUNTIME: DOCKER_MESH, SIDECAR: POSTGRES]`
        }
      },
      {
        delay: 1100,
        step: {
          phase: '2. DAG Construction',
          status: 'running',
          detail: 'Building Directed Acyclic Graph execution plan in Spring Boot Shiro...',
          timestamp: '00:00.45',
          log: '[SCHEDULER] Generated 3 DAG execution nodes with dependency edge (Node 1 -> Node 2 -> Node 3).'
        }
      },
      {
        delay: 1800,
        step: {
          phase: '3. Node Security & SSH Handshake',
          status: 'running',
          detail: 'Verifying Ed25519 key signatures with FastAPI telemetry agent...',
          timestamp: '00:01.02',
          log: '[SECURITY] Handshake OK. Verified target node availability over WebSocket tunnel.'
        }
      },
      {
        delay: 2600,
        step: {
          phase: '4. Container Execution & PTY Stream',
          status: 'running',
          detail: 'Spinning Docker container & piping xterm.js PTY stdout stream...',
          timestamp: '00:01.88',
          log: '[CONTAINER] Container id=rk_c98f7a Started. Port 3000 mapped. Streaming logs to Desktop IDE...'
        }
      }
    ];

    timeline.forEach(({ delay, step }, idx) => {
      setTimeout(() => {
        setSteps(prev => {
          const updated = prev.map(s => ({ ...s, status: 'completed' as const }));
          return [...updated, step];
        });

        if (idx === timeline.length - 1) {
          setTimeout(() => {
            setSteps(prev => prev.map(s => ({ ...s, status: 'completed' as const })));
            setIsSimulating(false);
            setCompleted(true);
          }, 600);
        }
      }, delay);
    });
  };

  return (
    <section className="py-16 lg:py-24 border-t border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-600 font-mono text-xs font-bold uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Interactive AI Intent Execution Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Test the RenKairo <span className="text-red-600">Intent Simulator</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Type any plain English cloud deployment command below to observe how RenKairo tokenizes intent, generates DAG steps, and executes workloads across nodes in real time.
          </p>
        </div>

        {/* Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#12151e] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-semibold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-600" />
                Natural Language Intent Prompt:
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isSimulating}
                rows={3}
                className="w-full bg-slate-50 dark:bg-[#0a0b0e] text-slate-900 dark:text-slate-100 font-mono text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 focus:border-red-600 outline-none resize-none transition-all"
                placeholder="e.g. Deploy my Node app to Docker..."
              />
            </div>

            {/* Quick Preset Prompts */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase font-semibold">Preset Examples:</span>
              <div className="space-y-1.5">
                {SAMPLE_PROMPTS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPrompt(p)}
                    disabled={isSimulating}
                    className="w-full text-left text-xs font-mono px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#0a0b0e] hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 border border-slate-200 dark:border-slate-800 transition-all truncate font-medium"
                  >
                    "{p}"
                  </button>
                ))}
              </div>
            </div>

            {/* Simulate Button */}
            <button
              onClick={runSimulation}
              disabled={isSimulating || !prompt.trim()}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl text-base shadow-md transition-all disabled:opacity-50"
            >
              {isSimulating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Simulating Orchestration DAG...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  <span>Simulate Orchestration</span>
                </>
              )}
            </button>

          </div>

          {/* Execution Trace Terminal (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#12151e] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 font-mono text-xs text-slate-600 dark:text-slate-400 font-semibold">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-red-600" />
                <span>RENKAIRO INTENT ORCHESTRATOR LOG STREAM</span>
              </div>
              {completed && (
                <span className="text-red-600 bg-red-600/10 px-2 py-0.5 rounded border border-red-600/30 font-bold">
                  DAG EXECUTED SUCCESSFULLY
                </span>
              )}
            </div>

            {/* Output Steps */}
            <div className="bg-slate-50 dark:bg-[#0a0b0e] rounded-xl p-4 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-4 min-h-[300px]">
              {steps.length === 0 && !isSimulating && (
                <div className="flex flex-col items-center justify-center py-16 text-slate-500 dark:text-slate-400 space-y-2">
                  <Terminal className="w-8 h-8 stroke-[1.5]" />
                  <span className="font-medium">Click "Simulate Orchestration" to start execution trace.</span>
                </div>
              )}

              {steps.map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-slate-900 dark:text-slate-100 font-bold">
                    <span className="flex items-center gap-2 text-red-600 dark:text-red-500">
                      {step.status === 'completed' ? (
                        <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-500" />
                      ) : (
                        <Loader2 className="w-4 h-4 text-red-600 dark:text-red-500 animate-spin" />
                      )}
                      {step.phase}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{step.timestamp}</span>
                  </div>
                  <div className="text-slate-800 dark:text-slate-200 pl-6">{step.detail}</div>
                  {step.log && (
                    <div className="text-[11px] text-slate-800 dark:text-slate-300 pl-6 bg-slate-100 dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                      {step.log}
                    </div>
                  )}
                </div>
              ))}

              {completed && (
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-red-600 font-bold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  All DAG sub-tasks executed cleanly across cluster nodes!
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
