import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import { Box, Chip, Grid, Stack, useMediaQuery } from '@mui/material'
import { LATEST_BUDGIE_RELEASE } from '@site/src/constants'
import { SiteTheme } from '@site/src/theme'
import { SupportLiveMediaInfo } from '@site/src/types'
import { AutoColumnOnSmall } from '@site/src/utils/auto'
import { kebabCase, toLower } from 'lodash'
import { DateTime } from 'luxon'
import { useMemo } from 'react'

type OSCardProps = {
  info: SupportLiveMediaInfo
}

export const OSCard = ({ info }: OSCardProps) => {
  const aboveSm = useMediaQuery(SiteTheme.breakpoints.up('sm'))
  const kebabName = kebabCase(toLower(info.name))
  const logo = useBaseUrl(`/img/logos/${kebabName}.svg`)
  const screenshot = useBaseUrl(`/img/distribution/screenshots/${kebabName}.webp`)

  const hasLatestOOTB = info.budgieVersion === LATEST_BUDGIE_RELEASE.version

  const hasLatestBudgie = info.budgieAvailablePostInstall
    ? info.budgieAvailablePostInstall === LATEST_BUDGIE_RELEASE.version
    : hasLatestOOTB

  const isOutdated = !hasLatestOOTB && !hasLatestBudgie

  const today = DateTime.now().toISODate({ format: 'basic' })
  const to = useMemo(() => info.website.replace('ISODATE', today), [info.website, today])

  const [latest, latestWithPostInstallUpgrade, outdated] = [
    translate({
      id: 'latest',
      description: 'Latest',
      message: 'Latest',
    }),
    translate({
      id: 'latest_postinstall',
      description: 'Latest with post-install upgrade',
      message: 'Latest with post-install upgrade',
    }),
    translate({
      id: 'outdated',
      description: 'Outdated',
      message: 'Outdated',
    }),
  ]

  const chipLabel = hasLatestOOTB ? latest : hasLatestBudgie ? latestWithPostInstallUpgrade : outdated

  return (
    <Grid key={`OSCard-${info.name}-GridItem`} size={6}>
      <Box className={`OSCard card`} height={1} key={`card-${kebabName}`}>
        <Box className="card__image">
          <img
            alt={translate(
              {
                message: 'Screenshot of {distribution}',
                id: 'get.budgie.card.imagealttext',
                description: 'Alt text for images of various distributions',
              },
              { distribution: info.name }
            )}
            src={screenshot}
            style={{ aspectRatio: '16 / 9' }}
          />
        </Box>
        <Stack className="card__body" gap={2}>
          <Stack alignItems="center" direction="row" gap={2}>
            <img src={logo} style={{ height: 48, width: 48, objectFit: 'scale-down' }} />
            <h3 style={{ margin: 0 }}>{info.name}</h3>
          </Stack>
          <h4 style={{ fontWeight: 'normal' }}>
            <info.summary />
          </h4>
        </Stack>
        <Stack
          alignItems={aboveSm ? 'center' : 'flex-start'}
          className="card__footer"
          direction={AutoColumnOnSmall('row', 'column-reverse', 'sm')}
          justifyContent={aboveSm ? 'space-between' : undefined}
          width={aboveSm ? 1 : 'max-content'}
        >
          <Link
            className="button button--lg button--primary"
            style={{
              marginBlockStart: !aboveSm ? 12 : undefined,
            }}
            target="_blank"
            to={to}
          >
            <Translate id="download" description="Download">
              Download
            </Translate>
          </Link>
          <Chip
            color={isOutdated ? 'warning' : 'success'}
            label={chipLabel}
            icon={isOutdated ? <WarningIcon /> : <CheckCircleIcon />}
            size="medium"
          />
        </Stack>
      </Box>
    </Grid>
  )
}
