import { Route, Routes } from "react-router-dom";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SignIn from "./components/Auth/signIn";
import SignUpComponent from "./components/Auth/signUp";
import SSOCallback from "./components/Auth/sso-callback";
import { ProtectedRoute } from "./middleware/protected";
import Dashboard from "./pages/Dashboard";
import { Home } from "./pages/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/sign_up/sso-callback" element={<SSOCallback />} />
        <Route path="/auth/sign-up" element={<SignUpComponent />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
