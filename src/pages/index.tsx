import '@fontsource-variable/inter'
import '@fontsource-variable/lora/wght-italic.css'
import '@fontsource/poppins/600.css'
import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import Layout from '@theme/Layout'
import { ChevronRight, Heart, MessageCircle } from 'lucide-react'
import { Header } from '../components/home/Header'
import { LinkList, type LinkListItem } from '../components/home/LinkList'
import { BUDGIE_11_BLOG_URL, FORGE_URL, LATEST_BUDGIE_VERSION } from '../constants'

const usingLinks: LinkListItem[] = [
  {
    title: translate({ id: 'homepage.using.shortcuts.title', message: 'Keyboard shortcuts' }),
    description: translate({
      id: 'homepage.using.shortcuts.description',
      message: 'Default shortcuts for Budgie, windows, and workspaces.',
    }),
    to: '/10.10/user/keyboard-shortcuts',
  },
  {
    title: translate({ id: 'homepage.using.testing.title', message: 'Testing Budgie' }),
    description: translate({
      id: 'homepage.using.testing.description',
      message: "Try new releases and restart Budgie's components.",
    }),
    to: '/10.10/user/testing-budgie',
  },
  {
    title: translate({ id: 'homepage.using.all.title', message: 'All user documentation' }),
    description: translate({
      id: 'homepage.using.all.description',
      message: 'Everything in the Budgie 10.10 user section.',
    }),
    to: '/10.10/user/intro',
  },
]

const reportingLinks: LinkListItem[] = [
  {
    title: translate({ id: 'homepage.reporting.github.title', message: 'GitHub' }),
    description: translate({
      id: 'homepage.reporting.github.description',
      message: 'Budgie Desktop 10.10 and its components, such as Budgie Control Center.',
    }),
    to: '/10.10/user/reporting-issues#github-budgie-desktop-1010x',
  },
  {
    title: translate({ id: 'homepage.reporting.forge.title', message: 'Forge' }),
    description: translate({
      id: 'homepage.reporting.forge.description',
      message: 'Budgie 11, and components shared with 10.10 such as budgie-desktop-services.',
    }),
    to: '/10.10/user/reporting-issues#forge-budgie-11-and-shared-components',
  },
  {
    title: translate({ id: 'homepage.reporting.upstream.title', message: 'Upstream' }),
    description: translate({
      id: 'homepage.reporting.upstream.description',
      message: 'Screen lockers such as gtklock and swaylock. How Budgie integrates with them comes to us.',
    }),
    to: '/10.10/user/reporting-issues#screen-lockers',
  },
]

const developingLinks: LinkListItem[] = [
  {
    title: translate({ id: 'homepage.developing.building.title', message: 'Building Budgie Desktop' }),
    description: translate({
      id: 'homepage.developing.building.description',
      message: 'Build from source and test changes without installing them.',
    }),
    to: '/10.10/developer/workflow/building-budgie-desktop',
  },
  {
    title: translate({ id: 'homepage.developing.docs.title', message: 'Writing documentation' }),
    description: translate({
      id: 'homepage.developing.docs.description',
      message: 'Improve these docs or add a new page.',
    }),
    to: '/10.10/developer/meta/writing-documentation',
  },
  {
    title: translate({ id: 'homepage.developing.all.title', message: 'All developer documentation' }),
    description: translate({
      id: 'homepage.developing.all.description',
      message: 'Everything in the Budgie 10.10 developer section.',
    }),
    to: '/10.10/developer/intro',
  },
]

const bannerButtonClassName =
  'inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2.5 font-inter font-medium text-white no-underline transition-colors hover:bg-white/30 hover:text-white hover:no-underline'

const Home = () => {
  return (
    <Layout
      description={translate({
        id: 'homepage.description',
        message: 'Documentation for using, testing, building, and contributing to Budgie Desktop.',
      })}
    >
      <main className="font-inter">
        <Header />

        <section className="w-full border-0 border-border-subtle border-t border-solid py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
            <p className="m-0 mb-4 font-heading font-semibold text-primary text-xs uppercase tracking-widest md:text-sm">
              <Translate id="homepage.stable.label" description="Label above the stable release section">
                Budgie 10.10 · Stable
              </Translate>
            </p>
            <h2 className="m-0 mb-6 font-heading font-semibold text-3xl text-strong leading-tight md:text-4xl">
              <Translate id="homepage.stable.title" description="Title of the stable release section">
                Documentation for the current release
              </Translate>
            </h2>
            <p className="m-0 mb-12 max-w-3xl text-base text-subtle leading-relaxed md:text-lg">
              <Translate
                description="Description of the stable release section"
                id="homepage.stable.description"
                values={{ version: LATEST_BUDGIE_VERSION }}
              >
                {
                  'Budgie 10.10 is Wayland-only and runs on the labwc compositor. Everything here applies to the latest release, Budgie {version}.'
                }
              </Translate>
            </p>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <LinkList
                heading={translate({ id: 'homepage.using.heading', message: 'Using Budgie' })}
                items={usingLinks}
              />
              <LinkList
                heading={translate({ id: 'homepage.developing.heading', message: 'Developing Budgie' })}
                items={developingLinks}
              />
            </div>

            <div className="mt-16 grid grid-cols-1 items-start gap-12 border-0 border-border-subtle border-t border-solid pt-16 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="m-0 mb-4 font-heading font-semibold text-2xl text-strong leading-tight md:text-3xl">
                  <Translate id="homepage.reporting.title" description="Title of the issue reporting row">
                    Found a bug?
                  </Translate>
                </h3>
                <p className="m-0 mb-4 text-base text-subtle leading-relaxed md:text-lg">
                  <Translate id="homepage.reporting.description" description="Description of the issue reporting row">
                    Where to report depends on which component the issue is in. Before reporting, search the open issues
                    and test with the latest release to see whether it is already fixed.
                  </Translate>
                </p>
                <p className="m-0 mb-8 text-base text-subtle leading-relaxed md:text-lg">
                  <Translate id="homepage.reporting.crash" description="Crash guidance in the issue reporting row">
                    If Budgie crashed, include a backtrace so we can find the cause.
                  </Translate>
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <Link
                    className="inline-flex items-center gap-1 font-medium text-strong no-underline hover:text-primary hover:no-underline"
                    to="/10.10/user/reporting-issues"
                  >
                    <Translate id="homepage.reporting.guide" description="Link to the reporting issues guide">
                      Reporting issues guide
                    </Translate>
                    <ChevronRight aria-hidden size={16} />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-1 font-medium text-strong no-underline hover:text-primary hover:no-underline"
                    to="/10.10/developer/workflow/providing-backtraces"
                  >
                    <Translate id="homepage.reporting.backtraces" description="Link to the providing backtraces guide">
                      Providing backtraces
                    </Translate>
                    <ChevronRight aria-hidden size={16} />
                  </Link>
                </div>
              </div>
              <LinkList
                heading={translate({ id: 'homepage.reporting.heading', message: 'Where to report' })}
                items={reportingLinks}
              />
            </div>
          </div>
        </section>

        <section className="w-full border-0 border-border-subtle border-y border-solid bg-background-alt py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-md bg-accent-soft px-3 py-1.5 font-inter font-semibold text-primary text-xs uppercase tracking-widest">
                <Translate id="homepage.next.label" description="Label above the in-development release section">
                  In development
                </Translate>
              </span>
              <h2 className="m-0 mb-6 font-heading font-semibold text-3xl text-strong leading-tight md:text-4xl">
                Budgie 11
              </h2>
              <p className="m-0 mb-8 text-base text-subtle leading-relaxed md:text-lg">
                <Translate
                  id="homepage.next.description"
                  description="Description of the in-development release section"
                >
                  The next generation of Budgie Desktop, developed in the open on our Forge. It is not ready for daily
                  use yet, and its documentation will grow alongside it.
                </Translate>
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  className="inline-flex items-center gap-2 rounded-lg border border-primary border-solid px-6 py-3 font-semibold text-primary text-sm no-underline transition-colors hover:bg-primary/10 hover:text-primary hover:no-underline"
                  to={BUDGIE_11_BLOG_URL}
                >
                  <Translate id="homepage.next.follow" description="Link to Budgie 11 posts on the blog">
                    Follow development
                  </Translate>
                  <ChevronRight aria-hidden size={16} />
                </Link>
                <Link
                  className="inline-flex items-center gap-1 font-medium text-strong no-underline hover:text-primary hover:no-underline"
                  to={FORGE_URL}
                >
                  <Translate id="homepage.next.forge" description="Link to Budgie 11 development on the Forge">
                    Budgie 11 on the Forge
                  </Translate>
                  <ChevronRight aria-hidden size={16} />
                </Link>
                <Link
                  className="inline-flex items-center gap-1 font-medium text-strong no-underline hover:text-primary hover:no-underline"
                  to="/developer/intro"
                >
                  <Translate id="homepage.next.developer" description="Link to Budgie 11 developer documentation">
                    Developer documentation
                  </Translate>
                  <ChevronRight aria-hidden size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
            <div className="flex flex-col gap-6 rounded-2xl bg-linear-to-r from-[#6bca81] to-[#5ab573] p-8 text-white md:p-10">
              <h2 className="m-0 font-heading font-semibold text-3xl text-white leading-tight md:text-4xl">
                <Translate id="homepage.community.title" description="Title of the community banner">
                  Built by the community
                </Translate>
              </h2>
              <p className="m-0 max-w-3xl text-base leading-relaxed md:text-lg">
                <Translate id="homepage.community.description" description="Description of the community banner">
                  Budgie is built by volunteers from around the world, and so are these docs. Read our contributing
                  guidelines and AI policy before you start, and come say hi on Matrix.
                </Translate>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className={bannerButtonClassName} to="/developer/contributing">
                  <Translate id="homepage.community.contributing" description="Link to the contributing guidelines">
                    Contributing
                  </Translate>
                </Link>
                <Link className={bannerButtonClassName} to="/organization/ai-policy">
                  <Translate id="homepage.community.aiPolicy" description="Link to the AI policy">
                    AI Policy
                  </Translate>
                </Link>
                <Link className={bannerButtonClassName} to="/organization/intro">
                  <Translate id="homepage.community.organization" description="Link to the organization documentation">
                    Organization
                  </Translate>
                </Link>
                <Link className={bannerButtonClassName} to="https://matrix.to/#/#buddies-of-budgie:matrix.org">
                  <MessageCircle aria-hidden size={18} />
                  <Translate id="homepage.community.matrix" description="Link to the Matrix space">
                    Join Matrix
                  </Translate>
                </Link>
                <Link className={bannerButtonClassName} to="https://opencollective.com/buddies-of-budgie">
                  <Heart aria-hidden size={18} />
                  <Translate id="homepage.community.support" description="Link to donate">
                    Support Us
                  </Translate>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
