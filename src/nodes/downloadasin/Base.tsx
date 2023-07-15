import { NodeProps } from "@oloren/core";
import React from "react";
import { Input, Typography } from "antd";

export type NodeData = {
  initial: string;
}

function Base({node, setNode}: NodeProps<NodeData>) {
  return (
    <div tw="w-[400px]">
      <Typography.Text>Download File As In (file is first input, file name is the second input)</Typography.Text>
    </div>
  );
}

export default Base;

