// This module will create a cutom React Hook that we can use to
// make a reusable dropdown component
import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  // ("Animal", "dog", ANIMALS)
  const [state, setState] = useState(defaultState);
  //   const [state, setState] = useState("Animal")
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  //   const id = `use-dropdown-animal`

  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {/* use-dropdown-animal */}
        {label}
        {/* Animal */}
        <select
          id={id}
          //   use-dropdown-animal
          value={state}
          //   dog
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={options.length === 0}
        >
          <option>All</option>
          {options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
