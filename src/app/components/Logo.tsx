import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                // height: "7rem",
                height: "3.6rem",
                width: "18rem",
                color: 'white',
            }}
        >
            <Image
                src={"/LogoSimple.png"}
                layout="fill"
                objectFit="cover"
                alt={`crispy crepes storefront`}
                sizes="1000px"
                style={{
                }}
            />
        </div>
    );
};

export default Logo;
