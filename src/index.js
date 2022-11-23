import React from "react";
    import { createRoot } from "react-dom";
    //import Todolist from "./Todolist";
    import "./index.css";
    import App from "./App";
    const root = createRoot(
        document.getElementById("root")
    );
    root.render(
       <React.StrictMode>
          <App />
       </React.StrictMode>
    );
    