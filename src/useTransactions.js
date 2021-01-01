import {useContext} from 'react'
import {ExpenseTrackerContext} from './Context/Context'

import {incomeCategories, expenseCategories, resetCategories} from './Constants/categories'


const useTransactions =(title='Income')=>{
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext)
    const incomeTransction = transactions.filter((t)=> t.type==='Income')
    const expenseTransction = transactions.filter((t)=> t.type==='Expense')

    const totalIncome = incomeTransction.reduce((acc,curVal)=> acc+= curVal.amount,0)
    const totalExpense = expenseTransction.reduce((acc,curVal)=> acc+= curVal.amount,0)
    const Budget = totalIncome -totalExpense
    const transactionsPerType = transactions.filter((t)=>t.type === title);
    const total= transactionsPerType.reduce((acc,CurVal)=> acc+= CurVal.amount,0);
    const categories = title==='Income'? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t)=>{
        const category = categories.find((c)=> c.type ===t.category)

        if(category) category.amount  += t.amount 
    });

    const filteredCategories = categories.filter((c)=>c.amount>0);
    const chartData = {
        datasets:[{
            data: filteredCategories.map((c)=>c.amount),
            backgroundColor: filteredCategories.map(c=>c.color)

        }],
        labels:filteredCategories.map((c)=>c.type)
    }

    return {Budget,total,chartData}
}

export default useTransactions;