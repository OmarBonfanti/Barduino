import { useState } from 'react';
import "./MainDrink.css"

const MainDrink = () => {
  const [description, setDescription] = useState('Description 1');

  const handleSelectChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className='main-drink'> 
      <img src="Drink/Cubalibre.jpg"  />
      <h2>Title Here</h2>
      <select value={description} onChange={handleSelectChange}>
        <option value="Description 1">Description 1</option>
        <option value="Description 2">Description 2</option>
        <option value="Description 3">Description 3</option>
      </select>
      <p>{description}</p>
    </div>
  );
};

export default MainDrink;