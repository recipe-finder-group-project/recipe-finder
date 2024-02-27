import React from 'react';
import "./css/Recipefinder.css"

const mealCategoryFilter = ({ type, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(type, option);
  };

  return (
    <div className="buttons-container">
      <button className='button button-category' onClick={() => handleOptionSelect('Snack')}>Snack</button>
      <button className='button button-category' onClick={() => handleOptionSelect('Breakfast')}>Breakfast</button>
      <button className='button button-category' onClick={() => handleOptionSelect('Lunch')}>Lunch</button>
      <button className='button button-category' onClick={() => handleOptionSelect('Dinner')}>Dinner</button>
    </div>
  );
};

export default mealCategoryFilter;
