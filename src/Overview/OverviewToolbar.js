import React, { useState, useContext, useRef } from "react";
import { OverviewContext } from "../Providers/OverviewProvider";
import { UserContext } from "../Providers/UserProvider";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArchive } from "react-icons/io";

import WelcomeMessage from "./WelcomeMessage";
import IconButtons from "./IconButtons";
import CreateListModal from "./CreateListModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import ConfirmArchiveModal from "./ConfirmArchiveModal";
import ListCard from "./ListCard";
import ListDetailTable from "./ListDetailTable";

function Toolbar() {
  const { handleCreate, handleDelete, handleArchive, filteredOV, showArchived, setShowArchived } = useContext(OverviewContext);
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

  const colors = ["#F0F8FF", "#FAEBD7", "#F0FFFF", "#F5F5DC", "#FFEBCD", "#DEB887", "#D2691E", "#9ACD32", "#F5F5F5", "#F5DEB3", "#40E0D0", "#C0C0C0", "#F4A460", "#B0E0E6", "#FFA500"];
  const listColorsRef = useRef({});

  const getColorForList = (listId) => {
    if (!listColorsRef.current[listId]) {
      listColorsRef.current[listId] = colors[Math.floor(Math.random() * colors.length)];
    }
    return listColorsRef.current[listId];
  };

  return (
    <Container>
      <WelcomeMessage userName={userMap[loggedInUser]?.name} />

      <IconButtons
        handleShowModal={() => setShowModal(true)}
        setShowArchived={setShowArchived}
        showArchived={showArchived}
      />

      <CreateListModal
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
        listName={listName}
        setListName={setListName}
        selectedMembers={selectedMembers}
        setSelectedMembers={setSelectedMembers}
        userMap={userMap}
        loggedInUser={loggedInUser}
        handleSaveList={() => {
          const newList = { id: `sl${Math.random()}`, name: listName, owner: loggedInUser, memberList: selectedMembers };
          handleCreate(newList);
          console.log(newList);
          setShowModal(false);
        }}
      />

      <ConfirmDeleteModal
        showConfirmModal={showConfirmModal}
        handleCloseConfirmModal={() => setShowConfirmModal(false)}
        listToDelete={listToDelete}
        confirmDelete={() => {
          handleDelete(listToDelete.id);
          setShowConfirmModal(false);
        }}
      />

      <ConfirmArchiveModal
        showArchiveModal={showArchiveModal}
        handleCloseArchiveModal={() => setShowArchiveModal(false)}
        listToArchive={listToArchive}
        confirmArchive={() => {
          handleArchive(listToArchive.id);
          setShowArchiveModal(false);
        }}
      />

      <Row className="mt-4">
        {filteredOV.map(
          (list, index) =>
            (list.memberList.includes(loggedInUser) || list.owner === loggedInUser) && (
              <Col key={index} sm={6} md={4} lg={3} className="d-flex flex-column align-items-center">
                <ListCard
                  list={list}
                  backgroundColor={getColorForList(list.id)}
                  showDetail={() => {
                    setSelectedList(list);
                    setShowTable(true);
                  }}
                  handleShowConfirmModal={() => setListToDelete(list)}
                  handleShowArchiveModal={() => setListToArchive(list)}
                  isOwner={list.owner === loggedInUser}
                />
              </Col>
            )
        )}
      </Row>

      {showTable && selectedList && (
        <ListDetailTable
          selectedList={selectedList}
          userMap={userMap}
          hideTable={() => setShowTable(false)}
        />
      )}
    </Container>
  );
}

export default Toolbar;
