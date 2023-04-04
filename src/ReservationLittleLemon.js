import React from "react";
import BookingTable from './BookingTable';

// const reducer = (state, action) => {
//     if(action.type === 'buy_ingredients') return {money: state.money - 10};
//     if(action.type === 'sell_a_meal') return {money: state.money + 10};
//     return state;
// }


export default function ReservationLittleLemon() {

    // const initialState = {money: 100};
    // const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BookingTable />
        // <div className="reservation-page">
        //     <h1>Wallet: {state.money}</h1>
        //     <div>
        //         <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button>
        //         <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer</button>
        //     </div>
        // </div>
    )
}