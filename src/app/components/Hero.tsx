"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                width: "100vw",
                background: 'black',
                color: 'white',
            }}
        >
            <Image
                src={"/hero.jpeg"}
                layout="fill"
                objectFit="cover"
                alt={`crispy crepes storefront`}
                sizes="100vw"
                style={{
                  opacity: 1,
                }}
            />
            <div style={{display: 'flex',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              gap: '1rem',
            }}>
                <p
                    style={{
                        color: "white",
                        fontSize: "1.2rem",
                        textAlign: "center",
                        width: "100%",
                        textTransform: "uppercase",
                        fontWeight: 400,
                        zIndex: 2,
                    }}
                >
                    Bringing the
                </p>
                <h1
                    style={{
                        color: "white",
                        fontSize: "2.8rem",
                        textAlign: "center",
                        width: "100%",
                        zIndex: 2,
                        fontFamily: 'Alex Brush',
                    }}
                >
                    Delicious Taste of French Crepes
                </h1>
                <h2
                    style={{
                   
                      color: "white",
                      fontSize: "1.2rem",
                      textAlign: "center",
                      width: "100%",
                      textTransform: "uppercase",
                      fontWeight: 400,
                      zIndex: 2,
                    }}
                >
                    To the Heart of Boston University
                </h2>
                {/* <button style={{
                    color: 'white',
                    backgroundColor: '#19bb7d',
                    padding: '1rem 3rem',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    borderRadius: '1000px',
                    zIndex: 2,
                    border : 'none',
                    marginTop: '2rem',
                    cursor: 'pointer',
                    boxShadow: '0 0 20px 0 #00000055',
                }}>Order online</button> */}
            </div>
        </div>
    );
};

export default Hero;
