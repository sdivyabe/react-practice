import "./App.css";
import Classthis from "./components/Classthis";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Propsusing from "./components/Propsusing";
import ClassClick from "./NewComponents/ClassClick";
import EventBind from "./NewComponents/EventBind";
import FunctionClick from "./NewComponents/FunctionClick";
import ParentComponent from "./NewComponents/ParentCompoent";
import UserGreetin from "./NewComponents/UserGreetin";

function App() {              //functional component
  return (
    <div className="App">
      {/* <Greet />
      <Hello name="Mahi" age="2.6 yrs" />
      <Propsusing name="Guru">
        <p>He likes chocolate</p>
      </Propsusing>
      <Message />
      <Classthis />
      <Counter /> */}
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreetin />
    </div>
  );
}

export default App;
