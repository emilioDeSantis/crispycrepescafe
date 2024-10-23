"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import useHideNavOnScroll from "../hooks/useHideNavOnScroll";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import PhoneCallButton from "./PhoneCallButton";

const Header: React.FC = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const pathname = usePathname();

    const visible = useHideNavOnScroll();

    const links = [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Reviews", href: "/reviews" }, 
        { label: "Contact", href: "/contact"},
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                // position: "fixed",
                position: 'absolute',
                top: 0,
                // transform: `translateY(${visible ? 0 : -5}rem)`,
                transition: "0.3s",
                zIndex: 1000,
                // background: '#ffffff' ,
                color: 'white',
                // color: 'black',
            }}
        >
            <div
            className="side-padding"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    zIndex: 1000,
                    letterSpacing: "0.1em",
                    height  : "5rem",
                }}
            >
                <Link href="/" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Logo/>
                </Link>
                <nav
                    className="desktop"
                    style={{
                        gap: "2.4rem",
                        fontWeight: 300,
                        letterSpacing: "0.04em",
                        height: "5rem",
                        opacity: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >       <PhoneCallButton/>
                {/* <button style={{
                    color: 'white',
                    background: 'transparent',
                    padding: '0.4rem 1.6rem',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    borderRadius: '1000px',
                    zIndex: 2,
                    border : '1px solid white',
                    cursor: 'pointer',
                }}>Order online</button> */}
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            ref={(el) => {
                                linkRefs.current[index] = el;
                            }}
                            className={link.href == pathname ? "nav-link-focused" : "nav-link"}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "0.3s",
                                fontWeight: 400,
                                fontSize: "1rem",
                                textTransform: "uppercase",
                            }}
                            href={link.href}
                        >
                            <div>{link.label}</div>
                        </Link>
                    ))}
                </nav>
                <div className="mobile">
                    <DropdownMenu navLinks={links as { label: string; href: string }[]} />
                </div>
            </div>
        </div>
    );
};

export default Header;
