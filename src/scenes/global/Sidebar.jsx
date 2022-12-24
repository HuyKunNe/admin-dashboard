import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../theme";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutline, HomeOutlined, MapOutlined, MenuOutlined, PeopleOutline, PersonOutline, PieChartOutline, ReceiptOutlined, TimelineOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';

const Item = ({ title, to, icon, selected, setSelected }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );

}

const SidebarLayout = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square" width='120px'>
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/IMG_1138.JPG`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Huy Kun</Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >Data</Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutline />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contact Information"
                            to="/contacts"
                            icon={<ContactsOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >Pages</Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutline />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutline />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >Charts</Typography>
                        <Item
                            title="Bar Char"
                            to="/bar"
                            icon={<BarChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Char"
                            to="/pie"
                            icon={<PieChartOutline />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Char"
                            to="/line"
                            icon={<TimelineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Char"
                            to="/geography"
                            icon={<MapOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

SidebarLayout.propTypes = {};

export default SidebarLayout;
