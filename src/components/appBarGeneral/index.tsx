import * as React from "react";
import { useTheme, styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Button, InputBase, Menu, Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import SideBar from "../sideBar";
import { useContext } from "../../shared/contexts";
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarGeneral() {
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // Faz logout do usuário removendo o token de autenticação do localStorage
  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  const theme = useTheme();
  const menuId = "primary-search-account-menu";
  
  const Navegar = (menu:string) => {
    handleMenuClose()
    if(menu === "Perfil")
      navigate('/perfil')
    else if(menu === "Usuario")
      navigate('/usuario')
  }
  
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        sx={{
          color: "#950000",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: alpha("#950000", 0.99),
          },
        }}
        onClick={() => Navegar('Perfil')}
      >
        Perfil
      </MenuItem>
      <MenuItem
        sx={{
          color: "#950000",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: alpha("#950000", 0.99),
          },
        }}
        onClick={() => Navegar('Usuario')}
      >
        Usuários
      </MenuItem>
      <MenuItem
        key="Logout"
        sx={{
          color: "#950000",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: alpha("#950000", 0.99),
          },
        }}
        onClick={logout}
      >
        Logout
      </MenuItem>
    </Menu>
  );
  const { open, setOpen } = useContext();
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ backgroundColor: "#e9e6e6", opacity: "99%" }}
          position="fixed"
          open={open}
        >
          <Toolbar><Tooltip title="Menu">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                position: "relative",
                borderRadius: theme.shape.borderRadius,
                color: "#950000",
                mr: 2,
                ...(open && { display: "none" }),
                backgroundColor: alpha("#950000", 0.0),
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: alpha("#950000", 0.99),
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            </Tooltip>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "#950000", display: { xs: "none", sm: "block" } }}
            >
              Gerenciamento de Pedidos
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            <span style={{color: '#950000'}}>Olá, {email}</span>
            {1 > 0? <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                sx={{
                  position: "relative",
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: alpha("#950000", 0.0),
                  "&:hover": {
                    backgroundColor: alpha("#950000", 0.99),
                  },
                }}
              >
                <AccountCircle
                  sx={{
                    position: "relative",
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: "#950000",
                  }}
                />
              </IconButton>
            </Box>: ""}
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      <SideBar />
    </Box>
  );
}
