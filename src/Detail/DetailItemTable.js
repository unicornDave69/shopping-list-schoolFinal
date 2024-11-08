import React, { useContext } from "react";
import { DetailContext } from "../Providers/DetailProvider";
import Table from "react-bootstrap/Table";
import DeleteItemButton from "./DeleteItemButton";
import AddItemButton from "./AddItemButton";
import ResolveItemButton from "./ResolveItemButton";
import BackToOverview from "./BackToOverviewButton";

function DetailItemTable() {
  const { data, handlerMap } = useContext(DetailContext);
  const { itemList, name, owner, memberList, id } = data;

  return (
    <>
      <BackToOverview />
      <h3>Detail Nákupního Seznamu</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>Název Seznamu</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Vlastník</th>
            <td>{owner}</td>
          </tr>
          <tr>
            <th>Členové</th>
            <td>{memberList.join(", ")}</td>
          </tr>
        </thead>
      </Table>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Položka</th>
            <th>Množství</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr key={item.itemId}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>
                <ResolveItemButton
                  onClick={() =>
                    handlerMap.resolveItem({ itemId: item.itemId })
                  }
                />
              </td>
              <td>
                <DeleteItemButton itemId={item.itemId} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddItemButton
        onClick={() =>
          handlerMap.addItem({
            itemId: `${Math.random()}`,
            itemName: "Nová Položka",
            quantity: 1,
          })
        }
      />
    </>
  );
}

export default DetailItemTable;
