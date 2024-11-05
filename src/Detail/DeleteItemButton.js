import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";

function DeleteItemButton({ itemId }) {
  const { handlerMap } = useContext(DetailContext);

  return (
    <>
      <Button
        variant="danger"
        onClick={() => handlerMap.deleteItem({ id: itemId })}
      >
        Delete
      </Button>{" "}
    </>
  );
}

export default DeleteItemButton;
