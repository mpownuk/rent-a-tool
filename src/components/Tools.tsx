import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ToolProps } from "../interfaces/ToolProps";

const Tool: React.FC = () => {
  const [tools, setTools] = useState<ToolProps[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("category");
  console.log(typeFilter);

  const filteredTools = typeFilter
    ? tools.filter((tool) => {
        console.log(tool.category.toLowerCase().replace(/ /g, "_"));
        return tool.category.toLowerCase().replace(/ /g, "_") === typeFilter;
      })
    : tools;

  useEffect(() => {
    fetch("./data/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data.tools));
  }, []);

  return (
    <div className="tools-container">
      {filteredTools ? (
        filteredTools.map((tool) => (
          <Link
            to={`${tool.id}`}
            key={tool.id}
            onMouseEnter={() => setIsHovered(tool.id)}
            onMouseLeave={() => setIsHovered(null)}
            className="tool"
          >
            <div className="tool__image-container">
              <img
                className={`tool__image ${
                  isHovered === tool.id ? "tool__image--hovered" : ""
                }`}
                src={tool.image}
                alt={tool.name}
              />
            </div>
            <h2 className="tool__title">{tool.name}</h2>

            <p className="tool__price"> Price: ${tool.price}</p>
            <p
              className={
                tool.available ? "tool__availability" : "tool__unavailability"
              }
            >
              Availability: {tool.available ? "Available" : "Not available"}
            </p>
          </Link>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Tool;
