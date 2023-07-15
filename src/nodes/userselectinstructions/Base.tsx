import { NodeProps } from "@oloren/core";
import React from "react";
import { Typography } from "antd";

function Base({}: NodeProps<string>) {
  return (
    <div>
      <div><Typography.Text tw="font-bold">User Select</Typography.Text></div>
      
      <Typography.Text tw="text-sm">This node allows the user to select a value from a list of strings (first input). The second input is the instruction text that is displayed above the dropdown displayed to the user.</Typography.Text>
    </div>
  );
}

export default Base;
