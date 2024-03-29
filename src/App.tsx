import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import TextField from "./components/TextField";

function App() {
  const [countryName, setListCountryName] = useState<string[]>([]);

  let [countryNameToAdd, setNameCountryToAdd] = useState<string>()

  const addListCountry = (countryName: string) => {
    setListCountryName((oldList) => [...oldList, countryName]);
  };

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={countryName}
        heading="Country name"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <TextField></TextField>
      <Button
        buttonName="Add"
        buttonColor="primary"
        onButtonClicked={() => {
          addListCountry("huan");
        }}
      ></Button>
    </>
  );
}

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

export default App;
