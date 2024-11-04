import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Layout } from "./pages/Layout";
import { Inventory } from "./pages/Inventory";
import { Employee } from "./pages/Employee";
import { Recruitment } from "./pages/Recruitment";
import { Payroll } from "./pages/Payroll";
import { Loan } from "./pages/Loan";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
