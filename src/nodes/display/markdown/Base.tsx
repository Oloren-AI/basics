import { NodeProps } from "@oloren/core";
import React from "react";
import { Typography } from "antd";

function Base({}: NodeProps<string>) {
  return (
    <div>
      <Typography.Text>Display Markdown</Typography.Text>
    </div>
  );
}

export default Base;
