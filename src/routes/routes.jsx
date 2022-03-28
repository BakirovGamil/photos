import Main from "../pages/Main"
import Profile from "../pages/Profile"

export const publicRoutes = [
    {path: "*", element: <Main/>},
    {path: "/", element: <Main/>},
];

export const authRoute = [
    {path: "profile", element: <Profile isMy={true}/>},
    {path: "profile/:userId", element: <Profile/>}
];