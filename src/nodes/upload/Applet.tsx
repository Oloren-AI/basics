/**
 * This demonstrates the use of "done" functionality and also shows how we can use "hidden" applets
 * to execute some bare minimum backend-like code on the frontend.
 */

import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { ApplicationProps, Json } from "@oloren/core";
import { Button, Upload } from "antd";
import { RcFile } from "antd/es/upload";
import React, { useEffect } from "react";

function Applet({
  outputs,
  setOutputs,
}: // @ts-ignore
ApplicationProps<{}, [], [File]>) {
  const [uploaded, setUploaded] = React.useState(false);
  return (
    <div className="w-full flex flex-col space-y-2">
      {uploaded ? <div></div> : null} {/* Triggers a refresh in height */}
      <Upload.Dragger
        onChange={() => {
          setUploaded((uploaded) => !uploaded);
        }}
        customRequest={({ file, onSuccess }) => {
          const f = file as RcFile;
          setOutputs([f]);
          if (onSuccess) onSuccess({});
        }}
      >
        <Button icon={<UploadOutlined />}>Upload File</Button>
      </Upload.Dragger>
    </div>
  );
}

export default Applet;
