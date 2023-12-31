import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  SxProps,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  Project,
  edvinProjects,
  leonProjects,
  parhamProjects,
  thomasProjects,
} from '../assets/projects.ts';
import { TitleStyleSX } from './About.tsx';

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
    <Box>
      <Typography
        sx={TitleStyleSX}
        style={{ fontSize: '48px', paddingTop: '2rem' }}
        variant='h2'
        color={'secondary'}
      >
        Portfolio
      </Typography>
      <Grid container spacing={2} sx={GridStyleSX}>
        {projectSet.map((project, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const isDarkBackground = (row + col) % 2 === 0;
          const backgroundColor = isDarkBackground ? 'black' : 'white';
          const textColor = isDarkBackground ? 'white' : 'black';

          return (
            <Grid item xs={12 / cols} key={index} sx={GridItemStyleSX}>
              <motion.div style={{ width: '100%', height: '100%' }}
                key={index}
                initial={{ opacity: 0, translateX: -500, translateY: -500 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={ProjectCardStyleSX}
                  style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                  }}
                >
                  <CardMedia component='img' height='225' image={project.img} alt={project.name} />
                  <CardContent sx={ProjectDetailsStyleSX}>
                    <Typography variant='h5' component='div'>
                      {project.name}
                    </Typography>
                    <Typography variant='body2'>{project.description}</Typography>
                    <Box sx={ProjectLinksStyleSX}>
                      <Tooltip title='Github link' arrow>
                        <Button
                          href={project.githubLink}
                          variant='contained'
                          sx={{
                            padding: '0px!important',
                            backgroundColor: backgroundColor,
                            color: textColor,
                            minWidth: '0px!important',
                            boxShadow: 'none!important',
                            '& a, span': {
                              padding: '.3rem .5rem!important',
                              border: 'none!important',
                              margin: '0!important',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                          }}
                          startIcon={<GitHubIcon style={{ fontSize: '32px' }} />}
                        ></Button>
                      </Tooltip>
                      <Tooltip title='Demo link' arrow>
                        <Button
                          href={project.demoLink}
                          variant='contained'
                          sx={{
                            padding: '0px!important',
                            backgroundColor: backgroundColor,
                            color: textColor,
                            minWidth: '0px!important',
                            boxShadow: 'none!important',
                            '& a, span': {
                              padding: '.3rem .5rem!important',
                              border: 'none!important',
                              margin: '0!important',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                          }}
                          startIcon={<PlayCircleFilledIcon style={{ fontSize: '32px' }} />}
                        ></Button>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const GridStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  minHeight: '100%',
  borderRadius: '0px',
  margin: '0',
  padding: '0rem',
  marginTop: '0rem',
  [theme.breakpoints.down('sm')]: {
    marginTop: '2rem',
  },
});

const GridItemStyleSX: SxProps<Theme> = theme => ({
  padding: '0px!important',
  minHeight: '420px',

  [theme.breakpoints.down('sm')]: {},
});

const ProjectCardStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0px',
  minHeight: '100%',
  [theme.breakpoints.down('sm')]: {},
});

const ProjectDetailsStyleSX: SxProps<Theme> = theme => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  flex: '1',
  [theme.breakpoints.down('sm')]: {},
});

const ProjectLinksStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {},
});
