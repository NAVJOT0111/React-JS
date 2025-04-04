import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";

function App() {
  return (
    <center class="todo-container">
      <AppName> </AppName>
      <AddTodo></AddTodo>
      <TodoItem1></TodoItem1>

      <div class="container text-center">

        <div class="row">
          <div class="col-6">Go TO College</div>
          <div class="col-4">4/10/2023</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger"> Delete </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
