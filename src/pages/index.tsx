import Translate from '@docusaurus/Translate'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import { Container, Grid, ThemeProvider } from '@mui/material'
import Layout from '@theme/Layout'
import { Category } from '../components/home/Category'
import { Header } from '../components/home/Header'
import { SiteTheme } from '../theme'

const Home = (): JSX.Element => {
  return (
    <Layout description="Buddies of Budgie Documentation">
      <ThemeProvider theme={SiteTheme}>
        <Header />
        <Container sx={{ marginBlock: '4vh', maxWidth: 1920 }}>
          <Grid
            columns={{
              xs: 4,
              sm: 4,
              md: 12,
            }}
            container
            margin={0}
            spacing={4}
            width={1}
          >
            <Category
              icon={<DeveloperBoardIcon sx={{ fontSize: '128px' }} />}
              to="/developer/intro"
              text={
                <Translate id="homepage.category.development" description="Developer">
                  Developer
                </Translate>
              }
            />
            <Category
              icon={<AccountCircleIcon sx={{ fontSize: '128px' }} />}
              to="/10.10/user/intro"
              text={
                <Translate id="homepage.category.user" description="User">
                  User
                </Translate>
              }
            />
          </Grid>
        </Container>
      </ThemeProvider>
    </Layout>
  )
}

export default Home
