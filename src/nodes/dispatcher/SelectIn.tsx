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
      <Typography.Text tw="font-bold">Select</Typography.Text>
      <Typography.Text>
        The first input is the data you want to select, the second input is a
        list encoding the relevant path.
      </Typography.Text>
    </div>
  );
}

export default Base;
