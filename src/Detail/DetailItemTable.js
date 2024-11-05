import React, { useContext } from "react";
import { DetailContext } from "../Providers/DetailProvider";
import Table from "react-bootstrap/Table";
import AddRemoveMemberButtons from "./AddRemoveMember";
import AddResolveDeleteItemButtons from "./AddResolveDelteItem";

function DetailItemTable() {
  const { data, handlerMap } = useContext(DetailContext);
  const { itemList } = data;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Add</th>
          <th>Resolve</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {itemList.map((item) => (
          <tr key={item.itemId}>
            <td>{item.itemName}</td>
            <td>{item.quantity}</td>
            <td>
              <AddRemoveMemberButtons itemId={item.itemId} />
            </td>
            <td>
              <AddResolveDeleteItemButtons
                action="resolve"
                itemId={item.itemId}
                resolved={item.resolved}
                onClick={() => handlerMap.resolveItem({ itemId: item.itemId })}
              />
            </td>
            <td>
              <AddResolveDeleteItemButtons
                action="delete"
                itemId={item.itemId}
                onClick={() => handlerMap.deleteItem({ itemId: item.itemId })}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DetailItemTable;
