import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIRA Architecture',
  description: 'Leadership Intelligence & Recruitment Assistant - An AI-powered executive recruiting agent architecture diagram.',
};

function SectionCard({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-background-elevated border border-border rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

function ToolBadge({ name, description }: { name: string; description: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <code className="text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded text-sm font-mono whitespace-nowrap">
        {name}
      </code>
      <span className="text-foreground-muted text-sm">{description}</span>
    </div>
  );
}

function StatBox({ label, value, sublabel }: { label: string; value: string; sublabel?: string }) {
  return (
    <div className="text-center p-4 bg-background border border-border rounded-lg">
      <div className="text-2xl font-semibold text-foreground">{value}</div>
      <div className="text-foreground-muted text-sm mt-1">{label}</div>
      {sublabel && <div className="text-foreground-subtle text-xs mt-1">{sublabel}</div>}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-4">
      <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-border-hover">
        <path d="M12 0V32M12 32L4 24M12 32L20 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function LiraArchitecturePage() {
  return (
    <main id="main-content" className="pt-24 pb-16">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#00ff88] text-xs font-semibold uppercase tracking-widest">
              Architecture Diagram
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
              LIRA
            </h1>
            <p className="mt-2 text-xl text-foreground-muted">
              <span className="text-foreground">L</span>eadership{' '}
              <span className="text-foreground">I</span>ntelligence &{' '}
              <span className="text-foreground">R</span>ecruitment{' '}
              <span className="text-foreground">A</span>ssistant
            </p>
            <p className="mt-4 text-foreground-subtle max-w-2xl mx-auto">
              An AI-powered executive recruiting agent built on DeepAgents framework with LangChain.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatBox label="Tools Available" value="12" sublabel="7 file + 4 external + 1 subagent" />
            <StatBox label="System Prompt" value="1,286" sublabel="lines of instructions" />
            <StatBox label="Leadership Traits" value="15" sublabel="across 4 quotients" />
            <StatBox label="Storage Tiers" value="3" sublabel="SQL + Blob + NFS" />
          </div>
        </div>
      </section>

      {/* Frontend Interfaces */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-[#0a0a0a] px-6 py-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Frontend Interfaces</h2>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              {/* Email Interface */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ff8800]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#ff8800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-foreground font-semibold">Email</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground-subtle mt-1">•</span>
                    <span>Microsoft Graph Webhook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground-subtle mt-1">•</span>
                    <span>Real-time notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground-subtle mt-1">•</span>
                    <span>Azure Functions backend</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">Features</p>
                  <div className="flex flex-wrap gap-2">
                    {['Email-to-chat routing', 'Auto-reply', 'Attachment extraction', 'Thread continuity'].map((f) => (
                      <span key={f} className="text-xs bg-background px-2 py-1 rounded text-foreground-muted border border-border">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionCard>

              {/* Web UI Interface */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#00ff88]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-foreground font-semibold">Web UI (Chat)</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground-subtle mt-1">•</span>
                    <span>Next.js 15 App Router</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground-subtle mt-1">•</span>
                    <span>Real-time streaming (WIP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground-subtle mt-1">•</span>
                    <span>File upload support</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">Data Access</p>
                  <div className="flex flex-wrap gap-2">
                    {['/candidates/', '/positions/', '/templates/', 'Document previews'].map((f) => (
                      <span key={f} className="text-xs bg-background px-2 py-1 rounded text-foreground-muted border border-border font-mono">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>

      <FlowArrow />

      {/* LIRA AI Agent Core */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-[#00ff88]/30 rounded-xl overflow-hidden bg-gradient-to-b from-[#00ff88]/5 to-transparent">
            <div className="bg-[#0a0a0a] px-6 py-4 border-b border-[#00ff88]/30">
              <h2 className="text-lg font-semibold text-foreground">LIRA AI Agent (Core)</h2>
            </div>
            <div className="p-6">
              {/* Framework + Model */}
              <div className="text-center mb-8">
                <div className="inline-block bg-background-elevated border border-border rounded-lg px-6 py-4">
                  <p className="text-foreground-subtle text-sm mb-2">DeepAgents Framework + LangChain</p>
                  <div className="bg-gradient-to-r from-[#00ff88]/20 via-[#00ff88]/10 to-[#00ff88]/20 rounded-lg px-8 py-4 border border-[#00ff88]/20">
                    <p className="text-foreground font-semibold text-lg">Claude Opus 4.5</p>
                    <p className="text-foreground-subtle text-sm">(Anthropic)</p>
                    <p className="text-foreground-muted text-xs mt-2">Primary reasoning & tool execution</p>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* File Operations */}
                <SectionCard className="border-[#00ff88]/20">
                  <h4 className="text-foreground font-semibold mb-1">Atomic File Operations</h4>
                  <p className="text-foreground-subtle text-xs mb-4">7 tools from DeepAgents</p>
                  <div className="space-y-1 divide-y divide-border">
                    <ToolBadge name="ls" description="List directory contents" />
                    <ToolBadge name="read_file" description="Read file with line numbers" />
                    <ToolBadge name="write_file" description="Create new file" />
                    <ToolBadge name="edit_file" description="Modify via string replacement" />
                    <ToolBadge name="glob" description="Find files by pattern" />
                    <ToolBadge name="grep" description="Search contents with regex" />
                    <ToolBadge name="write_todos" description="Track tasks & operations" />
                  </div>
                </SectionCard>

                {/* External Tools */}
                <SectionCard className="border-[#ff8800]/20">
                  <h4 className="text-foreground font-semibold mb-1">External Tools</h4>
                  <p className="text-foreground-subtle text-xs mb-4">4 custom integrations</p>
                  <div className="space-y-1 divide-y divide-border">
                    <ToolBadge name="web_search" description="Search web via Tavily API" />
                    <ToolBadge name="send_email" description="Send email from LIRA mailbox" />
                    <ToolBadge name="search_contacts" description="Search M365 directory" />
                    <ToolBadge name="copy_file" description="Copy .md files to NFS (0 tokens)" />
                  </div>
                </SectionCard>

                {/* Subagent */}
                <SectionCard className="border-purple-500/20">
                  <h4 className="text-foreground font-semibold mb-1">Subagent Capability</h4>
                  <p className="text-foreground-subtle text-xs mb-4">1 tool for complex tasks</p>
                  <div className="space-y-1">
                    <ToolBadge name="task" description="Spawn subagent for complex multi-candidate tasks with full tool access" />
                  </div>
                  <div className="mt-4 p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
                    <p className="text-foreground-muted text-xs">
                      Detailed prompt with paths, full context inheritance, parallel execution support
                    </p>
                  </div>
                </SectionCard>
              </div>

              {/* System Prompt */}
              <div className="mt-8">
                <SectionCard>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-foreground font-semibold">Comprehensive System Prompt</h4>
                      <p className="text-foreground-subtle text-sm">1,286 lines of detailed instructions</p>
                    </div>
                    <code className="text-foreground-muted text-xs bg-background px-3 py-1 rounded border border-border">
                      lira-base-prompt.md
                    </code>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-3">Prompt Contents</p>
                      <ul className="space-y-1 text-sm text-foreground-muted">
                        {[
                          'Role: Executive recruiting AI',
                          'File system architecture',
                          'Tool usage guidelines',
                          'Candidate workflow',
                          'Position workflow',
                          'Screening methodology',
                          'Scorecard evaluation framework',
                          'Leadership traits assessment',
                          'Interview preparation guidelines'
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="text-[#00ff88]">├──</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-3">Templates (NFS /templates/)</p>
                      <ul className="space-y-1 text-sm font-mono text-foreground-muted">
                        {[
                          'candidate_dossier_template.md',
                          'candidates_metadata.md',
                          'positions_metadata.md',
                          'scorecard_evaluation_guide.md',
                          'interview_pack_template.md'
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="text-[#ff8800]">├──</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">Context Injection</p>
                        <div className="flex flex-wrap gap-2">
                          {['userId', 'userEmail', 'chatId', 'candidateId', 'positionId', 'emailMetadata'].map((c) => (
                            <code key={c} className="text-xs bg-background px-2 py-1 rounded border border-border text-foreground-muted">
                              {c}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FlowArrow />

      {/* Backend Storage */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-[#0a0a0a] px-6 py-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Backend Storage</h2>
            </div>
            <div className="p-6 grid lg:grid-cols-4 gap-6">
              {/* SQL Database */}
              <SectionCard>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-sm">SQL Database</h4>
                    <p className="text-foreground-subtle text-xs">PostgreSQL</p>
                  </div>
                </div>
                <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">User/Chat Data</p>
                <ul className="space-y-1 text-xs text-foreground-muted font-mono">
                  {['User', 'Chat', 'Message_v2', 'Document', 'Vote_v2', 'EmailThread'].map((t) => (
                    <li key={t}>• {t}</li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-foreground-muted">Indexed queries, Transactions, Drizzle ORM</p>
                </div>
              </SectionCard>

              {/* Blob Storage */}
              <SectionCard>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded bg-[#ff8800]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#ff8800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-sm">Azure Blob Storage</h4>
                    <p className="text-foreground-subtle text-xs">/uploads/</p>
                  </div>
                </div>
                <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">Binary Files</p>
                <ul className="space-y-1 text-xs text-foreground-muted">
                  <li>• PDFs, DOCx, PPTx</li>
                  <li>• Images, XLSx</li>
                  <li>• Shareable URLs</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-foreground-muted">Read: 150-200ms</p>
                  <p className="text-xs text-foreground-muted">Write: 200-300ms</p>
                </div>
                <div className="mt-3 p-2 bg-[#ff8800]/5 rounded border border-[#ff8800]/20">
                  <p className="text-xs text-foreground-subtle font-semibold">Doc Extraction</p>
                  <p className="text-xs text-foreground-muted">Azure CU + Gemini visual</p>
                </div>
              </SectionCard>

              {/* NFS Storage */}
              <SectionCard className="border-[#00ff88]/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded bg-[#00ff88]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#00ff88]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-sm">Azure Files NFS</h4>
                    <p className="text-foreground-subtle text-xs">VNet secured</p>
                  </div>
                </div>
                <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">Structure</p>
                <ul className="space-y-1 text-xs text-foreground-muted font-mono">
                  <li className="text-[#00ff88]">/candidates/</li>
                  <li className="pl-3">├── dossier.md</li>
                  <li className="pl-3">├── metadata.md</li>
                  <li className="pl-3">├── cv/, scorecard/</li>
                  <li className="text-[#00ff88] mt-2">/positions/</li>
                  <li className="pl-3">├── hiring_spec.md</li>
                  <li className="pl-3">├── scorecard.md</li>
                  <li className="text-[#ff8800] mt-2">/templates/</li>
                  <li className="pl-3 text-foreground-subtle">(read-only)</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-[#00ff88] font-semibold">10-50x faster</p>
                  <p className="text-xs text-foreground-muted">Read: 5-10ms • Write: 10-20ms</p>
                </div>
              </SectionCard>

              {/* State Backend */}
              <SectionCard className="border-dashed">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded bg-foreground-subtle/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-foreground-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-sm">StateBackend</h4>
                    <p className="text-foreground-subtle text-xs">In-Memory</p>
                  </div>
                </div>
                <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-2">Ephemeral Scratch</p>
                <ul className="space-y-1 text-xs text-foreground-muted font-mono">
                  <li>• /scratch.md</li>
                  <li>• /notes.txt</li>
                  <li>• /workspace/*</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-foreground-subtle">Lost on turn end</p>
                  <p className="text-xs text-foreground-muted">FileInjection handles persistence</p>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </section>

      <FlowArrow />

      {/* LIRA Outputs */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-[#0a0a0a] px-6 py-4 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">LIRA Outputs</h2>
              <p className="text-foreground-subtle text-sm">Evaluation Deliverables</p>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              {/* Screening Fit */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Screening Fit</h4>
                    <p className="text-foreground-subtle text-xs">Requirements Match</p>
                  </div>
                </div>
                <p className="text-foreground-muted text-sm mb-4">
                  Compares candidate against Hiring Spec requirements:
                </p>
                <ul className="space-y-1 text-sm text-foreground-muted">
                  {['Experience requirements', 'Industry/Domain expertise', 'Functional skills', 'Scale/Scope experience', 'Education/Credentials'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-foreground-subtle">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle mb-2">Output: Match Strength</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded text-xs bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">STRONG</span>
                    <span className="px-2 py-1 rounded text-xs bg-[#ff8800]/10 text-[#ff8800] border border-[#ff8800]/20">MEDIUM</span>
                    <span className="px-2 py-1 rounded text-xs bg-[#ff4444]/10 text-[#ff4444] border border-[#ff4444]/20">LOW</span>
                  </div>
                </div>
              </SectionCard>

              {/* Scorecard Evaluation */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Scorecard Evaluation</h4>
                    <p className="text-foreground-subtle text-xs">Goal-by-Goal Analysis</p>
                  </div>
                </div>
                <p className="text-foreground-muted text-sm mb-4">
                  Evaluates candidate&apos;s ability to deliver on Scorecard goals:
                </p>
                <ul className="space-y-1 text-sm text-foreground-muted">
                  {['Revenue/Financial metrics', 'Pipeline & Efficiency', 'Team & Organization', 'Strategic & Operational'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-foreground-subtle">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle mb-2">Output: Degree of Match</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded text-xs bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20">HIGH</span>
                    <span className="px-2 py-1 rounded text-xs bg-[#ff8800]/10 text-[#ff8800] border border-[#ff8800]/20">MEDIUM</span>
                    <span className="px-2 py-1 rounded text-xs bg-[#ff4444]/10 text-[#ff4444] border border-[#ff4444]/20">LOW</span>
                  </div>
                </div>
              </SectionCard>

              {/* Leadership Traits */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Leadership Traits</h4>
                    <p className="text-foreground-subtle text-xs">15 Traits Assessment</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-[#00ff88] font-semibold mb-2">COGNITIVE (4)</p>
                    <ul className="space-y-0.5 text-xs text-foreground-muted">
                      <li>• Strategic altitude</li>
                      <li>• Data-driven orientation</li>
                      <li>• Intellectual curiosity</li>
                      <li>• Commercial acumen</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-[#ff8800] font-semibold mb-2">EMOTIONAL (4)</p>
                    <ul className="space-y-0.5 text-xs text-foreground-muted">
                      <li>• Self-awareness</li>
                      <li>• Transparent communication</li>
                      <li>• Attract & retain talent</li>
                      <li>• Circumstances around changes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 font-semibold mb-2">DRIVE (4)</p>
                    <ul className="space-y-0.5 text-xs text-foreground-muted">
                      <li>• Strong drive to excel</li>
                      <li>• Decisiveness w/ accountability</li>
                      <li>• Numbers/target-driven</li>
                      <li>• Risk-taking appetite</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-purple-400 font-semibold mb-2">AGILITY (3)</p>
                    <ul className="space-y-0.5 text-xs text-foreground-muted">
                      <li>• Growth mindset</li>
                      <li>• Succeeds across contexts</li>
                      <li>• Makes transitions quickly</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle">Output: Conviction Level + Supporting/Refuting evidence</p>
                </div>
              </SectionCard>

              {/* Interview Questions */}
              <SectionCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ff8800]/10 flex items-center justify-center text-[#ff8800] font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold">Interview Questions Bank</h4>
                    <p className="text-foreground-subtle text-xs">Targeted Gap Closure</p>
                  </div>
                </div>
                <p className="text-foreground-muted text-sm mb-4">
                  Generated from LOW and MEDIUM conviction areas:
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-1">Question Categories</p>
                    <ul className="space-y-0.5 text-xs text-foreground-muted">
                      <li>• Scorecard Gap Questions</li>
                      <li>• Leadership Trait Questions</li>
                      <li>• Calibration Questions (3Ps)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-foreground-subtle uppercase tracking-wide mb-1">Features</p>
                    <ul className="space-y-0.5 text-xs text-foreground-muted">
                      <li>• Behavioral STAR format</li>
                      <li>• Prioritized by importance</li>
                      <li>• Time-allocated per interview</li>
                      <li>• Tracks which questions used</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-foreground-subtle">Interview Pack: Prior summary + Questions + Evaluation tables</p>
                </div>
              </SectionCard>
            </div>

            {/* Critical Note */}
            <div className="mx-6 mb-6 p-4 bg-[#ff8800]/5 border border-[#ff8800]/20 rounded-lg">
              <p className="text-sm text-center">
                <span className="text-[#ff8800] font-semibold">CRITICAL:</span>{' '}
                <span className="text-foreground-muted">
                  LIRA is a <span className="text-foreground">FACT-FINDER</span>, not a decision-maker.
                  Never provides hiring recommendations—presents evidence for evaluation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Summary */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-foreground text-center mb-8">Data Flow Summary</h2>
          <div className="bg-background-elevated border border-border rounded-lg p-8">
            <div className="flex flex-col items-center space-y-4">
              {/* Input */}
              <div className="bg-background border border-border rounded-lg px-6 py-3">
                <span className="text-foreground-muted">Email / Chat Input</span>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border-hover">
                <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Agent */}
              <div className="bg-gradient-to-r from-[#00ff88]/10 to-[#00ff88]/5 border border-[#00ff88]/30 rounded-lg px-8 py-4 text-center">
                <p className="text-foreground font-semibold">LIRA Agent</p>
                <p className="text-foreground-subtle text-sm">(12 Tools) • Claude Opus 4.5</p>
                <p className="text-foreground-muted text-xs mt-1">← System Prompt + Context</p>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border-hover">
                <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Storage */}
              <div className="flex gap-4 flex-wrap justify-center">
                <div className="bg-background border border-border rounded-lg px-4 py-2 text-center">
                  <p className="text-blue-400 text-sm font-medium">SQL</p>
                  <p className="text-foreground-subtle text-xs">(meta)</p>
                </div>
                <div className="bg-background border border-border rounded-lg px-4 py-2 text-center">
                  <p className="text-[#ff8800] text-sm font-medium">Blob</p>
                  <p className="text-foreground-subtle text-xs">(files)</p>
                </div>
                <div className="bg-background border border-[#00ff88]/30 rounded-lg px-4 py-2 text-center">
                  <p className="text-[#00ff88] text-sm font-medium">NFS</p>
                  <p className="text-foreground-subtle text-xs">(fast I/O)</p>
                </div>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-border-hover">
                <path d="M12 4V20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              {/* Output */}
              <div className="bg-background border border-border rounded-lg px-6 py-4 text-center">
                <p className="text-foreground font-medium mb-2">Evaluation Output</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="text-xs bg-background-elevated px-2 py-1 rounded text-foreground-muted border border-border">Screening Fit</span>
                  <span className="text-xs bg-background-elevated px-2 py-1 rounded text-foreground-muted border border-border">Scorecard</span>
                  <span className="text-xs bg-background-elevated px-2 py-1 rounded text-foreground-muted border border-border">Leadership</span>
                  <span className="text-xs bg-background-elevated px-2 py-1 rounded text-foreground-muted border border-border">Questions Bank</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
