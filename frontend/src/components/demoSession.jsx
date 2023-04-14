import React from 'react'
import { useNavigate } from 'react-router-dom';

const DemoSession = () => {
    const navigate = useNavigate();

    const sumbitHandler = (e) =>{
        navigate("/course");
    }

  return (
    <div>
      <div id="demo-session">
        <div>
            <h1>Book your Free Demo Session</h1>
            <p>Share your information for a call back</p>
        </div>
        <div>
            <p>All the fields are mandatory <span>*</span></p>
            <form onSubmit={sumbitHandler}>
                <input type="text" placeholder='Name' required />
                <div>
                    <input type="tel" placeholder='Mobile Number' required />
                    <select>
                        <option value="">Class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <input type="submit" value={"SUBMIT REQUEST"} />
            </form>
        </div>
      </div>
    </div>
  )
}

export default DemoSession
