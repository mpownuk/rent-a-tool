import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { ToolProps } from "../interfaces/ToolProps";

const Tool: React.FC<ToolProps> = () => {
  const params = useParams();
  const [tool, setTool] = useState<ToolProps>();
  const [toolsInCart, setToolsInCart] =
    useOutletContext<
      [
        ToolProps[] | null,
        (
          ToolProps: ToolProps[] | ((prev: ToolProps[] | null) => ToolProps[])
        ) => void
      ]
    >();
  const [inputValue, setInputValue] = useState<string>("1");

  console.log(toolsInCart);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setToolsInCart((prev) => {
      return prev ? [...prev, tool!] : [tool!];
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const toolId = parseInt(params.id!) - 1;
    fetch("../data/tools.json")
      .then((res) => res.json())
      .then((data) => setTool(data.tools[toolId]));
  }, [params.id]);

  return tool ? (
    <div className="tools-container">
      <div className="tool">
        <h2>{tool.name}</h2>
        <p>{tool.description}</p>
        <p>Category: {tool.category}</p>
        <p>Price: ${tool.price.toFixed(2)}</p>
        <p>{tool.available ? "In stock" : "Out of stock"}</p>
        <div className="tool__image-container">
          <img className="tool__image" src={`.${tool.image}`} alt={tool.name} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="number"
            min={1}
            max={tool.available}
          />
          <button type="submit">add to cart</button>
        </form>
      </div>
    </div>
  ) : (
    <h2>loading...</h2>
  );
};

export default Tool;
