import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { NodeProps } from "@oloren/core";
import { Button, Input, Typography } from "antd";
import React from "react";

type InsertPathData = {
  path: (string | number)[];
};

function Base({ node, setNode }: NodeProps<InsertPathData>) {
  const path = (node.data as InsertPathData).path;

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
      <Typography.Text tw="font-bold">Insert Path</Typography.Text>
      {path.map((entry, index) => (
        <Input
          tw="w-full"
          key={index}
          value={entry}
          onChange={(e) => {
            const newPath = [...path];
            newPath[index] = e.target.value;
            setPath(newPath);
          }}
        />
      ))}
      <div tw="flex flex-row w-full space-x-2">
        <Button
          tw="!w-1/2"
          type="default"
          onClick={() => {
            setPath([...path, 0]);
          }}
          icon={<PlusOutlined />}
        />
        <Button
          tw="!w-1/2"
          type="default"
          onClick={() => {
            setPath(path.slice(0, path.length - 1));
          }}
          icon={<MinusOutlined />}
        />
      </div>
    </div>
  );
}

export default Base;
