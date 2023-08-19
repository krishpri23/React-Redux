import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//layout
import RootLayout from "./layout/rootLayout";

//pages
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="searchResults" element={<SearchResults />} />

      {/* <Route path="create" element={<CreateLayout />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="logout" element={<Logout />} action={logoutAction} /> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
