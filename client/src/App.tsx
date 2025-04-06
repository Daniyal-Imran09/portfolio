import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useTheme } from "@/context/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use theme context to apply dark mode
  const { theme } = useTheme();
  
  // Apply theme to the root div and add transition effect
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} transition-colors duration-300`}>
      <Router />
      <Toaster />
    </div>
  );
}

export default App;
