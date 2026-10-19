import Link from '@docusaurus/Link'
import type { ReactNode } from 'react'

type CategoryProps = {
  icon: ReactNode
  text: ReactNode
  to: string
}

export const Category = ({ icon, text, to }: CategoryProps) => {
  return (
    <div className="Category">
      <div className="card shadow--lw p-12">
        <div className="flex flex-col items-center gap-4">
          {icon}
          <Link to={to}>
            <h3 className="font-bold">{text}</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
