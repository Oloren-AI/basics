import { ApplicationProps } from "@oloren/core";
import React, { useState, useEffect } from "react";
import { Select } from "antd";

function Applet({
  inputs,
  setOutputs,
}: ApplicationProps<string, [{ options: string[] }], [string]>) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  // We are setting output whenever selected option changes
  useEffect(() => {
    setOutputs([selectedOption]);
  }, [selectedOption]);

  // Select onChange handler
  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div style={{width: 400, height:800}}>
      <Select 
        style={{ width: 320 }} 
        onChange={handleChange} 
        placeholder="Select a user">
        {inputs[0].map((option, index) => (
          <Select.Option key={index} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}

export default Applet;
