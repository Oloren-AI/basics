import { NodeProps } from "@oloren/core";
import React from "react";
import { Typography } from "antd";

function Base({}: NodeProps<string>) {
  return (
    <div>
      <Typography.Text>Upload Image (compressed)</Typography.Text>
    </div>
  );
}

export default Base;
