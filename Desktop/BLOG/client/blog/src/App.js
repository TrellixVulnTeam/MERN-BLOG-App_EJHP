import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'
import { Container, Typography, AppBar, Grid, Grow } from '@material-ui/core';
import useStyles from "./styles";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
const memories = require('./images/memories.png');



const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    // console.log('ID=> apppp', currentId) ;

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId,dispatch])

    return (
        <>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} varient="h2" align="center">My Blogs</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container className={classes.mainContainer} justifyContent="space-between"  alignitem="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>

                                <Posts
                                    setCurrentId={setCurrentId} />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Form
                                    currentId={currentId}
                                    setCurrentId={setCurrentId}
                                />

                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    )
}

export default App;