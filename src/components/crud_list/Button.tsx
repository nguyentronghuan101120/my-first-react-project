interface ButtonModel {
  buttonName: string;
  buttonColor?: "primary" | "secondary" | "danger";
  onButtonClicked: (item: string) => void;
}

const Button = (buttonModel: ButtonModel) => {
  return (
    <button
      type="button"
      className={"btn btn-" + buttonModel.buttonColor}
      onClick={() => {
        buttonModel.onButtonClicked("Hello");
      }}
    >
      {buttonModel.buttonName}
    </button>
  );
};

export default Button;
