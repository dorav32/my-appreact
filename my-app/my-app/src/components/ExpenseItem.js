import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React, { useState } from "react";
import Card from './Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandlerServer = () => {
        fetch(`http://localhost:3000/countries/${props.title}/${props.amount}/${props.date}`)
            .then(() => {
                props.onAddEntry({ title: props.title, amount: props.amount, date: props.date }); 
            })
            .catch((err) => console.log(err));
    };

    const clickFunc = () => {
        setTitle("clicked!");
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">{title}</div>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickFunc}>Change Title</button>
            <button onClick={clickHandlerServer}>Add to Server and History</button>
        </Card>
    );
}

export default ExpenseItem;
