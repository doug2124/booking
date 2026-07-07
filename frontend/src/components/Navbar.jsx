export default function Navbar() {
    return (
        <nav style={styles.navbar}>
          <h1 style={styles.logo}>Booking</h1>
    
          <ul style={styles.links}>
            <li><a style={styles.link} href="/contact">Contact</a></li>
          </ul>
        </nav>
      );
  }
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#4CAF50",
      color: "white",
    },
    logo: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    links: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };
  