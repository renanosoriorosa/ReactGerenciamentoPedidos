import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {
  Box,
  CardMedia,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useContext } from "../../shared/contexts";

interface PropsAppBar {}
const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideBar: React.FC<PropsAppBar> = (propsAppBar: any) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { open, setOpen } = useContext();

  useEffect(() => {
    setOpen(open);
  }, [open, setOpen]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navegar = (menu: string) => {
    setOpen(false);
    if(menu === "Home")
      navigate('/Home')
    else if(menu === "Produto")
      navigate('/Produto')
  };
  
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: alpha("#950000", 0.9) }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              margin: "20px",
              color: "#ffffff",
              display: { xs: "none", sm: "block" },
            }}
          >
            Menu
          </Typography>
          <Tooltip title="Fechar menu">
            <IconButton
              sx={{
                position: "relative",
                color: "#950000",
                borderColor: "#ffffff",
                border: "2px solid",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha("#ffffff", 0.99),
                "&:hover": {
                  borderColor: "#ffffff",
                  border: "2px solid",
                  backgroundColor: alpha("#950000", 0.99),
                  color: "#ffffff",
                },
              }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </Tooltip>
        </DrawerHeader>
        <Divider />
        <Paper elevation={24}>
          <List>
            <ListItem
              sx={{
                color: "#950000",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha("#950000", 0.0),
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: alpha("#950000", 0.99),
                },
              }}
              disablePadding
            >
              <ListItemButton onClick={() => navegar('Home')}>
                  <ListItemIcon>
                      <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              sx={{
                color: "#950000",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha("#950000", 0.0),
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: alpha("#950000", 0.99),
                },
              }}
              disablePadding
            >
              <ListItemButton onClick={() => navegar('Produto')}>
                  <ListItemIcon>
                      <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Produtos"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Drawer>
    </Box>
  );
};
export default SideBar;
