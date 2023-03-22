import React from "react";
import { useOutletContext } from "react-router-dom";
import { ToolProps } from "../interfaces/ToolProps";

const Cart: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [toolsInCart, setToolsInCart] =
    useOutletContext<[ToolProps[], (ToolProps: ToolProps) => ToolProps]>();

  return (
    <div>
      {toolsInCart ? (
        toolsInCart.map((tool) => <h1 key={tool.id}>{tool.name}</h1>)
      ) : (
        <h1>no tools in cart!</h1>
      )}
    </div>
  );
};

export default Cart;
