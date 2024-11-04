import Button from "react-bootstrap/Button";

function AddRemoveButtons() {
  return (
    <>
      <Button variant="primary">Resolve</Button>{" "}
      <Button variant="success">Add</Button>{" "}
      <Button variant="warning">Delete</Button>{" "}
    </>
  );
}

export default AddRemoveButtons;
