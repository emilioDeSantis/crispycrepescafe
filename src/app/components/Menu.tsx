"use client";
import React, { useEffect, useRef, useState } from "react";
import { MainCategory, menuData } from "../data/menuData";
import Item from "./Item";
import useHideNavOnScroll from "../hooks/useHideNavOnScroll";

const Menu: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>(
        menuData[0].name
    );
    const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const visible = useHideNavOnScroll();

    useEffect(() => {
        const handleScroll = () => {
            let currentActiveCategory = menuData[0].name;
            for (const category of menuData) {
                const element = categoryRefs.current[category.name];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 250) {
                        currentActiveCategory = category.name;
                    } else {
                        break;
                    }
                }
            }
            setActiveCategory(currentActiveCategory);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToCategory = (categoryName: string) => {
        const element = categoryRefs.current[categoryName];
        if (element) {
            const yOffset = -240;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div
            className="side-padding"
            style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
            }}
        >
            <div style={{ maxWidth: "1100px", width: "100%" }}>
                <nav
                    style={{
                        position: "sticky",
                        top: "0rem",
                        // transform: `translateY(${visible ? 0 : -10}rem)`,
                        transition: "0.3s",
                        background: "white",
                        zIndex: 50,
                        paddingBlock: "1rem",
                        paddingInline: "1rem",
                        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "0.5rem",
                            maxWidth: "1600px",
                            margin: "0 auto",
                        }}
                    >
                        {menuData.map((category: MainCategory) => (
                            <button
                                key={category.name}
                                onClick={() => scrollToCategory(category.name)}
                                style={{
                                    padding: "0.4rem 0.6rem",
                                    borderRadius: "0.375rem",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    backgroundColor:
                                        activeCategory === category.name
                                            ? "#19bb7d"
                                            : "#ffffff",
                                    color:
                                        activeCategory === category.name
                                            ? "white"
                                            : "#19bb7d",
                                    border: "2px solid #19bb7d",
                                    transition: "0.3s",
                                    fontSize: "0.86rem",
                                    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </nav>

                <div
                    style={{
                        paddingTop: "1rem",
                        paddingBottom: "4rem",
                        color: "#333",
                    }}
                >
                    {menuData.map((mainCategory: MainCategory) => (
                        <div
                            key={mainCategory.name}
                            ref={(el) => {
                                if (el)
                                    categoryRefs.current[mainCategory.name] =
                                        el;
                            }}
                            style={{
                                marginTop: "1rem",
                                scrollMarginTop: "5rem",
                                borderBottom: "1px solid #e2e8f0",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "2.4rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {mainCategory.name}
                            </h2>
                            {/* <p style={{ fontSize: "1.125rem", color: "#4b5563", marginBottom: "1rem" }}>
                            {mainCategory.description}
                        </p> */}

                            {mainCategory.subCategories.map((subCategory) => (
                                <div
                                    key={subCategory.name}
                                    style={{ marginBottom: "2rem" }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.8rem",
                                            fontWeight: 800,
                                            marginTop: "2rem",
                                        }}
                                    >
                                        {subCategory.name}
                                    </h3>
                                    <p
                                        style={{
                                            color: "#4b5563",
                                            marginBottom: "1.6rem",
                                            marginTop: "0.4rem",
                                        }}
                                    >
                                        {subCategory.description}
                                    </p>
                                    <div className="items-grid" style={{}}>
                                        {subCategory.items.map(
                                            (item, index) => (
                                                <Item key={index} item={item} />
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
