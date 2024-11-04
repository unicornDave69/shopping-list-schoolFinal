import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";

function AddResolveDeleteItemButtons({ itemId }) {
  const { handlerMap } = useContext(DetailContext);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => handlerMap.resolveItem({ id: itemId })}
      >
        Resolve
      </Button>{" "}
      <Button variant="success" onClick={() => handlerMap.addItem()}>
        Add
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => handlerMap.deleteItem({ id: itemId })}
      >
        Delete
      </Button>{" "}
    </>
  );
}

export default AddResolveDeleteItemButtons;
