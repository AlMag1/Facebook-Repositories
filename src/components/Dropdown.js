import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdown = ({ className, toggleName, items, onClick }) => {
  return (
    <UncontrolledDropdown className={className}>
      <DropdownToggle caret>{toggleName}</DropdownToggle>
      <DropdownMenu>
        {items.map((item, index) => (
          <DropdownItem key={index} onClick={onClick}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Dropdown;
