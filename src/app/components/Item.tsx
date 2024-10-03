import Image from "next/image";
import React from "react";
import { MenuItem } from "../data/menuData";

const Item: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div style={{ 
        display: "flex", 
        flexDirection: "column",
        height: "100%", // Ensure the container takes full height
    }}>
        <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
            <Image
                src={`/${item.name}.png`}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                style={{ 
                    borderRadius: "6px",
                    background: "#f9f7bb",
                    border: 'none',
                }}
                sizes="250px"
                loading="lazy"
            />
        </div>
        <div style={{ 
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1, // Allow this container to grow and push the price to the bottom
        }}>
            <h4 style={{
                fontSize: "1.125rem",
                fontWeight: 500,
                marginBottom: "0.25rem",
            }}>
                {item.name}
            </h4>
            {item.description && (
                <p style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    marginBottom: "0.5rem",
                    // Limit to 3 lines of text
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                }}>
                    {item.description}
                </p>
            )}
            <span style={{ 
                fontSize: "0.875rem", 
                fontWeight: 500, 
                color: "#4b5563",
                marginTop: "auto", // Push the price to the bottom
            }}>
                {item.price
                    ? `$${item.price.toFixed(2)}`
                    : item.small && item.large
                    ? `S: $${item.small.toFixed(2)} / L: $${item.large.toFixed(2)}`
                    : ""}
            </span>
        </div>
    </div>
);

export default Item;