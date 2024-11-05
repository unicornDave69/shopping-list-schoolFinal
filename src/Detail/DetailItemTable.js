import React, { useContext } from "react";
import { DetailContext } from "../Providers/DetailProvider";
import Table from "react-bootstrap/Table";
import DeleteItemButton from "./DeleteItemButton";
import AddItemButton from "./AddItemButton";
import ResolveItemButton from "./ResolveItemButton";
import AddMemberButton from "./AddMemberButton";
import DeleteMemberButton from "./DeleteMemberButton";

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
              <AddItemButton
                action="add"
                itemId={item.itemId}
                resolved={item.itemId}
                onClick={() => handlerMap.addItem({ itemId: item.itemId })}
              />
            </td>
            <td>
              <ResolveItemButton
                action="resolve"
                itemId={item.itemId}
                resolved={item.resolved}
                onClick={() => handlerMap.resolveItem({ itemId: item.itemId })}
              />
            </td>
            <td>
              <DeleteItemButton
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
