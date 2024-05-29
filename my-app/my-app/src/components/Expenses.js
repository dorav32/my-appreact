

import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    return (
        <div className='expenses'>
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    onAddEntry={props.onAddEntry} // Pass the function to each item
                />
            ))}
        </div>
    );
}
export default Expenses