import React from "react";
import { UserProvider } from "../Providers/UserProvider";
import DetailProvider from "../Providers/DetailProvider";
import Table from "./DetailItemTable";

function Detail() {
  return (
    <UserProvider>
      <DetailProvider>
        <Table />
      </DetailProvider>
    </UserProvider>
  );
}

export default Detail;
