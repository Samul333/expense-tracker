import React,{useState,useContext} from 'react'
import {TextField, Typography, Grid,Button,Select,MenuItem,InputLabel,FormControl} from '@material-ui/core'
import {ExpenseTrackerContext} from '../../../Context/Context'
import useStyles from './styles'
import {v4 as uuidv4} from 'uuid'
import {incomeCategories,expenseCategories} from '../../../Constants/categories'
import {formatDate} from '../../../utils/formatDate'
import CustomizedSnakebar from '../../SnackBar/SnakeBar'
const initialState ={
    amount:'',
    category:'',
    type:'Income',
    date:formatDate(new Date())
}
const Form = () => {
    const classes = useStyles();
    const [formData,setFormData] = useState(initialState)
    const {addTransaction} = useContext(ExpenseTrackerContext)
    const [open,setOpen] = useState(false)
    
    const  createTransaction=()=>{
        const transaction = {...formData, amount:Number(formData.amount),id:uuidv4()}
        setOpen(true)
        addTransaction(transaction)
        setFormData(initialState)
    }

   const  selectedCatogories = formData.type ==='Income' ? incomeCategories : expenseCategories
    return (
        <Grid container spacing={2}>
            <CustomizedSnakebar open={open} setOpen={setOpen}/>
            <Grid item xs={12}>
                <Typography align='center' variant='substitle2' gutterBottom>
                    ...
                </Typography>
            </Grid>

            <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value = {formData.type} onChange={e=>setFormData({...formData,type:e.target.value})}>
                            <MenuItem value='Income'>Income</MenuItem>
                            <MenuItem value='Expense'>Expense</MenuItem>
                        </Select>
                    </FormControl>
            </Grid>

            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                        <Select value={formData.category} onChange={e=>setFormData({...formData,category:e.target.value})}>
                            {selectedCatogories.map((c)=>(
                                <MenuItem value={c.type} key={c.type}>
                                    {c.type}
                                </MenuItem>
                            ))}
                        </Select>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField type='number' label='Amount' fullWidth value = {formData.amount} onChange={e=>setFormData({...formData,amount:e.target.value})}></TextField>
            </Grid>
            
            <Grid item xs={6}>
                <TextField type='date' label='Date' value={formData.date} onChange={e=>setFormData({...formData,date:formatDate(e.target.value)})} fullWidth></TextField>
            </Grid>

            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
    )
}

export default Form
