import classes from './MealItem.module.css';

const MealItem = (props) => {
    const price = props.price ? `$${props.price.toFixed(2)}` : 'Price not available';
    return (
        <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.descripton}</div>
            <div className={classes.price}>{price}</div>
        </div>
        </li>
    );
};

export default MealItem;