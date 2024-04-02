import { ChangeEvent } from "react";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyboardPressChange: () => void;
  value: string;
}

const TextField = (props: Props) => {
  return (
    <input
      onChange={(event) => props.onChange(event)}
      value={props.value}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          return props.onKeyboardPressChange();
        }
      }}
    ></input>
  );
};

export default TextField;
