import './TeacherCard.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function TeachCard({teacher}) {

// const [Teachers,setTeachers] =useContext(TeachersContext)
  return (
    <Card className="mainCard">
      <Grid
        className="content"
        style={{ display: 'flex', alignItems: 'center' }}
        size={4}
      >
        <Avatar className='largAvatar'
          sx={{
            width: '100px',
            height: '100px',
            marginLeft: '30px',
          }}
          alt={teacher.image}
          src={teacher.image}
        />
      </Grid>
      <Grid size={8}>
        <CardContent style={{ position: 'relative', flexDirection: 'column' }}>
          <Typography
            sx={{ fontWeight: '700', fontSize: '20px' }}
            className="specialization"
            component="div"
          >
            {teacher.specialization}
          </Typography>
          <Typography
            className="name"
            sx={{
              fontWeight: '700',
              fontSize: '20px',
              marginTop: '50px',
              marginBottom: '10px',
            }}
            component="div"
          >
            {teacher.name}
          </Typography>
          <Typography
            className="description"
            sx={{ color: 'text.secondary', mb: '20px', fontSize: '16px' }}
          >
            {teacher.description}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}
