import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  AccountBox,
  Article,
  Diversity1,
  Group,
  Home,
  Settings,
  Storefront,
} from "@mui/icons-material";

const getIcon = (component) => {
  switch (component) {
    case "Home":
      return <Home />;
    case "Article":
      return <Article />;
    case "Group":
      return <Group />;
    case "Storefront":
      return <Storefront />;
    case "Diversity1":
      return <Diversity1 />;
    case "Settings":
      return <Settings />;
    case "AccountBox":
      return <AccountBox />;
    default:
      break;
  }
};

const SidebarItems = ({ text, component }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>{getIcon(component)}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
export default SidebarItems;
