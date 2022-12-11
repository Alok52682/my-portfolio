import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Project from "../Pages/Project/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/project/:id',
                loader: async ({ params }) => fetch(`https://my-portfolio-server-tau.vercel.app/projects/${params.id}`),
                element: <Project />
            }
        ]
    },
]);

export default router;