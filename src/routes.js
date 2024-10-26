import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { PokeInfoPage } from "./Pages/PokeInfoPage";

const router=createBrowserRouter([
    {path:"/",element:<MainPage/>},
    {path:"/pokemon/:id",element:<PokeInfoPage/>}
])

export default router;