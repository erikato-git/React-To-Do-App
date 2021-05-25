import './App.css';
// import TODOLIST from './components/TodoList';
import ADD_TODO_ITEM from './components/AddTodoItem';
import DISPLAYTODOLIST from './components/DisplayTodoList';




/*
    1. add todo (TJEK)
    2. display todos 
    3. cross off todo
    4. show numbers of active todos
    5. filter all/active/complete
    6. delete todo
    7. delete all complete
        7.1 only show if at least one is complete
    8. button to toggle all on/off
*/





function App() {
  return (
    <div className="App">
      <header className="App-header">
        < ADD_TODO_ITEM />
        < DISPLAYTODOLIST />

      </header>
    </div>
  );
}

export default App;
