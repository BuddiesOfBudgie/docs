import { translate } from "@docusaurus/Translate";
import { FilterAlt } from "@mui/icons-material";
import { FormControlLabel, Stack, Switch, ToggleButton, useColorScheme } from "@mui/material";
import { UnifiedReleaseSchedules } from "@site/src/data/schedules/unified";
import { useThirdPartyReleaseContext } from "@site/src/hooks/useThirdPartyReleaseContext";
import { CalendarEventCategory, CalendarEventType } from "@site/src/types";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import React from "react";
import { MultiSelect } from "../MultiSelect";

const ThirdPartyReleaseFilters = () => {
  const { mode } = useColorScheme();
  const { showFilters, showPastEvents, setShowFilters, setShowPastEvents, setSelectedCategories, setSelectedTypes } =
    useThirdPartyReleaseContext();

  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between">
        <ToggleButton onChange={() => setShowFilters(!showFilters)} selected={showFilters} value={showFilters}>
          <FilterAlt />
        </ToggleButton>
        <AddToCalendarButton
          buttonStyle="default"
          hideBackground
          hideButton={false}
          hideBranding
          name="Buddies of Budgie: Third-party Project Schedules"
          icsFile={`${location.origin}/calendars/third-party-schedules.ics`}
          lightMode={mode}
          options={["Apple", "Google", "iCal", "Outlook.com", "Yahoo", "Microsoft365", "MicrosoftTeams"]}
          subscribe
          startDate={UnifiedReleaseSchedules[0].dates[0]}
          trigger="click"
        ></AddToCalendarButton>
      </Stack>
      {showFilters && (
        <>
          <FormControlLabel
            control={<Switch color="success" defaultChecked onChange={() => setShowPastEvents(!showPastEvents)} />}
            label={translate({ id: "showPastEvents", message: "Show past events" })}
          />
          <MultiSelect<CalendarEventCategory>
            defaultValues={Object.values(CalendarEventCategory)}
            id="release-table-filter-category"
            label={translate({ id: "projects", message: "Projects" })}
            onChange={(v) => setSelectedCategories(v)}
            options={Object.values(CalendarEventCategory)}
          />
          <MultiSelect<CalendarEventType>
            defaultValues={Object.values(CalendarEventType)}
            id="release-table-filter-types"
            label={translate({ id: "event", message: "Event" })}
            onChange={(v) => setSelectedTypes(v)}
            options={Object.values(CalendarEventType)}
          />
        </>
      )}
    </Stack>
  );
};

export default ThirdPartyReleaseFilters;
