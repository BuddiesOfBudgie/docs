import React, { useState } from "react";

import { Backdrop, Box, Stack } from "@mui/material";
import { Teams } from "../data/teams";
import { People } from "../data/people";
import { Person as PersonType, Team as TeamType } from "../types";
import { Person } from "./Person";
import { AutoColumnOnSmall } from "../utils/auto";
import { SiteTheme } from "../theme";

type TeamMemberProps = {
  haveSupplementalInfo: boolean;
  teamName: string;
  person: PersonType;
  supplementalInfo: string;
};

export const TeamMember = ({ haveSupplementalInfo, teamName, person, supplementalInfo }: TeamMemberProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <Stack
      direction={AutoColumnOnSmall("row", "column", "sm")}
      key={`Team-${teamName}-GridItem-${person.names.first}${person.names.last}`}
    >
      <Backdrop
        onClick={() => setShowOverlay(false)}
        open={showOverlay}
        sx={{ p: 2, zIndex: SiteTheme.zIndex.tooltip }}
      >
        <Person
          embeddedIn={teamName}
          isBadge={false}
          person={person}
          sx={{
            minWidth: 240,
            padding: 4,
          }}
        />
      </Backdrop>
      <Person
        embeddedIn={teamName}
        isBadge
        onAvatarClick={() => setShowOverlay(true)}
        person={person}
        sx={{
          minWidth: 240,
        }}
      />
      {haveSupplementalInfo && <Box sx={{ fontWeight: "bold", lineHeight: "40px" }}>{supplementalInfo}</Box>}
    </Stack>
  );
};

export const Team = ({ team }: { team: TeamType }) => {
  const haveSupplementalInfo = !!team.members.find((el) => !!el[1]);
  return (
    <Stack className="card" gap={2} p={2}>
      <h2 style={{ margin: 0 }}>{team.name} </h2>
      <h4 style={{ fontWeight: "normal", margin: 0, marginBlockEnd: 6 }}>{team.description}</h4>
      {team.members.map(([name, supplementalInfo]) => (
        <TeamMember
          haveSupplementalInfo={haveSupplementalInfo}
          teamName={team.name}
          person={People[name]}
          supplementalInfo={supplementalInfo}
        />
      ))}
    </Stack>
  );
};

export const TeamsList = () => {
  return (
    <Stack gap={4}>
      <h1 style={{ margin: 0 }}>Teams</h1>
      Buddies of Budgie internally is organized into several teams, which share responsibility for various aspects of
      the operations of Buddies of Budgie, or Budgie Desktop itself.
      {Teams.map((team) => (
        <Team key={`TeamsList-Team-${team.name}`} team={team} />
      ))}
    </Stack>
  );
};
