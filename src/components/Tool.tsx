import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToolProps } from "../interfaces/ToolProps";

const Tool: React.FC<ToolProps> = () => {
  const params = useParams();
  const [tool, setTool] = useState<ToolProps>();
  console.log(params.id)!;

  useEffect(() => {
    const toolId = parseInt(params.id!) - 1;
    fetch("../data/tools.json")
      .then((res) => res.json())
      .then((data) => setTool(data.tools[toolId]));
  }, []);

  return tool ? (
    <div>
      <h2>{tool.name}</h2>
      <img src={tool.image} alt={tool.name} />
      <p>{tool.description}</p>
      <p>Category: {tool.category}</p>
      <p>Price: ${tool.price.toFixed(2)}</p>
      <p>{tool.available ? "In stock" : "Out of stock"}</p>
    </div>
  ) : (
    <h2>loading...</h2>
  );
};

export default Tool;
