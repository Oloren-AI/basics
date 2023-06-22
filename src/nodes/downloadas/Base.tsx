import { NodeProps } from "@oloren/core";
import React from "react";
import { Input, Typography } from "antd";

export type NodeData = {
  initial: string;
}

function Base({node, setNode}: NodeProps<NodeData>) {
  return (
    <div tw="w-[400px]">
      <Typography.Text>Download File As</Typography.Text>
      <Input
        addonBefore="Filename to download as"
        defaultValue="filename.txt"
        onChange={(e)=>{setNode(
          (node) => {
            return {
              ...node,
              data: {
                ...node.data,
                initial: e.target.value,
              }
            }
          }
        )}}
      />
    </div>
  );
}

export default Base;

