import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { Button, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useEffect } from "react";

function Applet({
  outputs,
  setOutputs,
}: // @ts-ignore
ApplicationProps<{}, [], [File[]]>) {
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);

  return (
    <div className="w-full flex flex-col space-y-2">
      {uploadedFiles.length > 0 ? <div></div> : null} {/* Triggers a refresh in height */}
      <Upload.Dragger
        multiple
        onChange={({ file }) => {
          const f = file as RcFile;
          setUploadedFiles(prevFiles => [...prevFiles, f]);
        }}
        customRequest={({ file, onSuccess }) => {
          const f = file as RcFile;
          setOutputs(prevOutputs => {prevOutputs ? [...prevOutputs, f] : [f]});
          if (onSuccess) onSuccess({});
        }}
      >
        <Button icon={<UploadOutlined />}>Upload Files</Button>
      </Upload.Dragger>
    </div>
  );
}

export default Applet;
