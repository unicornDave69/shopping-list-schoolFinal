import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { DetailContext } from "../Providers/DetailProvider";
import { Modal, Button, Form } from "react-bootstrap";

function AddButton({ itemId }) {
  const { data, handlerMap } = useContext(DetailContext);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCreateItem = () => {
    const newItem = {
      itemId: `sl${Math.random()}`,
      name: itemName,
      quantity: itemQuantity,
    };
    handleCreateItem(newItem);
    console.log(newItem);
    handleCloseModal();
  };

  return (
    <>
      return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formListName">
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                value={itemName}
                onChange={(e) => setListName(e.target.value)}
              />
            </Form.Group>
            <hr />
            <Form.Group controlId="formListName">
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item quantity"
                value={itemQuantity}
                onChange={(e) => setListName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateItem}>
            Save List
          </Button>
        </Modal.Footer>
      </Modal>
      );
    </>
  );
}

export default AddButton;
