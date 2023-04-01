import React, { useState } from "react";
import { useSearchParams, Link, useLoaderData } from "react-router-dom";
import { ToolProps } from "../interfaces/ToolProps";
import APIClient from "../classes/APIClient";

const ApiClient = new APIClient("./data/tools.json");

export const loader = async (): Promise<ToolProps[]> => {
  const toolsData = await ApiClient.getData();
  const tools: ToolProps[] = toolsData?.tools || [];
  return tools;
};

const Tool: React.FC = () => {
  const tools: ToolProps[] = useLoaderData() as ToolProps[];
  const [isHovered, setIsHovered] = useState<number | null>();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("category");

  const filteredTools = typeFilter
    ? tools.filter((tool) => {
        return tool.category.toLowerCase().replace(/ /g, "_") === typeFilter;
      })
    : tools;

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
              Availability: {tool.available ? tool.available : "Not available"}
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
