import { useState } from "react";
import React from "react";

const BookingForm = () => {
    const [formValue, setFormValue] = useState({
        date: "",
        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        totalGuest: "",
        occasion: "",
    });

    function handleFormDate(e1){
        setFormValue( value => {
            return ({
                ...value,
                date: e1.target.value,
            });
        });
    }

    function handleFormTime(e2){
        setFormValue( value => {
            return ({
                ...value,
                time: e2.target.value,
            });
        });
    }

    function handleFormGuest(e3){
        setFormValue( value => {
            return ({
                ...value,
                totalGuest: e3.target.value,
            });
        });
    }

    function handleFormOccasion(e4){
        setFormValue( value => {
            return ({
                ...value,
                occasion: e4.target.value,
            });
        });
    }

    console.log("date : " + formValue.date);
    console.log("time : " + formValue.time);
    console.log("guests : " + formValue.totalGuest);
    console.log("occasion : " + formValue.occasion);

    return (
        <form className="booking-form">
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleFormDate}/>
            <label for="res-time">Choose time</label>
            <select id="res-time " onChange={handleFormTime}>
                {formValue.availableTimes.map( time => {
                    return <option>{time}</option> })

                }
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleFormGuest}/>
            <label for="occasion">Occasion</label>
            <select id="occasion" onChange={handleFormOccasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
        </form>
    );
};

export default BookingForm;