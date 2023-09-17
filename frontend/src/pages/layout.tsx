import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import styles from "../styles/layout.module.css";
import Navbar from "@/components/common/NavBar/NavBar";

interface LayoutProps {
    children: React.ReactNode; // Define children prop
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className={styles.layout}>
        <IconButton onClick={toggleSidebar} className={styles.menuIcon}>
          <MenuIcon />
        </IconButton>
        <Navbar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <main className={styles.content}>{children}</main>
      </div>
    );
  };
  
  export default Layout;