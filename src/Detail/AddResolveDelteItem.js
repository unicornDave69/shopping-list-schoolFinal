import Button from "react-bootstrap/Button";

function AddResolveDeleteItemButtons() {
  return (
    <>
      <Button variant="primary">Resolve</Button>{" "}
      <Button variant="success">Add</Button>{" "}
      <Button variant="warning">Delete</Button>{" "}
    </>
  );
}

export default AddResolveDeleteItemButtons;
