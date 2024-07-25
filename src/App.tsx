import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { FoodieRoutes } from "./routes/foodieRoutes";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <FoodieRoutes />
        </AppLayout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
