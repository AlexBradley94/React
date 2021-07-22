import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.expenseitem[0].title}
                amount={props.expenseitem[0].amount}
                date={props.expenseitem[0].date}
            ></ExpenseItem>

            <ExpenseItem
                title={props.expenseitem[1].title}
                amount={props.expenseitem[1].amount}
                date={props.expenseitem[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenseitem[2].title}
                amount={props.expenseitem[2].amount}
                date={props.expenseitem[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.expenseitem[3].title}
                amount={props.expenseitem[3].amount}
                date={props.expenseitem[3].date}
            ></ExpenseItem>
        </Card>

    )
}

export default Expenses;