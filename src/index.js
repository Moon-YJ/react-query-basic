import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// React.StrictMode는 console이 두번씩 찍힘(굳이 없어도 됨)
/*
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
*/
