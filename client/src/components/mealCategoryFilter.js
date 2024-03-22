import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const MealCategoryFilter = ({ type, onSelect }) => {
  const [selectedMeal, setSelectedMeal] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedMeal(option);
    onSelect(type, option);
  };

  return (
    <ButtonGroup className="mb-2 buttons-container">
      {['Snack', 'Breakfast', 'Lunch', 'Dinner'].map((meal) => (
        <Button
        className='button button-category'
          key={meal}
          variant={selectedMeal === meal ? 'orange' : 'outline-orange'}
          onClick={() => handleOptionSelect(meal)}
        >
          {meal}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default MealCategoryFilter;
