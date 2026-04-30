import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AgentCard } from '@/components/AgentCard'
import { useTheme } from '@/hooks/useTheme'
import agents from '@/agents'

const categories = ['All', ...Array.from(new Set(agents.map(a => a.category)))]

export default function App() {
  const { theme, toggle } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? agents : agents.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">

        <header className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Agents Hub</h1>
            <p className="text-sm text-muted-foreground mt-1">
              A collection of AI agents. Click any card to open.
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
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

        <footer className="mt-16 text-center text-xs text-muted-foreground/50">
          Add entries to <code className="font-mono">src/agents.ts</code> to register new agents
        </footer>
      </div>
    </div>
  )
}
