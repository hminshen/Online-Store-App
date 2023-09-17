import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import { NavbarProps } from "../types";


const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
    return (
      <Drawer anchor="left" open={isOpen} onClose={onClose} style={{ position: "fixed", top: 0, left: 0 }}>
        <List>
          <ListItem onClick={onClose}>
            <Link href="/home">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          {(
            <ListItem onClick={onClose}>
                <Link href="/login">
                <ListItemText primary="Login" />
                </Link>
            </ListItem>
            )}
        </List>
      </Drawer>
    );
  };
  
  export default Navbar;