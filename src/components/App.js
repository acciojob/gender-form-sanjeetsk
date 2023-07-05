import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [gender, setGender] = useState('');
  const [size, setSize] = useState('');

  function handleGenderChange(e){
    setGender(e.target.value);
    setSize('');
  }

  function handleSizeChange(e){
    setSize(e.target.value);
  }

  return (
    <div>
        <label htmlFor="gender">Select your gender:</label><br></br>
          <input type="radio" id="male" value="male" onChange={handleGenderChange}/>
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" value="female" onChange={handleGenderChange}/>
          <label htmlFor="female">Female</label>
        <br></br>

        {
          gender === 'male' && (
            <div>
              <label htmlFor="shirt_size">Select your shirt size:</label><br></br>
              <select id="shirt_size" value={size} onChange={handleSizeChange}>
                <option value=''>Select size</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
            </div>
          )
        }

        {
          gender === 'female' && (
            <div>
              <label htmlFor="shirt_size">Select your dress size:</label><br></br>
              <select id="shirt_size" value={size} onChange={handleSizeChange}>
                <option value=''>Select size</option>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='6'>6</option>
              </select>
            </div>
          )
        }

    </div>
  )
}

export default App
