import { NodeProps } from "@oloren/core";
import React from "react";
import { Input, InputNumber, Typography } from "antd";

type MapData = {
  batch_size: number;
  depth: number;
};

function Base({ node, setNode }: NodeProps<MapData>) {
  const data = node.data as MapData;
  return (
    <div tw="flex flex-col space-y-2">
      <Typography.Text tw="font-bold">Write Registered File</Typography.Text>
      <Typography.Text>
        The first input is the file you want to register, the second input the path.
      </Typography.Text>
    </div>
  );
}

export default Base;
