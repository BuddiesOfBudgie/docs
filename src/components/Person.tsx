import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Avatar, Box, Stack, SxProps, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { People } from "../data/people";
import { Teams } from "../data/teams";
import { SiteTheme } from "../theme";
import { Person as PersonType, WebsiteType } from "../types";

type PersonProps = {
  embeddedIn: string;
  isBadge?: boolean;
  onAvatarClick?: () => void;
  person: PersonType;
  sx?: SxProps;
};

export const Person = ({ embeddedIn, isBadge = false, onAvatarClick, person, sx = {} }: PersonProps) => {
  const usePersonRow = useMediaQuery(SiteTheme.breakpoints.up("sm"));
  const key = `Person-${embeddedIn}-${person.names.first}${person.names.last}`;
  const avatar = useBaseUrl(`/img/avatars/${person.names.first}${person.names.last}.webp`);
  const name = `${person.names.first} ${person.names.last}`;

  const github = person.websites.find((w) => w.type === WebsiteType.GITHUB);
  const primarySite = person.websites.find((w) => w.type === WebsiteType.WEBSITE) ?? github;

  return (
    <Stack
      alignItems={!usePersonRow && !isBadge ? "center" : undefined}
      className={`avatar ${!isBadge ? "card--bg" : ""}`}
      direction={usePersonRow || (!usePersonRow && isBadge) ? "row" : "column"}
      key={key}
      spacing={!usePersonRow ? 2 : undefined}
      sx={sx}
    >
      <Box onClick={isBadge && onAvatarClick ? onAvatarClick : undefined} sx={{ cursor: "pointer" }}>
        <Link key={`Link-HeaderAvatar-${key}`} target="_blank" to={!isBadge ? primarySite.to : undefined}>
          <Avatar
            alt={`${name}'s Avatar`}
            className="PersonLinkHeaderAvatar"
            src={avatar}
            sx={{
              height: isBadge ? 40 : 64,
              width: isBadge ? 40 : 64,
            }}
          />
        </Link>
      </Box>
      <Stack
        alignItems={!usePersonRow && !isBadge ? "center" : undefined}
        className="avatar__intro"
        gap={!isBadge ? 1 : 0}
      >
        <Stack className="avatar__name" direction="row" gap={2}>
          {name}
          {!isBadge &&
            person.websites.map((w) => (
              <Link key={`Link-Website-${key}-${w.type}`} target="_blank" to={w.to}>
                <w.icon className="PersonWebsiteIcon" height={24} width={24} />
              </Link>
            ))}
        </Stack>
        {!isBadge && (
          <>
            <Box textAlign={!usePersonRow ? "center" : undefined}>
              <person.description />
            </Box>
            {person.matrix && <small>Matrix: {person.matrix}</small>}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export const Leadership = () => {
  const leadership = Teams.find((t) => t.name === "Best Buds")?.members.map(([member]) => People[member]);
  const useGrid = useMediaQuery(SiteTheme.breakpoints.up("xl"));

  return (
    <Stack gap={4} sx={{ marginBlockEnd: 4 }}>
      <h1 style={{ margin: 0 }}>Leadership</h1>
      <Grid2 columns={useGrid ? 12 : 6} container margin={0} spacing={4} width={1}>
        {leadership.map((person) => (
          <Grid2 key={`LeadershipGridItem-${person.names.first}${person.names.last}`} xs={6}>
            <Person embeddedIn="Leadership" person={person} sx={{ alignItems: "center", height: "100%", p: 2 }} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};
