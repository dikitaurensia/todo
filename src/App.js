import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Body from "./containers/body";
import Header from "./containers/header";
import { loadTodoDocs } from "./store/action/todo";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodoDocs());
  }, []);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
