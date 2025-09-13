import { AcUnit, Construction, EventBusy, QuestionMark, RocketLaunch } from '@mui/icons-material'
import BiotechIcon from '@mui/icons-material/Biotech'
import { Box } from '@mui/material'
import { CalendarEventType } from '@site/src/types'
import React from 'react'
import { TbAlpha, TbBarrierBlock, TbBeta, TbGitBranch, TbGrave } from 'react-icons/tb'

export const EventTypeToIcon = ({ t }: { t: CalendarEventType }) => {
  const UseIcon = (() => {
    switch (t) {
      case CalendarEventType.ABI_FREEZE:
      case CalendarEventType.BETA_FREEZE:
      case CalendarEventType.BRANCH_FREEZE:
      case CalendarEventType.FEATURE_FREEZE:
      case CalendarEventType.FINAL_FREEZE:
      case CalendarEventType.IMPORT_FREEZE:
        return <AcUnit />
      case CalendarEventType.ALPHA:
        return <TbAlpha style={{ fontSize: '1.5em' }} />
      case CalendarEventType.BETA_RELEASE:
        return <TbBeta style={{ fontSize: '1.5em' }} />
      case CalendarEventType.BRANCHING:
        return <TbGitBranch style={{ fontSize: '1.5em' }} />
      case CalendarEventType.CHANGE_CHECKPOINT_SELF_CONTAINED:
      case CalendarEventType.CHANGE_CHECKPOINT_TESTABLE:
        return <TbBarrierBlock style={{ fontSize: '1.5em' }} />
      case CalendarEventType.CODE_COMPLETE_DEADLINE:
        return <EventBusy />
      case CalendarEventType.EOL:
        return <TbGrave style={{ fontSize: '1.5em' }} />
      case CalendarEventType.RELEASE:
      case CalendarEventType.START:
        return <RocketLaunch />
      case CalendarEventType.RELEASE_CANDIDATE:
        return <Construction />
      case CalendarEventType.TESTING_WEEK:
        return <BiotechIcon />
      default:
        return <QuestionMark />
    }
  })()

  return <Box sx={{ height: '1.5em', minWidth: '2em' }}>{UseIcon}</Box>
}
