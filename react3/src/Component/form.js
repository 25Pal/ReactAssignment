import { useState } from "react"
import React from "react"

const Registration = function () {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [gender,setGender]=useState('');
    const [country,setCountry]=useState('');
    const [marketing,setMarketing]=useState(false)

    function handleSubmit(e){
        e.preventDefault();
        if(firstName && lastName&& gender&& country && marketing){
            console.log(firstName);
            console.log(lastName);
            console.log(gender);
            console.log(country)
            console.log(marketing);

        }else{
            alert("Please enter all the details !!!")
        }

    }

    return (
        <div className="Block" style={{ display: "flex", justifyContent: "center", marginTop: "200px" }}>
            <form onSubmit={handleSubmit}>
        <section>
          <label>First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </section>
        <section>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </section>
        <section>
          <label>Gender</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            value="male"
            checked={gender === 'male'}
          />
          Male
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            value="female"
            checked={gender === 'female'}
          />
          Female
        </section>
        <section>
          <label>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {/* <option>Select an option...</option> */}
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="UK">UK</option>
          </select>
        </section>
        <section>
          <label>Do you want to receive marketing emails?</label>
          <input
            type="checkbox"
            value={marketing}
            onChange={() => setMarketing(!marketing)}
          />
        </section>
        <button type="submit">Submit</button>
      </form>

        </div>
    )
}

export default Registration