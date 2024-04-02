import { ChangeEvent, SyntheticEvent, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/crud_list/Button";
import ListGroup from "./components/crud_list/ListGroup";
import TextField from "./components/crud_list/TextField";
import "./App.css";
import CrudListIndex from "./components/crud_list/CrudListIndex";
/// The app with a list view, the text field and the button add,
/// when you input to the field and press add button, the value will add to this list

function App() {
  return <CrudListIndex></CrudListIndex>;
}

/// The app with a button, when you clicked this button, the dialog will show

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <>
//       {alertVisible && (
//         <Alert
//           message="Hello world"
//           onClose={() => setAlertVisibility(false)}
//         ></Alert>
//       )}
//       <Button
//         buttonName="This is button name"
//         onButtonClicked={() => setAlertVisibility(true)}
//         buttonColor="danger"
//       ></Button>
//     </>
//   );
// }

///The counter app
// function App() {
//   const [count, setCount] = useState<number>(0);

//   const incrementTheCount = () => {
//     setCount(count + 1);
//   };

//   const decrementTheCount = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const resetTheCount = () => {
//     setCount(0);
//   };

//   return (
//     <>
//       <h1 className="center-the-component big-font">{count}</h1>

//       <div className="center-the-component">
//         <button
//           className="btn btn-outline-primarybtn btn-outline-primary"
//           onClick={() => decrementTheCount()}
//         >
//           Decrement
//         </button>
//         <button
//           className="btn btn-outline-primarybtn btn-outline-primary"
//           onClick={() => resetTheCount()}
//         >
//           Reset
//         </button>
//         <button
//           className="btn btn-outline-primarybtn btn-outline-primary"
//           onClick={() => incrementTheCount()}
//         >
//           Icremennt
//         </button>
//       </div>
//     </>
//   );
// }

export default App;
