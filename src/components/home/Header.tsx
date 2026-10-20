import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { ArrowRight, Search } from 'lucide-react'
import { GET_BUDGIE_URL, LATEST_BUDGIE_VERSION, LATEST_RELEASE_URL } from '../../constants'

// The navbar owns the DocSearch modal, so this opens the same search as the navbar and Ctrl+K
const openSearch = () => {
  document.querySelector<HTMLButtonElement>('.DocSearch-Button')?.click()
}

const buttonClassName =
  'inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg px-6 font-inter font-medium text-base no-underline transition-colors hover:no-underline'

export const Header = () => {
  return (
    <div className="w-full py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h1 className="m-0 mb-6 font-heading font-semibold text-4xl text-strong leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <Translate id="homepage.header.welcome" description="The welcome text for the Homepage header">
              The place to learn and build with Budgie Desktop.
            </Translate>
          </h1>
          <p className="m-0 mb-8 font-lora text-lg text-subtle italic leading-relaxed md:text-xl">
            <Translate
              description="The text below the Homepage header"
              id="homepage.header.tagline"
              values={{ version: LATEST_BUDGIE_VERSION }}
            >
              {
                'Documentation for using, testing, building, and contributing to Budgie Desktop. Covering Budgie {version} today, with Budgie 11 on the way.'
              }
            </Translate>
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              className={`${buttonClassName} bg-primary font-heading font-semibold text-on-accent hover:bg-primary/90 hover:text-on-accent`}
              to={GET_BUDGIE_URL}
            >
              <Translate id="get.budgie" description="Get Budgie">
                Get Budgie
              </Translate>
              <ArrowRight aria-hidden size={20} />
            </Link>
            <Link
              className="inline-flex items-center gap-1 font-inter font-medium text-strong no-underline hover:text-primary hover:no-underline"
              to={LATEST_RELEASE_URL}
            >
              <Translate
                description="Link to the latest release announcement"
                id="homepage.header.whatsNew"
                values={{ version: LATEST_BUDGIE_VERSION }}
              >
                {"What's new in {version}"}
              </Translate>
              <ArrowRight aria-hidden size={16} />
            </Link>
          </div>
        </div>
        <img
          alt="Budgie Desktop 10.10.3 with Budgie Control Center, Budgie Desktop Settings, the Budgie Menu, and Raven open"
          className="block h-auto w-full rounded-xl"
          height={1440}
          src={useBaseUrl('/img/budgie-10-10-3.webp')}
          width={2560}
        />
        <button
          className="mt-8 flex h-16 w-full cursor-pointer items-center gap-4 rounded-xl border border-border border-solid bg-background px-6 text-left font-inter text-lg text-subtle transition-colors hover:border-primary md:h-[4.5rem]"
          onClick={openSearch}
          type="button"
        >
          <Search aria-hidden className="shrink-0 text-strong" size={24} />
          <Translate id="homepage.header.search" description="The search button in the Homepage header">
            Search the docs
          </Translate>
        </button>
      </div>
    </div>
  )
}
