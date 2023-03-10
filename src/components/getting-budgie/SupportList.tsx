import React from "react";
import Admonition from "@theme/Admonition";

import type { SupportLiveMediaInfo, SupportManualInstallationInfo } from "../../types";
import Translate from "@docusaurus/Translate";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/material";
import Link from "@docusaurus/Link";
import { OSCard } from "./OSCard";
import { SupportListData } from "@site/src/data/supportList";

const SupportList = () => {
  const [liveMediaItems, manualItems] = [
    SupportListData.filter<SupportLiveMediaInfo>((info): info is SupportLiveMediaInfo => info.showInGrid),
    SupportListData.filter<SupportManualInstallationInfo>(
      (info): info is SupportManualInstallationInfo => !info.showInGrid
    ),
  ];

  return (
    <Stack gap={2} key="SupportList">
      <h2 style={{ fontWeight: "bold", margin: 0 }}>
        <Translate
          id="get.budgie.header.effortlessly"
          description="Header text for getting Budgie effortlessly through live media"
        >
          Get Budgie Effortlessly
        </Translate>
      </h2>

      <h4 style={{ fontWeight: "normal", margin: 0 }}>
        <Translate
          id="get.budgie.description.effortlessly"
          description="Description text for getting Budgie effortlessly through live media"
        >
          You are able to get Budgie Desktop out-of-the-box, with no extra effort, with the operating systems shown
          below. These operating systems range in the experience they provide, some will be more curated with additional
          widgets / extensions for Budgie Desktop, others may be closer to the "stock" / "vanilla" Budgie Desktop
          experience.
        </Translate>
      </h4>
      <Grid2
        columns={{
          xs: 6,
          sm: 6,
          md: 6,
          lg: 12,
        }}
        container
        columnSpacing={2}
        key="SupportList-Grid"
        margin={0}
        rowGap={4}
        width={1}
      >
        {liveMediaItems.map((info) => (
          <OSCard info={info} key={`OSCard-${info.name}-Entry`} />
        ))}
      </Grid2>
      <h2 style={{ fontWeight: "bold", margin: 0 }}>
        <Translate id="get.budgie.header.bitmorework" description="Header text for getting Budgie with a bit more work">
          Get Budgie with a bit more work
        </Translate>
      </h2>
      {manualItems.map((info) => {
        return (
          <Stack gap={2}>
            <Link target="_blank" to={info.website}>
              <h3 style={{ margin: 0 }}>{info.name}</h3>
            </Link>
            <info.installationInfo key={`InstallationInfo-${info.name}`} />
          </Stack>
        );
      })}
      <hr />
      <Admonition type="note">
        <Translate
          id="get.budgie.description.reference"
          description="Text describing that there is no reference platform for Budgie Desktop"
        >
          None of these operating systems are viewed as being the "reference" platform for Budgie Desktop, rather we
          want you to be able to pick the OS that fits your needs best, and have Budgie Desktop along with you!
        </Translate>
      </Admonition>
    </Stack>
  );
};

export default SupportList;
