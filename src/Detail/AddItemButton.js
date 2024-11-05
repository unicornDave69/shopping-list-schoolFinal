import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";

function AddButton({ itemId }) {
  const { handlerMap } = useContext(DetailContext);

  return (
    <>
      <Button variant="success" onClick={() => handlerMap.addItem()}>
        Add
      </Button>{" "}
    </>
  );
}

export default AddButton;
