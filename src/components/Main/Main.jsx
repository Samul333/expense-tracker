import React from 'react'
import {Card,CardHeader, Typography,Grid,Divider,CardContent} from '@material-ui/core'
import useStyles from './styles'
import useTransactions from '.././../useTransactions'
import Form from './Form/Form';
import List from './List/List'
const Main = () => {

    const classes = useStyles();
    const {Budget} = useTransactions()
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered By Speachly'/>
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance Rs.{Budget}</Typography>
                <Typography variant ='subtitle1' style={{lineHeight:'1.5em',marginTop:'20px'}}>
                    Simple Expense Tracker and Data visualization
                </Typography>
                <Divider/>
                    <Form/>
            </CardContent>

            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
