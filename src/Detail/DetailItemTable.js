import React, { useContext } from "react";
import { DetailContext } from "../Providers/DetailProvider";
import Table from "react-bootstrap/Table";
import AddRemoveMemberButtons from "./AddRemoveMember";
import AddResolveDeleteItemButtons from "./AddResolveDelteItem";

function DetailItemTable() {
  const { data } = useContext(DetailContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.itemList.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <AddResolveDeleteItemButtons itemId={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
      <thead>
        <tr>
          <th>Member</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.memberList.map((member) => (
          <tr key={member}>
            <td>{member}</td>
            <td>
              <AddRemoveMemberButtons memberId={member} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DetailItemTable;
