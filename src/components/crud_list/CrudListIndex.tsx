import React, { ChangeEvent, useState } from "react";
import ListGroup from "./ListGroup";
import TextField from "./TextField";
import Button from "./Button";
import Alert from "./Alert";

const CrudListIndex = () => {
  const [listString, setListString] = useState<string[]>([]);

  const [stringInTextField, setStringInTextField] = useState<string>("");

  const addListString = (countryName: string) => {
    setListString((oldList) => [...oldList, countryName]);
  };

  function handleChangeItem(value: string) {
    setStringInTextField(value);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          message="You do not input anything in the field"
          onClose={() => setAlertVisibility(false)}
        ></Alert>
      )}
      <ListGroup
        items={listString}
        heading="List string"
        onSelectItem={() => {}}
        onClearItem={(index) => {
          setListString((oldList) => {
            const newList = [...oldList];
            newList.splice(index, 1);
            return newList;
          });
        }}
      ></ListGroup>
      <TextField
        onChange={(event) => handleChangeItem(event.target.value)}
        value={stringInTextField}
        onKeyboardPressChange={() => {
          addItem(
            stringInTextField,
            addListString,
            setStringInTextField,
            setAlertVisibility
          );
        }}
      ></TextField>
      <Button
        buttonName="Add"
        buttonColor="primary"
        onButtonClicked={() => {
          addItem(
            stringInTextField,
            addListString,
            setStringInTextField,
            setAlertVisibility
          );
        }}
      ></Button>
    </>
  );
};

export default CrudListIndex;
function addItem(
  stringInTextField: string,
  addListString: (countryName: string) => void,
  setStringInTextField: React.Dispatch<React.SetStateAction<string>>,
  setAlertVisibility: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (stringInTextField !== "") {
    addListString(stringInTextField);
    setStringInTextField("");
  } else {
    setAlertVisibility(true);
  }
}
