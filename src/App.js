import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./scenes/dashboard";
import SidebarLayout from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";

import Bar from "./scenes/bar";
import Calendar from "./scenes/canlendar";
import Contacts from "./scenes/contacts";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Invoices from "./scenes/invoices";
import Team from "./scenes/team";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/gegraphy";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarLayout />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="form/" element={<Form/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/geography" element={<Geography/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
