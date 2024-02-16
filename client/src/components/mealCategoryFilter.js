import React from 'react';

const mealCategoryFilter = ({ type, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(type, option);
  };

  return (
    <div className="buttons-container">
      <button className='button' onClick={() => handleOptionSelect('Snack')}>Snack</button>
      <button className='button' onClick={() => handleOptionSelect('Breakfast')}>Breakfast</button>
      <button className='button' onClick={() => handleOptionSelect('Lunch')}>Lunch</button>
      <button className='button' onClick={() => handleOptionSelect('Dinner')}>Dinner</button>
    </div>
  );
};

export default mealCategoryFilter;
