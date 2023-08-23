import {
  Avatar,
  Box,
  Chip,
  FormControlLabel,
  Stack,
  Switch,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  Typography,
  styled,
  useColorScheme,
} from "@mui/material";
import { UnifiedReleaseSchedules } from "@site/src/data/schedules/unified";
import { CalendarEventCategory, CalendarEventStrictType, CalendarEventType } from "@site/src/types";
import React, { useMemo, useState } from "react";

import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { A, pipe } from "@mobily/ts-belt";
import { AcUnit, Construction, EventBusy, QuestionMark, RocketLaunch } from "@mui/icons-material";
import BiotechIcon from "@mui/icons-material/Biotech";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { DateTime, Interval } from "luxon";
import { TbAlpha, TbBarrierBlock, TbBeta, TbGitBranch, TbGrave } from "react-icons/tb";
import { MultiSelect } from "./MultiSelect";

const CategoryChip = ({ c }: { c: CalendarEventCategory }) => {
  const { mode } = useColorScheme();
  return (
    <Chip
      avatar={<Avatar alt={c} src={`/img/logos/${c.toLowerCase()}.svg`} />}
      label={c}
      sx={{
        ".MuiChip-avatar": {
          filter: c === CalendarEventCategory.GNOME && mode === "dark" ? "invert(1) brightness(1)" : undefined,
        },
        width: "max-content",
      }}
    />
  );
};

const EventTypeToIcon = ({ t }: { t: CalendarEventType }) => {
  const UseIcon = (() => {
    switch (t) {
      case CalendarEventType.ABI_FREEZE:
      case CalendarEventType.BETA_FREEZE:
      case CalendarEventType.BRANCH_FREEZE:
      case CalendarEventType.FEATURE_FREEZE:
      case CalendarEventType.FINAL_FREEZE:
      case CalendarEventType.IMPORT_FREEZE:
        return <AcUnit />;
      case CalendarEventType.ALPHA:
        return <TbAlpha style={{ fontSize: "1.5em" }} />;
      case CalendarEventType.BETA_RELEASE:
        return <TbBeta style={{ fontSize: "1.5em" }} />;
      case CalendarEventType.BRANCHING:
        return <TbGitBranch style={{ fontSize: "1.5em" }} />;
      case CalendarEventType.CHANGE_CHECKPOINT_SELF_CONTAINED:
      case CalendarEventType.CHANGE_CHECKPOINT_TESTABLE:
        return <TbBarrierBlock style={{ fontSize: "1.5em" }} />;
      case CalendarEventType.CODE_COMPLETE_DEADLINE:
        return <EventBusy />;
      case CalendarEventType.EOL:
        return <TbGrave style={{ fontSize: "1.5em" }} />;
      case CalendarEventType.RELEASE:
      case CalendarEventType.START:
        return <RocketLaunch />;
      case CalendarEventType.RELEASE_CANDIDATE:
        return <Construction />;
      case CalendarEventType.TESTING_WEEK:
        return <BiotechIcon />;
      default:
        return <QuestionMark />;
    }
  })();

  return <Box sx={{ height: "1.5em", minWidth: "2em" }}>{UseIcon}</Box>;
};

const ThirdPartyReleaseTable = () => {
  const { mode } = useColorScheme();

  const [showFilters, setShowFilters] = useState(false);
  const [showPastEvents, setShowPastEvents] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<CalendarEventCategory[]>(
    Object.values(CalendarEventCategory)
  );
  const [selectedTypes, setSelectedTypes] = useState<CalendarEventType[]>(Object.values(CalendarEventType));

  const today = useMemo(() => DateTime.now().setZone("utc", { keepLocalTime: true }).startOf("day"), []);

  const filteredEvents = useMemo(
    () =>
      pipe(
        UnifiedReleaseSchedules.reduce<CalendarEventStrictType[]>(
          (acc, e) => [...acc, ...e.types.map((t) => ({ ...e, type: t }))],
          []
        ),
        A.filter((e) => selectedCategories.includes(e.category)),
        A.filter((e) => selectedTypes.includes(e.type)),
        A.filter((e) => (showPastEvents ? true : DateTime.fromISO(e.dates[0]).diff(today).milliseconds > 0))
      ),
    [selectedCategories, selectedTypes, showPastEvents, today]
  );

  const firstUpcomingEvent = filteredEvents.find((e) => {
    const startDate = DateTime.fromISO(e.dates[0]);
    const endDate = DateTime.fromISO(e.dates[1]).plus({ days: e.dates[0] === e.dates[0] ? 1 : 0 });
    const diff = Interval.fromDateTimes(startDate, endDate);

    const currentOrUpcoming = diff.contains(today) || startDate.diff(today).milliseconds > 0;
    return currentOrUpcoming;
  });

  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between">
        <ToggleButton onChange={() => setShowFilters(!showFilters)} selected={showFilters} value={showFilters}>
          <FilterAltIcon />
        </ToggleButton>
        <AddToCalendarButton
          buttonStyle="default"
          hideBackground
          hideButton={false}
          hideBranding={true}
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
      <TableContainer>
        <TableHead>
          <StyledTableRow>
            <TableCell>
              <Translate id="event">Event</Translate>
            </TableCell>
            <TableCell>
              <Translate id="project">Project</Translate>
            </TableCell>
            <TableCell>
              <Translate id="start">Start</Translate>
            </TableCell>
            <TableCell>
              <Translate id="end">End</Translate>
            </TableCell>
            <TableCell>
              <Translate id="duration">Duration</Translate>
            </TableCell>
          </StyledTableRow>
        </TableHead>
        <tbody>
          {filteredEvents.map((e, i) => {
            const startDate = DateTime.fromISO(e.dates[0]);
            const endDate = DateTime.fromISO(e.dates[1]).plus({ days: e.dates[0] === e.dates[0] ? 1 : 0 });
            const diff = Interval.fromDateTimes(startDate, endDate);
            const duration = diff.toDuration("days").toHuman({ unitDisplay: "narrow" });

            return (
              <>
                {showPastEvents && firstUpcomingEvent?.name === e.name && (
                  <TableRow className="upcomingEventRow" sx={{ backgroundColor: "success" }} key="upcomingEventRow">
                    <TableCell colSpan={5} sx={{ backgroundColor: "success" }}>
                      <Typography fontWeight="bold" textAlign="center">
                        Current or upcoming
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
                <StyledTableRow key={`${e.name}-${i}`}>
                  <TableCell>
                    <Stack gap={2}>
                      <Stack alignItems="center" direction="row" gap={1}>
                        <EventTypeToIcon t={e.type} />
                        <Link to={e.url} target="_blank">
                          <Translate
                            id="evenTableCellescription"
                            values={{
                              rel: `${e.category} ${e.release}`,
                              type: e.type,
                            }}
                          >
                            {"{type} for {rel}"}
                          </Translate>
                        </Link>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <CategoryChip c={e.category} />
                  </TableCell>
                  <TableCell>{e.dates[0]}</TableCell>
                  <TableCell>{e.dates[1]}</TableCell>
                  <TableCell>{duration}</TableCell>
                </StyledTableRow>
              </>
            );
          })}
        </tbody>
      </TableContainer>
    </Stack>
  );
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default ThirdPartyReleaseTable;
