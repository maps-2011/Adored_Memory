import React, {useState,useEffect} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'
import  ClickMoments  from './images/ClickMoments.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
function App() {
    const [currentID ,setCurrentId] = useState(null)
    const classes=useStyles();
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[currentID,dispatch]
    )
    return (
        <Container maxwidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Souvenir</Typography>
                <img className={classes.image} src={ClickMoments} alt="ClickMoments" height="60" />   
                
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={4}>
                         <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                         </Grid>
                         <Grid item xs={12} sm={4}>
                             <Form currentID={currentID} setCurrentId={setCurrentId}/>
                         </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
