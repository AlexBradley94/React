import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2021, 6, 21);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 53.40;

    return (
        <div className="expense-item">
            <p>Date</p>
            <div className="expense-item__description">
                <h2>Title</h2>
                <div className="expense-item__price">Amount</div>
            </div>
        </div>
        
    );
}

export default ExpenseItem;