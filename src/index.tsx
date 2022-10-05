import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { rootReducer, IRootReducer } from "./shared/reducers/index";
import { createStore } from "redux";
import DevTools from "./devtools";
import { composeWithDevTools } from 'redux-devtools-extension';
// const devTools = process.env.NODE_ENV === "development" ? <DevTools /> : null;
const queryClient = new QueryClient();
const initialize = (initialState?: IRootReducer, middlewares = []) =>
  createStore(rootReducer, { showSlice: { items: [] } },composeWithDevTools());
const store = initialize();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DevTools />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
