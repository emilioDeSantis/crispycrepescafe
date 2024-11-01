import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    openGraph: {
        title: "Crispy Crepes Cafe. Serving Boston University",
        description:
            "Blend of Taste - Crispy Crepes Cafe",
        url: "https://www.cripsycrepescafe.com/",
        siteName: "cripsycrepescafe.com",
        images: [
            {
                url: "https://crispycrepescafe.com/og.png",
                width: 600,
                height: 900,
            },
        ],
        locale: "en_US",
        type: "website",
    },

    title: "Crispy Crepes Cafe. Serving Boston University",
    description: "Blend of Taste - Crispy Crepes Cafe",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}