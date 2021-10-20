import { Box, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'rgba(239,67,54)',
        color: '#fff',
        height: 48,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '1px 1px 5px #888888',
        marginBottom: 30,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    text: {
        fontSize: 14,
        marginLeft: 50
    },
    storeBox: {
        display: 'flex',
        marginLeft: 'auto'
    },
    logo: {
        height: 40,
        '&:last-child': {
            margin: '0 50px 0 20px'
        }
    }
}));

const SubHeader = () => {
    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</Typography>
            <Box className={classes.storeBox}>
                <img src={appleStore} alt="app" className={classes.logo} />
                <img src={googleStore} alt="google" className={classes.logo} />
            </Box>
        </Box>
    )
}

export default SubHeader
