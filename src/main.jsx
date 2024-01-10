import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// ctyle
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// toolkit
import { Provider } from "react-redux";
import { TodoProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TodoProvider>
          <App />
        </TodoProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
