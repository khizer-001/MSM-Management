// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const data = [
  {
    stats: '1,567',
    title: 'Total Websites',
    color: 'primary',
    icon: 'mdi:web'
  },
  {
    color: 'info',
    stats: '2.86 GB',
    title: 'Total Data',
    icon: 'majesticons:data-line'
  },
  {
    color: 'error',
    stats: '1,531',
    title: 'Total Images',
    icon: 'mdi-light:image'
  },
  {
    stats: '34',
    color: 'success',
    title: 'Total Apis Request',
    icon: 'ant-design:pull-request-outlined'
  }
]

const renderStats = () => {
  return data.map((sale, index) => (
    <Grid item xs={6} md={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
          <Icon icon={sale.icon} />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h8' sx={{ mb: 5 }}>
            {sale.title}
          </Typography>
          <Typography variant='h5'>{sale.stats}</Typography>
          {/* <Typography variant='body2' sx={{ mt: 3 }}>
            {sale.title}
          </Typography> */}
        </Box>
      </Box>
    </Grid>
  ))
}

const EcommerceTransactionsHorizontal = () => {
  return (
    <Card>
      {/* <CardHeader
        title='Transactions'
        sx={{ '& .MuiCardHeader-action': { m: 0, alignSelf: 'center' } }}
        action={
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            Updated 1 month ago
          </Typography>
        }
      /> */}
      <CardContent sx={{ pt: theme => `${theme.spacing(7)} !important` }}>
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EcommerceTransactionsHorizontal
