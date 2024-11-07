import { createContext, useMemo, useState } from "react";

export const OverviewContext = createContext();

function OverviewProvider({ children }) {
  const [shoppingLists, setShoppingLists] = useState([
    {
      id: `${Math.random()}`,
      name: "Testing list",
      owner: "u1",
      memberList: ["u2", "u3"],
      status: "active",
    },
  ]);
  const [showArchived, setShowArchived] = useState(false);

  const handleCreate = ({ id, name, owner, memberList = [] }) => {
    setShoppingLists((current) => [
      ...current,
      { id, name, owner, memberList, status: "active" },
    ]);
  };

  const handleArchive = (listId) => {
    setShoppingLists((current) => {
      const listToArchive = current.find((list) => list.id === listId);
      if (listToArchive) {
        listToArchive.status = "archived";
      }
      return [...current];
    });
  };

  const handleDelete = (listId) => {
    setShoppingLists((current) => current.filter((list) => list.id !== listId));
  };

  const filteredOV = useMemo(() => {
    return shoppingLists.filter((list) =>
      showArchived ? true : list.status === "active"
    );
  }, [showArchived, shoppingLists]);

  return (
    <OverviewContext.Provider
      value={{
        showArchived,
        setShowArchived,
        shoppingLists,
        filteredOV,
        handleCreate,
        handleArchive,
        handleDelete,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
}

export default OverviewProvider;
