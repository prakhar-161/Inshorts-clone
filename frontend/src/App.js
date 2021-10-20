import { Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Articles from './components/Articles';

const useStyles = makeStyles(theme => ({ 
  container: {
    marginTop: 110,
    width: '62%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },  
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container} >
        <SubHeader />
        <Articles />
      </Box>
    </Box>
  )
}

export default App;
