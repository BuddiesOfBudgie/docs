import React from "react";
import Layout from "@theme/Layout";

import { Container, ThemeProvider } from "@mui/material";
import { Header } from "../components/home/Header";
import { SiteTheme } from "../theme";
import { Category } from "../components/home/Category";

import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Translate from "@docusaurus/Translate";

const Home = (): JSX.Element => {
  return (
    <Layout description="Buddies of Budgie Documentation">
      <ThemeProvider theme={SiteTheme}>
        <Header />
        <Container sx={{ marginBlock: "4vh", maxWidth: 1920 }}>
          <Grid2
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
              icon={<DeveloperBoardIcon sx={{ fontSize: "128px" }} />}
              to="/developer/intro"
              text={
                <Translate id="homepage.category.development" description="Developer">
                  Developer
                </Translate>
              }
            />
            <Category
              icon={<AccountCircleIcon sx={{ fontSize: "128px" }} />}
              to="/user/intro"
              text={
                <Translate id="homepage.category.user" description="User">
                  User
                </Translate>
              }
            />
            <Category
              icon={<Diversity1Icon sx={{ fontSize: "128px" }} />}
              to="/organization/intro"
              text={
                <Translate id="homepage.category.organization" description="Organization">
                  Organization
                </Translate>
              }
            />
          </Grid2>
        </Container>
      </ThemeProvider>
    </Layout>
  );
};

export default Home;
