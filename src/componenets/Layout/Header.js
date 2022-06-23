import { Fragment } from "react";
import classes from "./Header.module.css";
import mainImg from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Tusmo Meals</h1>
        <HeaderButton onClick = {props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="Delicious food offered" />
      </div>
    </Fragment>
  );
};

export default Header;
