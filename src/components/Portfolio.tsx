import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';
import {
  Project,
  edvinProjects,
  leonProjects,
  parhamProjects,
  thomasProjects,
} from '../assets/projects.ts';

export default function Portfolio() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const location = useLocation();
  let projectSet: Project[];

  switch (location.pathname.split('/').pop()) {
    case 'Leon':
      projectSet = leonProjects;
      break;
    case 'Thomas':
      projectSet = thomasProjects;
      break;
    case 'Parham':
      projectSet = parhamProjects;
      break;
    case 'Edvin':
      projectSet = edvinProjects;
      break;
    default:
      projectSet = [];
  }

  let cols: number;
  if (isMdUp) {
    cols = 3;
  } else if (isSmUp) {
    cols = 2;
  } else {
    cols = 1;
  }

  return (
    <Grid container spacing={2} sx={GridStyleSX}>
      {projectSet.map((project, index) => (
        <Grid item xs={12 / cols} key={index} sx={GridItemStyleSX}>
          <Card sx={ProjectCardStyleSX}>
            <CardMedia
              component='img'
              height='180'
              image={project.img}
              alt={project.name}
              sx={{ padding: '10px' }}
            />
            <CardContent>
              <Typography variant='h5' component='div'>
                {project.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {project.description}
              </Typography>
              <Button href={project.githubLink} variant='contained' style={{ margin: '5px' }}>
                GitHub
              </Button>
              <Button href={project.demoLink} variant='contained' style={{ margin: '5px' }}>
                Demo
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const GridStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  margin: '0',
  padding: '1rem',
  marginTop: '0rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: '2rem',
  },
});

const GridItemStyleSX: SxProps<Theme> = theme => ({
  padding: '1rem',
  [theme.breakpoints.down('sm')]: {},
});

const ProjectCardStyleSX: SxProps<Theme> = theme => ({
  border: '2px solid black',
  [theme.breakpoints.down('sm')]: {},
});
