import HomePage from "@/page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Game from "@/page/Game";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <RouterProvider router={router} />
      {/* <Game /> */}
    </div>
  );
}

export default App;
