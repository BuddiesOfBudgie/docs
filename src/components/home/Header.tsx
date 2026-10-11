import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-muted px-[10vw] py-[5vh] text-muted-foreground">
      <h1 className="m-0 max-w-[30ch] text-center font-bold font-heading text-[3.2em] leading-[1.4] tracking-[-0.01562em]">
        <Translate id="homepage.header.welcome" description="The welcome text for the Homepage header">
          The place to learn and build with Budgie Desktop.
        </Translate>
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Link
          className="inline-flex h-[42px] items-center justify-center whitespace-nowrap rounded-full bg-primary px-[22px] font-heading font-medium text-[0.9375rem] text-primary-foreground uppercase tracking-[0.02857em] no-underline transition-colors hover:bg-primary/90"
          to="https://buddiesofbudgie.org/get-budgie"
        >
          <Translate id="get.budgie" description="Get Budgie">
            Get Budgie
          </Translate>
        </Link>
      </div>
      <div className="mx-auto w-full max-w-(--breakpoint-fullhd) px-4 sm:px-6">
        <div className="w-full rounded-2xl bg-dark p-4">
          <div className="relative aspect-video w-full rounded-lg">
            <img
              alt="Budgie Desktop with Budgie Desktop Settings, the Budgie Menu, Budgie Screenshot, and Raven open"
              className="object-contain"
              src={useBaseUrl('/img/Budgie.webp')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
