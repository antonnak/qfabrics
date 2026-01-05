"use client";

const techGroups = [
  {
    label: 'LLMs',
    items: [
      { name: 'OpenAI', logo: '/logos/openai.svg' },
      { name: 'Claude', logo: '/logos/anthropic.svg' },
      { name: 'Gemini', logo: '/logos/gemini.svg' },
      { name: 'Grok', logo: '/logos/grok.svg' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'LangChain', logo: '/logos/langchain.svg' },
      { name: 'CrewAI', logo: '/logos/crewai.svg' },
      { name: 'LlamaIndex', logo: '/logos/llamaindex.svg' },
    ],
  },
  {
    label: 'Cloud',
    items: [
      { name: 'AWS', logo: '/logos/aws.svg' },
      { name: 'Azure', logo: '/logos/azure.svg' },
      { name: 'GCP', logo: '/logos/gcp.svg' },
    ],
  },
  {
    label: 'Vector DB',
    items: [
      { name: 'Pinecone', logo: '/logos/pinecone.svg' },
      { name: 'ChromaDB', logo: '/logos/chroma.svg' },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-background border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-foreground-subtle text-xs font-medium uppercase tracking-widest mb-12">
          Built with industry-leading technology
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techGroups.map((group) => (
            <div key={group.label} className="text-center">
              <p className="text-foreground-subtle text-xs font-medium uppercase tracking-wider mb-4">
                {group.label}
              </p>
              <div className="flex flex-col items-center gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-5 h-5 opacity-70"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Keep old export for backwards compatibility
export const ClientLogos = TechStack;
