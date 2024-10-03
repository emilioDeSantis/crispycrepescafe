import React from "react";
import Link from "next/link";
import { MainCategory, menuData } from "../data/menuData";
import Item from "./Item";

const MenuTeaser: React.FC = () => {
  // Select a few categories to preview
  const previewCategories = menuData.slice(0, 3);

  return (
    <div className="side-padding" style={{ 
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

<h2
                    style={{
                        fontSize: "2.5rem",
                        color: "#19bb7d",
                        fontFamily: "Alex Brush",
                        lineHeight: 1,  
                        marginTop: "2rem",
                    }}
                >
                    Discover Our
                </h2>
                <h3
                    style={{
                        fontSize: "3.6rem",
                        color: "#333",
                        marginBottom: "2rem",
                        lineHeight: 1,

                    }}
                >
                    Menu
                </h3>
      <div style={{ maxWidth: "1100px", width: '100%' }}>
        <div style={{
          paddingTop: "1rem",
          paddingBottom: "4rem",
          color: "#333",
        }}>
          {previewCategories.map((mainCategory: MainCategory) => (
            <div
              key={mainCategory.name}
              style={{
                marginTop: "1rem",
                scrollMarginTop: "5rem",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <h2 style={{
                fontSize: "2.4rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}>
                {mainCategory.name}
              </h2>

              {mainCategory.subCategories.slice(0, 1).map((subCategory) => (
                <div key={subCategory.name} style={{ marginBottom: "2rem" }}>
                  <div className="items-grid">
                    {subCategory.items.slice(0, 4).map((item, index) => (
                      <Item key={index} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          textAlign: "center",
          marginTop: "2rem",
        }}>
          <Link href="/menu" style={{
            display: "inline-block",
            padding: "0.8rem 1.5rem",
            backgroundColor: "#19bb7d",
            color: "white",
            fontWeight: "bold",
            borderRadius: "0.375rem",
            textDecoration: "none",
            fontSize: "1.1rem",
            transition: "background-color 0.3s",
          }}>
            View Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuTeaser;