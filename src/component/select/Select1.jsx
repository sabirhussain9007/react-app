import React, { useState } from 'react';
import './Select1.css'; // Import CSS file

function Select1() {
  const [selectedOption, setSelectedOption] = useState('');
  const [showFieldset, setShowFieldset] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleFieldset = () => {
    setShowFieldset(!showFieldset);
  };

  const handleSelectFocus = () => {
    setShowFieldset(true);
  };

  return (
    <div className="select-container">
      {showFieldset ? (
        <fieldset className={showFieldset ? 'green-fieldset show' : 'green-fieldset'}>
          <legend>Age</legend>
          {/* You can add other fields here if needed */}
        </fieldset>
      ) : (
        <label htmlFor="selectOption" onClick={toggleFieldset}>Choose an option:</label>
      )}
      
      <select
        id="selectOption"
        value={selectedOption}
        onChange={handleChange}
        onFocus={handleSelectFocus}
        onBlur={toggleFieldset}
        className="select-dropdown"
      >
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default Select1;
