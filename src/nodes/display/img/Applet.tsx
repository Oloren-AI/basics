/**
 * This demonstrates the use of "done" functionality and also shows how we can use "hidden" applets
 * to execute some bare minimum backend-like code on the frontend.
 */

import { ApplicationProps } from "@oloren/core";
import { Spin } from "antd";
import React, { useEffect } from "react";

function Applet({
  inputs,
  setOutputs,
}: ApplicationProps<string, [{ url: string }], [string]>) {

  useEffect(() => {
    setOutputs(["done"]);
  }, []);
  const [load, setLoad] = React.useState(false);

  return (
    <div tw="h-fit w-full flex flex-col items-center justify-center">
      {!load ? (
        <div>
          {" "}
          <Spin tip="Loading..." />{" "}
        </div>
      ) : null}
      <img
        onLoad={() => {
          setLoad(true);
        }}
        src={inputs[0].url}
        tw="h-auto mx-auto w-auto max-h-[600px] max-w-full"
      />
    </div>
  );
}

export default Applet;
