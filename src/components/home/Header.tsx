import Translate from "@docusaurus/Translate";
import { Stack, useMediaQuery } from "@mui/material";
import React from "react";

import { SiteTheme } from "@site/src/theme";
import { AutoColumnOnSmall } from "@site/src/utils/auto";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

export const Header = () => {
  const aboveXl = useMediaQuery(SiteTheme.breakpoints.up("xl"));

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
      <img
        src={useBaseUrl("/img/laptop.webp")}
        style={{ maxWidth: aboveXl ? SiteTheme.breakpoints.values.md : undefined }}
      />
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
