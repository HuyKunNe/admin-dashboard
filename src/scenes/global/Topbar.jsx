import { DarkModeOutlined, LightModeOutlined, NotificationsOutlined, PersonOutlined, Search, SettingsOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";


const Topbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SEARCH BAR */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <Search />
                </IconButton>
            </Box>

            {/* ICON */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined />
                    ) : (<LightModeOutlined />)}
                </IconButton>
                <IconButton >
                    <NotificationsOutlined />
                </IconButton>
                <IconButton >
                    <SettingsOutlined />
                </IconButton>
                <IconButton >
                    <PersonOutlined />
                </IconButton>

            </Box>

        </Box>
    );
};

Topbar.propTypes = {};

export default Topbar;
