import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./appContextProvider";

import { AccountInformation } from "./Forms/AccountInformation";
import { Confirmation } from "./Forms/Confirmation";
import { ContactInformation } from "./Forms/ContactInformation";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AccountInformation />} />
          <Route path="/contact" element={<ContactInformation />} />
          <Route path="/confirm" element={<Confirmation />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
