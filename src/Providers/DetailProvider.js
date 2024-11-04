import { createContext, useMemo, useState } from "react";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const [data, setData] = useState({
    id: `${Math.random()}`,
    name: "Testing list",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: `${Math.random()}`,
        name: "Banana",
        resolved: false,
      },
    ],
  });

  const [showResolved, setShowResolved] = useState(false);

  const dataFilter = useMemo(() => {
    const result = { ...data };
    if (showResolved === false) {
      result.itemList = result.itemList.filter((item) => !item.resolved);
    }
    return result;
  }, [data, showResolved]);

  const value = {
    data: dataFilter,
    handlerMap: {
      addItem: () => {
        setData((current) => {
          current.itemList.push({
            id: Math.random(),
            name: "",
            quantity: null,
            resolved: false,
          });
          return { ...current };
        });
      },
      updateItem: ({ id, name, quantity }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );

          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            name,
            quantity,
          };
          return { ...current };
        });
      },
      updateListName: ({ name }) => {
        setData((current) => ({
          ...current,
          name,
        }));
      },
      resolveItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            resolved: !current.itemList[itemIndex].resolved,
          };
          return { ...current };
        });
      },
      deleteItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList.splice(itemIndex, 1);
          return { ...current };
        });
      },
      addMember: ({ memberId }) => {
        setData((current) => {
          if (!current.memberList.includes(memberId)) {
            current.memberList.push(memberId);
          }
          return { ...current };
        });
      },

      removeMember: ({ memberId }) => {
        setData((current) => {
          const memberIndex = current.memberList.findIndex(
            (member) => member.id === memberId
          );
          if (memberIndex > -1) {
            current.memberList.splice(memberIndex, 1);
          }
          return { ...current };
        });
      },
    },
    showResolved,
    toggleShowResolved: () => setShowResolved((current) => !current),
  };

  return (
    <DetailContext.Provider value={value}>{children}</DetailContext.Provider>
  );
}

export default DetailProvider;
