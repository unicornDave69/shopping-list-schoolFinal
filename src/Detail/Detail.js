import React from "react";
import { UserProvider } from "../Providers/UserProvider";
import DetailProvider from "../Providers/DetailProvider";
import OverviewProvider from "../Providers/OverviewProvider";
import DetailItemTable from "./DetailItemTable";

function Detail() {
  return (
    <UserProvider>
      <OverviewProvider>
        <DetailProvider>
          <DetailItemTable />
        </DetailProvider>
      </OverviewProvider>
    </UserProvider>
  );
}

export default Detail;
