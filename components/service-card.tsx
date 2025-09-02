import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  actionButton?: ReactNode
}

export function ServiceCard({ title, description, icon, actionButton }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-center">{description}</p>
      </CardContent>
      {actionButton && <CardFooter className="flex justify-center">{actionButton}</CardFooter>}
    </Card>
  )
}
