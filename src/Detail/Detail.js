import React from "react";
import { UserProvider } from "../Providers/UserProvider";
import DetailProvider from "../Providers/DetailProvider";
import OverviewProvider from "../Providers/OverviewProvider";
import Table from "./DetailItemTable";

function Detail() {
  return (
    <UserProvider>
      <OverviewProvider>
        <DetailProvider>
          <Table />
        </DetailProvider>
      </OverviewProvider>
    </UserProvider>
  );
}

export default Detail;
