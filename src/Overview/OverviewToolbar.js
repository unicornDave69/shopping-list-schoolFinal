import React, { useState, useContext, useRef } from "react";
import { OverviewContext } from "../Providers/OverviewProvider";
import { UserContext } from "../Providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArchive } from "react-icons/io";
import { Dropdown, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

function Toolbar() {
  const {
    handleCreate,
    handleDelete,
    handleArchive,
    filteredOV,
    showArchived,
    setShowArchived,
  } = useContext(OverviewContext);
  const { loggedInUser, userMap } = useContext(UserContext);

  const [showModal, setShowModal] = useState(false);
  const [listName, setListName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [listToDelete, setListToDelete] = useState(null);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
const [listToArchive, setListToArchive] = useState(null); 


  const colors = ["#F0F8FF", "#FAEBD7", "#F0FFFF", "#F5F5DC", "#FFEBCD", "#DEB887", "#D2691E","#9ACD32","#F5F5F5", "#F5DEB3", "#40E0D0", "#C0C0C0", "#F4A460", "#B0E0E6", "#FFA500" ];
  const listColorsRef = useRef({});

  const getColorForList = (listId) => {
    if (!listColorsRef.current[listId]) {
      listColorsRef.current[listId] = colors[Math.floor(Math.random() * colors.length)];
    }
    return listColorsRef.current[listId];
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowConfirmModal = (list) => {
    setListToDelete(list);
    setShowConfirmModal(true);
  };

  const handleCloseConfirmModal = () => setShowConfirmModal(false);

  const confirmDelete = () => {
    if (listToDelete) {
      handleDelete(listToDelete.id);
    }
    handleCloseConfirmModal();
  };

  const handleShowArchiveModal = (list) => {
    setListToArchive(list);
    setShowArchiveModal(true);
  };
  
  const handleCloseArchiveModal = () => setShowArchiveModal(false);
  
  const confirmArchive = () => {
    if (listToArchive) {
      handleArchive(listToArchive.id);
    }
    handleCloseArchiveModal();
  };
  

  const handleSelect = (userId) => {
    setSelectedMembers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  const handleSaveList = () => {
    const newList = {
      id: `sl${Math.random()}`,
      name: listName,
      owner: loggedInUser,
      memberList: selectedMembers,
    };
    handleCreate(newList);
    console.log(newList);
    handleCloseModal();
  };

  const showDetail = (list) => {
    setSelectedList(list);
    setShowTable(true);
  };

  return (
    <Container>
      <div className="welcome" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2>Welcome, {userMap[loggedInUser].name}!</h2>
      </div>

      <div className="icons" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CiCirclePlus onClick={handleShowModal} style={{ cursor: "pointer", color: "green", fontSize: "4em" }} />
        <IoIosArchive
          onClick={() => setShowArchived((prev) => !prev)}
          style={{
            cursor: "pointer",
            color: showArchived ? "black" : "grey",
            fontSize: "4em",
          }}
        />
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Shopping List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formListName">
              <Form.Label>List Name</Form.Label>
              <Form.Control type="text" placeholder="Enter list name" value={listName} onChange={(e) => setListName(e.target.value)} />
            </Form.Group>
            <hr />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-members">
                Vyber členy
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.entries(userMap).map(
                  ([userId, user]) =>
                    userId !== loggedInUser && (
                      <Dropdown.Item key={userId} onClick={() => handleSelect(userId)} active={selectedMembers.includes(userId)}>
                        {user.name}
                      </Dropdown.Item>
                    )
                )}
              </Dropdown.Menu>
            </Dropdown>
            <div className="mt-3">
              {selectedMembers.length > 0 && (
                <div>
                  <strong>Členové:</strong>
                  <ul>
                    {selectedMembers.map((userId) => (
                      <li key={userId}>{userMap[userId].name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveList}>
            Save List
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Potvrzení smazání</Modal.Title>
        </Modal.Header>
        <Modal.Body>Opravdu chcete smazat seznam "{listToDelete?.name}"?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmModal}>
            Zrušit
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Smazat
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showArchiveModal} onHide={handleCloseArchiveModal}>
  <Modal.Header closeButton>
    <Modal.Title>Potvrzení archivace</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Opravdu chcete archivovat seznam "{listToArchive?.name}"?
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseArchiveModal}>
      Zrušit
    </Button>
    <Button variant="secondary" onClick={confirmArchive}>
      Archivovat
    </Button>
  </Modal.Footer>
</Modal>

      <Row className="mt-4">
        {filteredOV.map(
          (list, index) =>
            (list.memberList.includes(loggedInUser) || list.owner === loggedInUser) && (
              <Col key={index} sm={6} md={4} lg={3} className="d-flex flex-column align-items-center">
                <Card
                  className="cards"
                  style={{
                    borderRadius: "50%",
                    width: "250px",
                    height: "250px",
                    textAlign: "center",
                    backgroundColor: getColorForList(list.id),
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
                  className="bellow buttons"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {list.owner === loggedInUser ? (
                    <>
                      <Button
                        variant="danger"
                        onClick={() => handleShowConfirmModal(list)}
                        style={{
                          borderRadius: "50%",
                          width: "75px",
                          height: "75px",
                          margin: "5px",
                        }}
                      >
                        <FaTrash size={45} />
                      </Button>
                      <Button
  variant="secondary"
  onClick={() => handleShowArchiveModal(list)} 
  style={{
    borderRadius: "50%",
    width: "75px",
    height: "75px",
    margin: "5px",
  }}
>
  <IoIosArchive size={50} />
</Button>

                    </>
                  ) : null}
                  <Button
                    variant="primary"
                    onClick={() => showDetail(list)}
                    style={{
                      borderRadius: "50%",
                      width: "75px",
                      height: "75px",
                      margin: "5px",
                    }}
                  >
                    <CgDetailsMore size={50} />
                  </Button>
                </div>
              </Col>
            )
        )}
      </Row>
 {showTable && selectedList && (
        <>
          <Table style={{ margin: "20px" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Název Seznamu</th>
                <th>Vlastník</th>
                <th>Členové</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedList.id}</td>
                <td>{selectedList.name}</td>
                <td>{userMap[selectedList.owner]?.name}</td>
                <td>
                  {selectedList.memberList
                    .map((userId) => userMap[userId]?.name)
                    .join(", ")}
                </td>
              </tr>
            </tbody>
          </Table>
          <Button variant="secondary" onClick={() => setShowTable(false)}>
            Hide detail
          </Button>
        </>
      )}
    </Container>
  );
}

export default Toolbar;
