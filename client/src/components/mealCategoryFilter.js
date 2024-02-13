import React from 'react';

const mealCategoryFilter = ({ type, onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(type, option);
  };

  return (
    <div>
      <button onClick={() => handleOptionSelect('Snack')}>Snack</button>
      <button onClick={() => handleOptionSelect('Breakfast')}>Breakfast</button>
      <button onClick={() => handleOptionSelect('Lunch')}>Lunch</button>
      <button onClick={() => handleOptionSelect('Dinner')}>Dinner</button>
    </div>
  );
};

export default mealCategoryFilter;
