import Translate from "@docusaurus/Translate";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { AutoColumnOnSmall } from "@site/src/utils/auto";
import { PopButton } from "../PopButton";

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
      <Typography
        className="Poppins"
        style={{ fontSize: "3.2em", fontWeight: "bold", lineHeight: 1.4, maxWidth: "30ch", textAlign: "center" }}
        variant="h1"
      >
        <Translate id="homepage.header.welcome" description="The welcome text for the Homepage header">
          The place to learn and buildwith Budgie Desktop.
        </Translate>
      </Typography>
      <Stack alignItems="center" direction={AutoColumnOnSmall()} justifyContent="center">
        <Link to="/user/getting-budgie">
          <PopButton color="success" sx={{ fontWeight: 500 }} size="large" variant="contained">
            <Translate id="get.budgie" description="Get Budgie">
              Get Budgie
            </Translate>
          </PopButton>
        </Link>
      </Stack>
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
    </Stack>
  );
};
