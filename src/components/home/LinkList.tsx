import Link from '@docusaurus/Link'
import { ChevronRight, type LucideIcon } from 'lucide-react'

export type LinkListItem = {
  title: string
  description: string
  to: string
  icon?: LucideIcon
}

type LinkListProps = {
  heading?: string
  items: LinkListItem[]
}

export const LinkList = ({ heading, items }: LinkListProps) => {
  return (
    <div className="flex flex-col">
      {heading && (
        <h3 className="m-0 mb-2 font-heading font-semibold text-subtle text-xs uppercase tracking-widest">{heading}</h3>
      )}
      <ul className="m-0 list-none border-0 border-border-subtle border-t border-solid p-0">
        {items.map(({ title, description, to, icon: Icon }) => (
          <li className="m-0 border-0 border-border-subtle border-b border-solid" key={to}>
            <Link
              className="group flex items-center justify-between gap-6 py-4 text-strong no-underline hover:text-strong hover:no-underline"
              to={to}
            >
              <span className="flex items-start gap-4">
                {Icon && (
                  <Icon
                    aria-hidden
                    className="mt-1 shrink-0 text-subtle transition-colors group-hover:text-primary"
                    size={22}
                  />
                )}
                <span className="flex flex-col gap-1">
                  <span className="font-inter font-medium text-lg transition-colors group-hover:text-primary">
                    {title}
                  </span>
                  <span className="font-inter text-subtle">{description}</span>
                </span>
              </span>
              <ChevronRight
                aria-hidden
                className="shrink-0 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-primary"
                size={20}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
