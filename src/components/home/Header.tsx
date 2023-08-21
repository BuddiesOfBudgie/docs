import Translate from "@docusaurus/Translate";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { AutoColumnOnSmall } from "@site/src/utils/auto";

export const Header = () => {
  return (
    <Stack
      alignItems="center"
      className="HomepageHeader"
      justifyContent="center"
      padding="2vh 10vw"
      spacing={4}
      sx={{
        paddingBlock: "5vh",
      }}
    >
      <Container maxWidth="fullhd">
        <Box bgcolor="primary.dark" borderRadius={4} p={2} width={1}>
          <Box
            borderRadius={2}
            position="relative"
            sx={{
              aspectRatio: 16 / 9,
              width: "100%",
            }}
          >
            <img src={useBaseUrl("/img/Budgie.webp")} style={{ objectFit: "contain" }} />
          </Box>
        </Box>
      </Container>
      <h1 style={{ fontWeight: "bold" }}>
        <Translate id="homepage.header.welcome" description="The welcome text for the Homepage header">
          The place to learn and build with Budgie Desktop.
        </Translate>
      </h1>
      <Stack alignItems="center" direction={AutoColumnOnSmall()} justifyContent="center">
        <Link className="button button--lg button--primary" to="/user/getting-budgie">
          <Translate id="get.budgie" description="Get Budgie">
            Get Budgie
          </Translate>
        </Link>
      </Stack>
    </Stack>
  );
};
