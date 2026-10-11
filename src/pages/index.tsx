import Translate from '@docusaurus/Translate'
import Layout from '@theme/Layout'
import { Building2, CircleUser, CircuitBoard } from 'lucide-react'
import { Category } from '../components/home/Category'
import { Header } from '../components/home/Header'

const Home = () => {
  return (
    <Layout description="Buddies of Budgie Documentation">
      <Header />
      <div className="mx-auto my-[4vh] w-full max-w-(--breakpoint-lg) px-4 sm:px-6">
        <div className="m-0 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <Category
            icon={<CircuitBoard size={128} />}
            to="/developer/intro"
            text={
              <Translate id="homepage.category.development" description="Developer">
                Developer
              </Translate>
            }
          />
          <Category
            icon={<Building2 size={128} />}
            to="/organization/intro"
            text={
              <Translate id="homepage.category.organization" description="Organization">
                Organization
              </Translate>
            }
          />
          <Category
            icon={<CircleUser size={128} />}
            to="/10.10/user/intro"
            text={
              <Translate id="homepage.category.user" description="User">
                User
              </Translate>
            }
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
