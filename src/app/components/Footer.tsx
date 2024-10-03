import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#f5f5f5',
      padding: '2rem 0',
      marginTop: '2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <FooterBox title="OUR LOCATION">
            <p>714 Commonwealth Ave <br />Boston, MA 02215</p>
          </FooterBox>
          
          <FooterBox title="HOURS">
            <table style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ paddingRight: '1rem' }}>MON - FRI</td>
                  <td>8:00 am to 8:00pm</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: '1rem' }}>SAT - SUN</td>
                  <td>9:00am to 3:00pm</td>
                </tr>
              </tbody>
            </table>
          </FooterBox>
          
          <FooterBox title="CALL US">
            <a href="tel:6178599585" style={{ color: '#f5f5f5', textDecoration: 'none' }}>(617) 859-9585</a>
            <p>(617) 859-8991 fax</p>
          </FooterBox>
          
          <FooterBox title="EMAIL US">
            <a href="mailto:info@crispycrepescafe.com" style={{ color: '#f5f5f5', textDecoration: 'none' }}>
              info@crispycrepescafe.com
            </a>
          </FooterBox>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2rem',
          borderTop: '1px solid #555',
          paddingTop: '1rem',
        }}>
          <div style={{ fontSize: '0.9rem' }}>
            Copyright © {new Date().getFullYear()} - Crispy Crepes Cafe
          </div>
          <div>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              gap: '1rem',
              padding: 0,
            }}>
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </SocialIcon>
            </ul>
          </div>
        </div>
      </div>
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}>
        {/* <a href="#top">
          <Image
            src="/images/arrow-up.png"
            alt="Back to top"
            width={40}
            height={40}
          />
        </a> */}
      </div>
    </footer>
  );
};

interface FooterBoxProps {
  title: string;
  children: React.ReactNode;
}

const FooterBox: React.FC<FooterBoxProps> = ({ title, children }) => (
  <div style={{ flex: '1 1 200px', marginBottom: '1rem' }}>
    <div>
      <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>{title}</h3>
      <div>{children}</div>
    </div>
  </div>
);

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => (
  <li>
    <Link href={href} style={{ color: '#f5f5f5' }}>
      {children}
    </Link>
  </li>
);

export default Footer;