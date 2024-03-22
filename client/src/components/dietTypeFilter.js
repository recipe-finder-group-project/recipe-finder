import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const DietTypeFilter = ({ onSelect }) => {
  const [selectedDiet, setSelectedDiet] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedDiet(option);
    onSelect(option);
  };

  return (
    <ButtonGroup className="mb-2 buttons-container">
      {['Vegan', 'Vegetarian', 'Mediterranean'].map((diet) => (
        <Button
        className='button button-diet'
          key={diet}
          variant={selectedDiet === diet ? 'orange' : 'outline-orange'}
          onClick={() => handleOptionSelect(diet)}
        >
          {diet}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default DietTypeFilter;
