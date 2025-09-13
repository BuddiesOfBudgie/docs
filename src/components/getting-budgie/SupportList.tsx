import Admonition from '@theme/Admonition'

import type { SupportLiveMediaInfo, SupportManualInstallationInfo } from '../../types'

import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

import { kebabCase, toLower } from 'lodash'

import { OpenInNew } from '@mui/icons-material'
import { Box, Grid, IconButton, Stack } from '@mui/material'
import { SupportListData } from '@site/src/data/supportList'
import { OSCard } from './OSCard'

import Link from '@docusaurus/Link'
import { translate } from '@docusaurus/Translate'
import { LATEST_BUDGIE_RELEASE } from '@site/src/constants'
import { SiteTheme } from '@site/src/theme'
import { DateTime } from 'luxon'

const SupportList = () => {
  const [liveMediaItems, manualItems] = [
    SupportListData.filter<SupportLiveMediaInfo>((info): info is SupportLiveMediaInfo => info.showInGrid),
    SupportListData.filter<SupportManualInstallationInfo>(
      (info): info is SupportManualInstallationInfo => !!info.installationInfo
    ),
  ]

  const shouldShowNewReleaseBanner =
    DateTime.now().diff(DateTime.fromISO(LATEST_BUDGIE_RELEASE.date), 'days').days <= 14

  return (
    <Stack gap={2} key="SupportList">
      {shouldShowNewReleaseBanner && (
        <Admonition
          icon="🎉"
          title={translate({
            id: 'newBudgieRelease',
            message: 'New Budgie Release',
          })}
          type="tip"
        >
          <Stack gap={2}>
            <Translate
              id="get.budgie.newrelease"
              description="Flavor text used to inform the user there is a new release of Budgie"
              values={{ version: LATEST_BUDGIE_RELEASE.version }}
            >
              {
                'The Buddies of Budgie team just released Budgie Desktop {version}. Please keep in mind that it may take some time for the release to be available on the operating systems shown below, as this is a manual process performed by our amazing community of package maintainers.'
              }
            </Translate>
            <Link
              className="button button--primary"
              style={{
                maxWidth: 'max-content',
                textDecoration: 'none',
              }}
              target="_blank"
              to={LATEST_BUDGIE_RELEASE.post}
            >
              <Translate id="readMore" description="Read More on the blog post for this release">
                Read more
              </Translate>
            </Link>
          </Stack>
        </Admonition>
      )}
      <h2 style={{ fontWeight: 'bold', margin: 0 }} key="SupportList-EffortlesslyHeader">
        <Translate
          id="get.budgie.header.effortlessly"
          description="Header text for getting Budgie effortlessly through live media"
        >
          Get Budgie Effortlessly
        </Translate>
      </h2>

      <h4 style={{ fontWeight: 'normal', margin: 0 }} key="SupportList-EffortlesslyDescription">
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
      <Grid
        container
        columns={{
          xs: 6,
          sm: 6,
          md: 6,
          lg: 12,
        }}
        columnSpacing={2}
        key="SupportList-Grid"
        margin={0}
        rowGap={4}
        width={1}
      >
        {liveMediaItems.map((info) => (
          <OSCard info={info} key={`OSCard-${info.name}-Entry`} />
        ))}
      </Grid>
      <h2 style={{ fontWeight: 'bold', margin: '1vh 0' }} key="SupportList-BitMoreWorkHeader">
        <Translate id="get.budgie.header.bitmorework" description="Header text for getting Budgie with a bit more work">
          Get Budgie with a bit more work
        </Translate>
      </h2>
      <Stack gap={4} key="SupportList-ManualItems">
        {manualItems.map((info) => {
          const kebabName = kebabCase(toLower(info.name))
          const logo = useBaseUrl(`/img/logos/${kebabName}.svg`)

          return (
            <Box className={`ManualOSCard card`} key={`SupportList-ManualItem-${info.name}-Box`}>
              <Stack className="card__body" gap={2} key={`SupportList-ManualItem-${info.name}-Stack`} pb={0}>
                <Stack alignItems="center" direction="row" columnGap={1}>
                  <img src={logo} style={{ height: 32, width: 32, objectFit: 'scale-down' }} />
                  <h3 style={{ margin: 0 }}>{info.name}</h3>
                  <IconButton
                    aria-label={translate({ message: 'Open in new tab' })}
                    component="a"
                    href={info.website}
                    size="small"
                    sx={{ color: SiteTheme.palette.success.main }}
                    target="_blank"
                  >
                    <OpenInNew />
                  </IconButton>
                </Stack>
                <Stack gap={2}>
                  <info.installationInfo key={`InstallationInfo-${info.name}`} />
                </Stack>
              </Stack>
            </Box>
          )
        })}
      </Stack>
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
  )
}

export default SupportList
