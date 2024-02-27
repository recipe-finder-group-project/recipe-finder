import React from 'react';

const dietTypeFilter = ({ onSelect }) => {
  const handleOptionSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className="buttons-container">
      <button className='button button-diet' onClick={() => handleOptionSelect('Vegan')}>Vegan</button>
      <button className='button button-diet' onClick={() => handleOptionSelect('Vegetarian')}>Vegetarian</button>
      <button className='button button-diet' onClick={() => handleOptionSelect('Mediterranean')}>Mediterranean</button>
    </div>
  );
};

export default dietTypeFilter;
