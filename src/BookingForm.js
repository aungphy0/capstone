import { useState, useReducer, useEffect } from "react";
import React from "react";
import {fetchAPI, submitAPI} from "./AvaTimeAPI";


const updateTimes = (state, action) => {
    if(action.type === "17:00") return {availableTimes: state.availableTimes.filter(
        time => time !== "17:00"
    )};
    if(action.type === '18:00') return {availableTimes: state.availableTimes.filter(
        time => time !== '18:00'
    )};
    if(action.type === '19:00') return {availableTimes: state.availableTimes.filter(
        time => time !== '19:00'
    )};
    if(action.type === '20:00') return {availableTimes: state.availableTimes.filter(
        time => time !== '20:00'
    )};
    if(action.type === '21:00') return {availableTimes: state.availableTimes.filter(
        time => time !== '21:00'
    )};
    if(action.type === '22:00') return {availableTimes: state.availableTimes.filter(
        time => time !== '22:00'
    )};
    return state;
}

const BookingForm = () => {

    const [date, setDate] = useState("");

    const [availableTimes, setAvailableTimes] = useState([""]);

    const times = fetchAPI(new Date(date));

    // console.log(times)
    useEffect( () => {
        setAvailableTimes(times)
    },[date])

    const [totalGuest, setTotalGuest] = useState(1);

    const [occasion, setOccasion] = useState("");

    const [state, dispatch] = useReducer(updateTimes, availableTimes)

    console.log(state)

    function handleDate(e1){
        setDate(e1.target.value)
    }

    function handleAvailableTimes(){
        setAvailableTimes(availableTimes)
    }

    function handleGuest(e3){
        setTotalGuest(e3.target.value)
    }

    // function handleFormGuest(e3){
    //     setFormValue( value => {
    //         return ({
    //             ...value,
    //             totalGuest: e3.target.value,
    //         });
    //     });
    // }

    function handleOccasion(e4){
        setOccasion(e4.target.value)
    }
    
    console.log(new Date(date));
    console.log("date : " + date);
    console.log("time : " + availableTimes);
    console.log("guests : " + totalGuest);
    console.log("occasion : " + occasion);

    return (
        <form className="booking-form">
            {/* <h4>{formValue.availableTimes}</h4> */}
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleDate}/>
            <label for="res-time">Choose time</label>
            <select id="res-time ">
                {availableTimes.map( time => {
                    return <option onChange={() => dispatch({type: time})}>{time}</option> })

                }
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleGuest}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" onChange={handleOccasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input onclick={handleAvailableTimes} type="submit" value="Make Your reservation"/>
        </form>
    );
};

export default BookingForm;