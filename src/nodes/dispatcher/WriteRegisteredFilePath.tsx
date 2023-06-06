import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { NodeProps } from "@oloren/core";
import { Button, Input, Typography } from "antd";
import React from "react";

type SelectPathData = {
  path: string;
};

function Base({ node, setNode }: NodeProps<SelectPathData>) {
  const path = (node.data as SelectPathData).path;

  const setPath = (newPath: (string | number)[]) => {
    setNode({
      ...node,
      data: {
        ...node.data,
        path: newPath,
      },
    });
  };

  return (
    <div tw="w-full flex flex-col space-y-2">
      <Typography.Text tw="font-bold">Write Registered File</Typography.Text>
      <Input tw="w-full" value={path} onChange={(e) => setPath(e.target.value as string)} />
    </div>
  );
}

export default Base;
