import Image from "next/image";
import React from "react";
import { MenuItem } from "../data/menuData";

const Item: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div style={{ 
        display: "flex", 
        flexDirection: "column",
        height: "100%",
    }}>
        <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
            {item.name ? (
                <Image
                    src={`/${item.name}.jpeg`}
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
                    onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.innerHTML = `
                                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: #f9f0bb; border-radius: 6px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ddbb55;">
                                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                                        <path d="M7 2v20"/>
                                        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                                    </svg>
                                </div>
                            `;
                        }
                    }}
                />
            ) : (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#f9f7bb',
                    borderRadius: '6px',
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: '#6b7280'}}>
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                        <path d="M7 2v20"/>
                        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                    </svg>
                </div>
            )}
        </div>
        <div style={{ 
            marginTop: "0.5rem",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
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
                marginTop: "auto",
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