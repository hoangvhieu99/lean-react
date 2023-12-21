import "./App.css";
import ContactList from "./components/ContactReverse/ContactList";
import Container from "./components/Container";
import SyncedInputs from "./components/Input/SyncedInputs";
import TaskAppContext from "./components/TodoListWithReduceAndContext/TaskAppContext";
import AddComponents from "./components/addItems/AddComponents";
import ChangeCss from "./components/changeCss/ChangeCss";
import Clock from "./components/clocks/Clock";
import DisableInputText from "./components/disableInputText/DisableInputText";
import EditProfile from "./components/editProfile/EditProfile";
import HoverLetter from "./components/hover/HoverLetter";
import LiftingState from "./components/liftingState/LiftingState";
import MultiState from "./components/multiState/MultiState";
import Gallery from "./components/nextImages/Gallery";
import Messenger from "./components/reducerChatBox/Messenger";
import TaskApp from "./components/reducerTodoList/TaskApp";
import ListImages from "./components/replacePropdrillingWithContext/ListImages";
import ContactManager from "./components/resetDetailForm/ContactManager";
import SwapField from "./components/reverseInput/SwapField";
import SearchPage from "./components/search/SearchPage";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <Container>
        <AddComponents />
        <ChangeCss />
        <EditProfile />
        <Clock />
        <TodoList />
        <HoverLetter />
        <MultiState />
        <LiftingState />
        <SyncedInputs />
        <SearchPage />
        <DisableInputText />
        <SwapField />
        <ContactManager />
        <Gallery />
        <ContactList />
        <TaskApp />
        <Messenger />
        <ListImages />
        <TaskAppContext />
      </Container>
    </div>
  );
}

export default App;
