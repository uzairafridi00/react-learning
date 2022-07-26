import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

function Navbar() {

    // console.log(useSelector((store) => {
    //     console.log(store)
    // }))

    const amount = useSelector((store)=> store.cart.amount)

    // or We can use Array distruction technique to directly get the amount value
    // const {amount} = useSelector((store)=> store.cart)

  return (
    <>
        <nav>
            <div className="nav-center">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
