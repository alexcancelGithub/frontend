import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { FoodieRoutes } from "@/routes/foodieRoutes";
import { AppLayout } from "@/layout";

import "./App.css";

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
