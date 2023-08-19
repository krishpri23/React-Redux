import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//layout
import RootLayout from "./layout/rootLayout";

//pages
import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path="searchResults" element={<SearchResults />} /> */}

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
