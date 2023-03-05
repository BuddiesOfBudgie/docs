import React from "react";

import { Box, Stack } from "@mui/material";
import { Teams } from "../data/teams";
import { People } from "../data/people";
import { Team as TeamType } from "../types";
import { Person } from "./Person";
import { AutoColumnOnSmall } from "../utils/auto";

export const Team = ({ team }: { team: TeamType }) => {
  const haveSupplementalInfo = !!team.members.find((el) => !!el[1]);
  return (
    <Stack className="card" gap={2} p={2}>
      <h2 style={{ margin: 0 }}>{team.name} </h2>
      <h4 style={{ fontWeight: "normal", margin: 0, marginBlockEnd: 6 }}>{team.description}</h4>
      {team.members.map(([name, supplementalInfo]) => {
        return (
          <Stack direction={AutoColumnOnSmall("row", "column", "sm")} key={`Team-${team.name}-GridItem-${name}`}>
            <Person
              embeddedIn={team.name}
              isBadge
              person={People[name]}
              sx={{
                minWidth: 240,
              }}
            />
            {haveSupplementalInfo && <Box sx={{ fontWeight: "bold", lineHeight: "40px" }}>{supplementalInfo}</Box>}
          </Stack>
        );
      })}
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
