// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    title: 'Category 1',
    icon: 'tabler:mail',
    trendNumber: '94.41%',
    avatarColor: 'success'
  },
  {
    title: 'Category 2',
    trendNumber: '2.1%',
    avatarColor: 'info',
    icon: 'tabler:link'
  },
  {
    title: 'Category 3',
    trend: 'negative',
    trendNumber: '1.4%',
    icon: 'tabler:click',
    avatarColor: 'warning'
  },
  {
    title: 'Category 4',
    trendNumber: '8.5%',
    icon: 'tabler:users',
    avatarColor: 'primary'
  },
  {
    trend: 'Category 5',
    title: 'Complaints',
    trendNumber: '1.5%',
    avatarColor: 'secondary',
    icon: 'tabler:alert-triangle'
  },
  {
    title: 'Category 6',
    icon: 'tabler:ban',
    trendNumber: '0.8%',
    avatarColor: 'error'
  }
]

const AnalyticsMonthlyCampaignState = () => {
  return (
    <Card>
      <CardHeader
        title='Website Category'
        subheaderTypographyProps={{ sx: { mt: '0 !important' } }}
        action={
          <OptionsMenu
            options={['Last Month', 'Last 6 Months', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? [7, 7, 6.25, 7] : undefined
              }}
            >
              <CustomAvatar
                skin='light'
                variant='rounded'
                color={item.avatarColor}
                sx={{ mr: 4, width: 34, height: 34 }}
              >
                <Icon icon={item.icon} />
              </CustomAvatar>
              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 4, fontWeight: 500, color: 'text.secondary' }}>{item.amount}</Typography>
                  <Typography sx={{ color: `${item.trend === 'negative' ? 'error' : 'success'}.main` }}>
                    {item.trendNumber}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AnalyticsMonthlyCampaignState
