import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { Agent } from '@/agents'

const statusConfig = {
  live: { label: 'Live', className: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
  beta: { label: 'Beta', className: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
  wip: { label: 'WIP', className: 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20' },
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const status = statusConfig[agent.status]

  return (
    <a href={agent.url} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="h-full transition-colors hover:border-zinc-400 dark:hover:border-zinc-600 cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <span className="font-medium text-sm text-foreground">{agent.name}</span>
            <Badge variant="outline" className={`text-xs shrink-0 ${status.className}`}>
              {status.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <Badge variant="secondary" className="text-xs font-normal">{agent.category}</Badge>
            <ArrowUpRight
              className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
