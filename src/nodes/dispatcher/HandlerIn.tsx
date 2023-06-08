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
      <Typography.Text tw="font-bold">Handler In</Typography.Text>
      <Typography.Text>
        The first input is where an error may be, the second input is the value to return if there is an error.
      </Typography.Text>
    </div>
  );
}

export default Base;
