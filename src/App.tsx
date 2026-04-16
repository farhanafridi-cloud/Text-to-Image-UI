import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <Router>
      <TooltipProvider>
        <div className="min-h-screen">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Navbar />
                  <Landing />
                </>
              } 
            />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </TooltipProvider>
    </Router>
  );
}
