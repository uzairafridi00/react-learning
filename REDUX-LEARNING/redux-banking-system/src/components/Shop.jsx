import React from "react";
import { useDispatch} from "react-redux";

import { withdraw, deposit } from "../features/depositwithdraw";

function Shop() {

  
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(withdraw(50))}>-</button>
        Add to Cart
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(deposit(50))}>+</button>
      </div>
    </>
  );
}

export default Shop;
