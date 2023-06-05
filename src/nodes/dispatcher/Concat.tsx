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
      <Typography.Text tw="font-bold">Concat</Typography.Text>
      <Typography.Text>
        Concatenates all inputs into a list, which is given as a single output.
      </Typography.Text>
    </div>
  );
}

export default Base;
