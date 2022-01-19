import { Main } from "./components/Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/CombineReducers";

import { Kangaroo } from "./components/Games/Kangaroo";
import { Memory } from "./components/Games/Memory";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      
      <Memory />


      {/*
      <Main />
      */}
    </Provider>
  );
}

export default App;
