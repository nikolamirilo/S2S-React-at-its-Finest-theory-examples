import React, { useState } from "react";
import { useUpdateLogger } from "../Hooks/useUpdateLogger";

const Input = () => {
  const [text, setText] = useState("");
  useUpdateLogger(text);
  return (
    <form className="form">
      <input
        type="text"
        className="input-field"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default Input;
