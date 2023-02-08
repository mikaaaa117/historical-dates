import "./App.scss";
import { useState } from "react";
import { data } from "./data";
import { BrowserView, MobileView } from "react-device-detect";
import { Browser } from "./pages/Browser/Browser";
import { Mobile } from "./pages/Mobile/Mobile";

export const App = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <BrowserView>
        <Browser data={data} page={page} setPage={setPage} />
      </BrowserView>
      <MobileView>
        <Mobile data={data} page={page} setPage={setPage} />
      </MobileView>
    </>
  );
};
