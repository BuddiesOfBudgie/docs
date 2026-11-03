import Translate, { translate } from '@docusaurus/Translate'
import { Bot, GitPullRequest, HandHeart, MessageCircle, MessagesSquare, Users } from 'lucide-react'
import { DONATE_URL, FORUM_URL, MATRIX_URL } from '../../constants'
import { LinkList, type LinkListItem } from './LinkList'

const talkLinks: LinkListItem[] = [
  {
    title: translate({ id: 'homepage.community.talk.forum.title', message: 'Forum' }),
    description: translate({
      id: 'homepage.community.talk.forum.description',
      message: 'Announcements, development, and support.',
    }),
    to: FORUM_URL,
    icon: MessagesSquare,
  },
  {
    title: translate({ id: 'homepage.community.talk.matrix.title', message: 'Matrix' }),
    description: translate({
      id: 'homepage.community.talk.matrix.description',
      message: 'Chat with the team and community.',
    }),
    to: MATRIX_URL,
    icon: MessageCircle,
  },
]

const contributeLinks: LinkListItem[] = [
  {
    title: translate({ id: 'homepage.community.contribute.contributing.title', message: 'Contributing' }),
    description: translate({
      id: 'homepage.community.contribute.contributing.description',
      message: 'Sign-offs, commits, and pull requests.',
    }),
    to: '/developer/contributing',
    icon: GitPullRequest,
  },
  {
    title: translate({ id: 'homepage.community.contribute.aiPolicy.title', message: 'AI Policy' }),
    description: translate({
      id: 'homepage.community.contribute.aiPolicy.description',
      message: 'How AI tools may be used in contributions.',
    }),
    to: '/organization/ai-policy',
    icon: Bot,
  },
  {
    title: translate({ id: 'homepage.community.contribute.organization.title', message: 'Organization' }),
    description: translate({
      id: 'homepage.community.contribute.organization.description',
      message: 'Buddies of Budgie and its policies.',
    }),
    to: '/organization/intro',
    icon: Users,
  },
]

const supportLinks: LinkListItem[] = [
  {
    title: translate({ id: 'homepage.community.support.donate.title', message: 'Open Collective' }),
    description: translate({
      id: 'homepage.community.support.donate.description',
      message: 'Donations fund infrastructure and development.',
    }),
    to: DONATE_URL,
    icon: HandHeart,
  },
]

export const Community = () => (
  <div>
    <h2 className="m-0 mb-4 font-heading font-semibold text-3xl text-strong leading-tight md:text-4xl">
      <Translate id="homepage.community.title" description="Title of the community section">
        Built by the community
      </Translate>
    </h2>
    <p className="m-0 mb-12 max-w-3xl text-base text-subtle leading-relaxed md:text-lg">
      <Translate id="homepage.community.description" description="Description of the community section">
        Budgie is built by volunteers from around the world, and so are these docs.
      </Translate>
    </p>
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
      <LinkList
        heading={translate({ id: 'homepage.community.talk.heading', message: 'Talk with us' })}
        items={talkLinks}
      />
      <LinkList
        heading={translate({ id: 'homepage.community.contribute.heading', message: 'Contribute' })}
        items={contributeLinks}
      />
      <LinkList
        heading={translate({ id: 'homepage.community.support.heading', message: 'Support us' })}
        items={supportLinks}
      />
    </div>
  </div>
)
