import { createContext, useMemo, useState } from "react";

export const DetailContext = createContext();

function DetailProvider({ children }) {
  const [data, setData] = useState({
    id: `${Math.random}`,
    name: "Testing list",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: `${Math.random}`,
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
      updateItem: () => {
        ({ id, name, quantity }) => {
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
        };
      },
      updateName: ({ name }) => {
        setData((current) => {
          current.name = name;
          return { ...current };
        });
      },
    },
  };
}
