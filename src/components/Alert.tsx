import { ReactNode, useState } from "react";

interface Props {
  message: string;
  onClose: () => void;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      <strong>{props.message}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};

export default Alert;
