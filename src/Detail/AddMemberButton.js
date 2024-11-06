import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";

function AddMemberButton({ memberId }) {
  const { handlerMap } = useContext(DetailContext);

  const handleAddMember = () => {
    handlerMap.addMember({
      itemId: Math.random().toString(),
      itemName,
      quantity: parseInt(quantity, 10),
    });
    setItemName("");
    setQuantity("");
    handleCloseModal();
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => handlerMap.addMember({ memberId })}
      >
        Add member
      </Button>{" "}
    </>
  );
}

export default AddMemberButton;
