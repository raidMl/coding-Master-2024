import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {




  
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"  // Change direction to column
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {icon && <Stack alignItems="center">{icon}</Stack>}

      <Stack spacing={0.5} alignItems="center"> {/* Center align text */}
        <Typography variant="h4">{total}</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
}
