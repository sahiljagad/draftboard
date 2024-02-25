import { useState } from "react";
import Select from "react-dropdown-select";

const CheckboxDropdown = () => {
  const options = [
    {
      value: 1,
      label: "RB",
      key: 1,
    },
    {
      value: 2,
      label: "WR",
      key: 2,
    },
    {
      value: 3,
      label: "TE",
      key: 3,
    },
    {
      value: 4,
      label: "QB",
      key: 4,
    },
    {
      value: 5,
      label: "K",
      key: 5,
    },
  ];

  const [, setValues] = useState(options);

  return (
    <div className='player-filter'>
      <Select
        options={options}
        onChange={(values) => setValues(values)}
        values={options}
        keepSelectedInList
        multi
      />
    </div>
  );
};

export default CheckboxDropdown;
