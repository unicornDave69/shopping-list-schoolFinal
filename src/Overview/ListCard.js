import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { IoIosArchive } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";

function ListCard({ list, backgroundColor, showDetail, handleShowConfirmModal, handleShowArchiveModal, isOwner }) {
  return (
    <>
      <Card
        className="cards"
        style={{
          borderRadius: "50%",
          width: "250px",
          height: "250px",
          textAlign: "center",
          backgroundColor: backgroundColor,
          margin: "10px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "2.3em",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {list.name}
          </Card.Title>
        </Card.Body>
      </Card>

      <div
        className="below buttons"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "5px",
        }}
      >
        {isOwner && (
          <>
            <Button variant="danger" onClick={handleShowConfirmModal} style={{ borderRadius: "50%", width: "75px", height: "75px", margin: "5px" }}>
              <FaTrash size={45} />
            </Button>
            <Button variant="secondary" onClick={handleShowArchiveModal} style={{ borderRadius: "50%", width: "75px", height: "75px", margin: "5px" }}>
              <IoIosArchive size={50} />
            </Button>
          </>
        )}
        <Button variant="primary" onClick={showDetail} style={{ borderRadius: "50%", width: "75px", height: "75px", margin: "5px" }}>
          <CgDetailsMore size={50} />
        </Button>
      </div>
    </>
  );
}

export default ListCard;
