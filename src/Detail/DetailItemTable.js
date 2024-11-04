import React from "react";
import { Table, Button } from "react-bootstrap";

const showDetail = (list) => {
    setSelectedList(list);
    setShowTable(true);
  };

  {showTable && selectedList && (
    <ListDetailTable
      selectedList={selectedList}
      userMap={userMap}
      hideTable={() => setShowTable(false)}
    />
  )}
  showDetail={() => showDetail(list)}

  const [showTable, setShowTable] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

function ListDetailTable({ selectedList, userMap, hideTable }) {
  return (
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
      <Button variant="secondary" onClick={hideTable}>
        Hide detail
      </Button>
    </>
  );
}

export default ListDetailTable;
