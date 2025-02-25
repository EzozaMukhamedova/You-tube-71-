import React, { useState } from "react";
import { IconButton, InputBase, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingLeft: "15px",
          }}
        >
          <YouTubeIcon sx={{ color: "red", fontSize: 28 }} />
          <Box component="span" sx={{ fontSize: 20, fontWeight: 700, pl: 0.5 }}>
            YouTube
          </Box>
        </Box>
        {[
          "Главная",
          "Shorts",
          "Подписки",
          "История",
          "Плейлисты",
          "Ваши видео",
          "Смотреть позже",
          "Понравившиеся",
          "Скачанные",
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        p: "15px 24px",
        height: "66px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ mr: 2, color: "white" }}
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer}>
            {list()}
          </Drawer>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <YouTubeIcon sx={{ color: "red", fontSize: 28 }} />
            <Box
              component="span"
              sx={{ fontSize: 20, fontWeight: 700, pl: 0.5 }}
            >
              YouTube
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 600,
            height: 40,
            borderRadius: 25,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            p: "2px 6px",
          }}
        >
          <InputBase
            sx={{
              flexGrow: 1,
              border: "none",
              p: "8px 6px",
              fontSize: 16,

              bgcolor: "transparent",
              color: "inherit",
            }}
            placeholder="Введите запрос"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "white" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            borderRadius: "25px",
            bgcolor: "rgba(255, 255, 255, 0.15)",
            width: "40px",
            height: "40px",
            color: "white",
            p: "8px",
            border: "none",
            ml: "-270px",
          }}
        >
          <MicIcon />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ p: "12px" }} aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ p: "12px" }} aria-label="account">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
