import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";

function ResolveItemButton({ itemId }) {
  const { handlerMap } = useContext(DetailContext);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => handlerMap.resolveItem({ id: itemId })}
      >
        Resolve
      </Button>{" "}
    </>
  );
}

export default ResolveItemButton;
