import { Box, makeStyles } from '@material-ui/core';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

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
      </Box>
    </Box>
  )
}

export default App;
