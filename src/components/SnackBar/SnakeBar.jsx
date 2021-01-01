import React from 'react'
import Snakebar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles.js'

const CustomizedSnakebar = ({open,setOpen}) => {
    const classes = useStyles()
    const handleClose = (event,reason)=>{
        if(reason==='clickaway') return;

        setOpen(false)
    }
    return (
        <div className={classes.root}>
                <Snakebar
                anchorOrigin={{vertical:'top',horizontal:'right'}}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                >

                    <MuiAlert onClose={handleClose} severity='success' elevation='6' variant='filled'>
                        Transaction sucessfully created
                    </MuiAlert>

                </Snakebar>
        </div>
    )
}

export default CustomizedSnakebar
