import React from 'react';

const dietTypeFilter = ({ onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(option);
  };

  return (
    <div>
      <button onClick={() => handleOptionSelect('Vegan')}>Vegan</button>
      <button onClick={() => handleOptionSelect('Vegetarian')}>Vegetarian</button>
      <button onClick={() => handleOptionSelect('Mediterranean')}>Mediterranean</button>
    </div>
  );
};

export default dietTypeFilter;
