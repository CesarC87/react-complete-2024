import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";
import { lazy } from "react";
import { Suspense } from "react";

const BlogPage = lazy(() => import("./pages/Blog")); // Para cargar el componente
const PostPage = lazy(() => import("./pages/Post")); // Para cargar el componente

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()), // Para cargar el loader
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: ({params}) =>
              import("./pages/Post").then((module) => module.loader({params})),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
