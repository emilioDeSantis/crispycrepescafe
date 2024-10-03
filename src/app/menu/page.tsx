import React from "react";
import PageHero from "../components/PageHero";
import Menu from "../components/Menu";

const MenuPage: React.FC = () => {
    return (
        <main
            style={{
                width: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
        >
            <PageHero
                backgroundImage="/sugar2.png"
                subtitle="Bringing the"
                title="Delicious Taste of French Crepes"
            />
            <div
            className="side-padding"
                style={{
                  paddingTop: "2rem",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <h2
                    style={{
                        fontSize: "2.5rem",
                        color: "#19bb7d",
                        fontFamily: "Alex Brush",
                        lineHeight: 1,  
                    }}
                >
                    Explore Our
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
            </div>
            <Menu />
        </main>
    );
};

export default MenuPage;
