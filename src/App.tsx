import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { FoodieRoutes } from "./routes/foodieRoutes";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <FoodieRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
