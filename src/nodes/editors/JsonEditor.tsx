import React from "react";
import { NodeProps } from "@oloren/core";
import Editor from "./Editor";

export default function Base(props: NodeProps<string>) {
  return <Editor {...props} label="JSON Editor" language="json" />;
}
