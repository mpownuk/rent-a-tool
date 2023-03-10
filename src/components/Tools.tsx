import React, { useEffect, useState } from "react";

type ToolProps = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  available: boolean;
};

const Tool: React.FC = () => {
  const [tools, setTools] = useState<ToolProps[]>([]);

  useEffect(() => {
    fetch("./data/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data.tools));
  }, []);

  return (
    <div className="tools-container">
      {tools ? (
        tools.map((tool) => (
          <div key={tool.id} className="tool">
            <h2 className="tool__title">{tool.name}</h2>
            <p className="tool__description">{tool.description}</p>
            <p className="tool__category">Category: {tool.category}</p>
            <p className="tool__price"> Price: ${tool.price}</p>
            <p
              className={
                tool.available ? "tool__availability" : "tool__unavailability"
              }
            >
              Availability: {tool.available ? "Available" : "Not available"}
            </p>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Tool;
