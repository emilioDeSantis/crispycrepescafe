import Image from "next/image";
import styles from "./page.module.css";
import PageHero from "../components/PageHero";

export default function Contact(): JSX.Element {
    return (
        <main style={{ width: "100%" }}>
           <PageHero
                backgroundImage="/chicken.png"
                subtitle="BRINGING THE"
                title="Delicious Taste of French Crepes"
            />

            <div style={{
                padding: "4rem 1rem",
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
            }}>
                <h2 style={{
                    fontSize: "2.5rem",
                    color: "#19bb7d",
                    fontFamily: "Alex Brush",
                    lineHeight: 1,  
                    marginBottom: "0.5rem",
                }}>
                    Find Out How to
                </h2>
                <h3 style={{
                    fontSize: "3rem",
                    color: "#333",
                    marginBottom: "2rem",
                }}>
                    Contact us
                </h3>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                }}>
                    <ContactSection title="Address:">
                        <p>714 Commonwealth Ave<br />Boston, MA 02215</p>
                    </ContactSection>

                    <ContactSection title="Hours:">
                        <p>
                            Monday to Friday<br />
                            8:00 am to 9:00pm<br />
                            Saturday and Sunday<br />
                            9:00am to 4:00pm<br />
                            (Hours of operation change according to school holidays)
                        </p>
                    </ContactSection>

                    <ContactSection title="Phone:">
                        <p>
                            (617) 859-9585<br />
                            <strong>Fax:</strong> (617) 859-8991
                        </p>
                    </ContactSection>
                </div>
            </div>
        </main>
    );
}

interface ContactSectionProps {
    title: string;
    children: React.ReactNode;
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, children }) => {
    return (
        <div style={{ marginBottom: "2rem" }}>
            <h4 style={{
                fontSize: "1.5rem",
                color: "#19bb7d",
                marginBottom: "0.5rem",
            }}>
                {title}
            </h4>
            {children}
        </div>
    );
};