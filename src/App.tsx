import { useState } from 'react'
import { AgentCard } from '@/components/AgentCard'
import agents from '@/agents'

const categories = ['All', ...Array.from(new Set(agents.map(a => a.category)))]

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? agents : agents.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <header className="mb-10 text-center">
          <h1 className="text-xl font-semibold tracking-tight">RPA Agentic Hub</h1>
          <p className="text-sm text-muted-foreground mt-1">
            A collection of AI agents. Click any card to open.
          </p>
        </header>

        <hr className="border-border mb-6" />

        {categories.length > 2 && (
          <div className="flex gap-2 flex-wrap mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1 rounded border transition-colors ${
                  activeCategory === cat
                    ? 'border-foreground text-foreground'
                    : 'border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-16">No agents found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
