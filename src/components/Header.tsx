import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { COLORS } from '../constants/colors';

export default function Header() {
 
  return (
    <header style={styles.header}>
      <div style={styles.logoTitle}>
        <div style={styles.logocontainer}>
          <img style={styles.logo} src={Logo} alt='Logo' />
        </div>
        <h1 style={styles.h1}>OneClickAssignment</h1>
      </div>

      <nav style={styles.navbar}>
        <NavLink to='/' end style={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to='/api-setup' style={navLinkStyle}>
          API Setup
        </NavLink>
        <NavLink to='/generate-response' style={navLinkStyle}>
          Start Assignment
        </NavLink>
        <NavLink to='/response-editor' style={navLinkStyle}>
          Response Editor
        </NavLink>
        
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND,
    boxShadow: `0 4px 12px ${COLORS.SHADOW}`,
    padding: '12px 24px',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  },

  logoTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },

  logocontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY_LIGHT,
    borderRadius: '8px',
    padding: '6px',
  },

  logo: {
    height: '30px',
    width: '30px',
    borderRadius: '6px',
    objectFit: 'contain' as const,
  },

  h1: {
    color: COLORS.PRIMARY,
    fontSize: '22px',
    fontWeight: 600,
    margin: 0,
    whiteSpace: 'nowrap' as const,
  },

  navbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'wrap' as const,
  },
};

 const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    position: 'relative' as const,
    color: isActive ? COLORS.PRIMARY : COLORS.TEXT_PRIMARY,
    fontWeight: isActive ? '600' : '400',
    textDecoration: 'none',
    paddingBottom: '6px',
    transition: 'color 0.2s ease',
    cursor: 'pointer',


    borderBottom: isActive
      ? `2px solid ${COLORS.PRIMARY}`
      : '2px solid transparent',
  });
