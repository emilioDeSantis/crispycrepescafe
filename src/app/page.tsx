// pages/index.tsx
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import LinkButton from "./components/LinkButton";
import Hero from "./components/Hero";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";
import MenuTeaser from "./components/MenuTeaser";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Hero />
            <div
                className="flex-direction"
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingBlock: "2rem",
                    justifyContent: "center",
                    gap: "2.4rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingInline: "1rem",
                        maxWidth: "24rem",
                        gap: "1rem",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: "Alex Brush",
                            color: "#19bb7d",
                            fontSize: "3.2rem",
                        }}
                    >
                        Our Story
                    </h2>
                    <p style={{}}>
                        {`Founded in July 2002 our original location served Boston University's South Campus. Since then, we have moved to the heart of Boston University on Commonwealth Avenue. Our specialty is crafting delicious crepes as well as breakfast and Mediterranean sandwiches and plates.

From our cozy spot on Commonwealth Ave, we continue to serve up the perfect blend of flavors that have made Crispy Crepes a favorite among students and locals alike.`}
                    </p>
                </div>
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        width: "Min(28rem, 100%)",
                        color: "white",
                        aspectRatio: "5/6",
                        marginBlock: "1rem",
                    }}
                >
                    <Image
                        src={"/fancy.jpeg"}
                        layout="fill"
                        objectFit="cover"
                        alt={`eggs and toast`}
                        sizes="600px"
                        style={{}}
                    />
                </div>
            </div>

            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    height: "60vh",
                    width: "100vw",
                    background: "black",
                    color: "white",
                }}
            >
                <Image
                    src={"/plate.jpeg"}
                    layout="fill"
                    objectFit="cover"
                    alt={`crispy crepes storefront`}
                    sizes="100vw"
                    style={{
                        opacity: 0.6,
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <h2
                        style={{
                            color: "white",
                            fontSize: "2.4rem",
                            textAlign: "center",
                            width: "100%",
                            zIndex: 2,
                            fontFamily: "Alex Brush",
                        }}
                    >
                        Blend of Taste
                    </h2>
                    <h2
                        style={{
                            color: "white",
                            fontSize: "2.4rem",
                            textAlign: "center",
                            width: "100%",
                            fontWeight: 700,
                            zIndex: 2,
                        }}
                    >
                        Crispy Crepes Cafe
                    </h2>
                    <Link href="/menu"
                        style={{
                            color: "white",
                            backgroundColor: "#19bb7d",
                            padding: "1rem 3rem",
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            borderRadius: "1000px",
                            zIndex: 2,
                            border: "none",
                            marginTop: "2rem",
                            cursor: "pointer",
                            boxShadow: "0 0 20px 0 #00000055",
                        }}
                    >
                        View menu
                    </Link>
                </div>
            </div>
            <div
                className="side-padding"
                style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
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
            </div>
            <Menu/>
        </main>
    );
}
