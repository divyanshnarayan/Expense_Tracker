import './ExpenseItem.css';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = function () {
    //     setTitle('Updated');
    //     console.log(`${title}`);
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change_Title</button> */}
        </Card>
    )
}

export default ExpenseItem;