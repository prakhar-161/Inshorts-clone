import { Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Articles from './components/Articles';

const useStyles = makeStyles({ 
  container: {
    marginTop: 110,
    width: '62%',
    margin: '0 auto'
  },
});

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
