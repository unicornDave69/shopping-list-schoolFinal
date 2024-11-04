import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";

function AddRemoveMemberButtons({ memberId }) {
  const { handlerMap } = useContext(DetailContext);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => handlerMap.addMember({ memberId })}
      >
        Add member
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => handlerMap.removeMember({ memberId })}
      >
        Delete member
      </Button>{" "}
    </>
  );
}

export default AddRemoveMemberButtons;
