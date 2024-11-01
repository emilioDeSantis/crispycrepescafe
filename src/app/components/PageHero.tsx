import React from "react";
import Image from "next/image";

interface HeroProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
}

const PageHero: React.FC<HeroProps> = ({
    backgroundImage,
    title,
    subtitle,
}) => {
    return (
        <div
            style={{
                position: "relative",
                height: "Calc(10vw + 20rem)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                color: "white",
                background: "black",
            }}
        >
            <Image
                src={backgroundImage}
                layout="fill"
                objectFit="cover"
                alt={title}
                priority
                sizes="100vw"
                style={{
                    opacity: 0.6,
                }}
            />
            <div
                className="side-padding"
                style={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    textAlign: "center",
                    paddingTop: "3rem",
                    gap: "1rem",
                }}
            >
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "normal",
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                    }}
                >
                    {subtitle}
                </h2>
                <h1
                    style={{
                        fontSize: "3rem",
                        fontFamily: "Alex Brush",
                        lineHeight: 1.2,
                    }}
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default PageHero;
