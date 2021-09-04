import './App.css';
import { Input } from "./components/Input"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { TodoList } from "./components/TodoList"


function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <TodoList />
        <Input />
      </Provider>
    </div>
  );
}

export default App;
