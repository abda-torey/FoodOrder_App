import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const[amountIsValid, setAmountIsValid] = useState(true)
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 0){
        return;
        setAmountIsValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref = {amountInputRef}
        label="Amount"
        input={{
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Amount That Is Valid</p>}
    </form>
  );
};

export default MealItemForm;
