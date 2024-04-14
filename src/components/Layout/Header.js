import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/luisa-brimble-2RrBE90w0T8-unsplash.jpg';
import classes from './Header.module.css'

const Header = props => {
    return( 
    <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>

        <div className={classes['main-image']}>
            <img src={mealsImage} alt="table full of delicious food"/>
        </div>
    </Fragment>
    );
};

export default Header;