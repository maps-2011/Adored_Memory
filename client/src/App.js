import React from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import  ClickMoments  from './images/ClickMoments.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
function App() {
    const classes=useStyles();
    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <typography className={classes.heading} variant="h2" align="center">ClickMoments</typography>
                <img className={classes.image} src={ClickMoments} alt="ClickMoments" height="60" />   
                
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                         <Grid item xs={12} sm={7}>
                            <Posts />
                         </Grid>
                         <Grid item xs={12} sm={4}>
                             <Form />
                         </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
