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

const drawerWidth = 240;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#0066A1", 0.8),
  "&:hover": {
    backgroundColor: alpha("#0066A1", 0.99),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

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

export default function AppBarAdmin() {
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const theme = useTheme();
  const { open, setOpen } = useContext();
  const menuId = "primary-search-account-menu";
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
          color: "#0066A1",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: alpha("#0066A1", 0.99),
          },
        }}
        onClick={handleMenuClose}
      >
        Profile
      </MenuItem>
      <MenuItem
        sx={{
          color: "#0066A1",
          "&:hover": {
            color: "#ffffff",
            backgroundColor: alpha("#0066A1", 0.99),
          },
        }}
        onClick={handleMenuClose}
      >
        My account
      </MenuItem>
    </Menu>
  );

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ margin: "30px", display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ backgroundColor: "#e9e6e6", opacity: "99%" }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <Tooltip title="Menu">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  position: "relative",
                  borderRadius: theme.shape.borderRadius,
                  color: "#0066A1",
                  mr: 2,
                  ...(open && { display: "none" }),
                  backgroundColor: alpha("#0066A1", 0.0),
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: alpha("#0066A1", 0.99),
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
              sx={{ color: "#0066A1", display: { xs: "none", sm: "block" } }}
            >
              Cursos Online
            </Typography>
            <Tooltip title="Buscar curso">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar curso"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => console.log(e.target.value)}
                />
              </Search>
            </Tooltip>
            <Tooltip title="Começar pesquisa">
              <Button
                sx={{
                  fontSize: "12px",
                  margin: "10px",
                  border: "2px solid",
                  borderColor: "#0066A1",
                  alignSelf: "center",
                  width: "8%",
                  justifyContent: "center",
                  color: "#0066A1",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: alpha("#0066A1", 0.99),
                  },
                }}
              >
                Pesquisar
              </Button>
            </Tooltip>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                  backgroundColor: alpha("#0066A1", 0.0),
                  "&:hover": {
                    backgroundColor: alpha("#0066A1", 0.99),
                  },
                }}
              >
                <AccountCircle
                  sx={{
                    position: "relative",
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: "#0066A1",
                  }}
                />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </Box>
      <Box>
        <SideBar />
      </Box>
    </Box>
  );
}
