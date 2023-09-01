import { Route, Routes } from "react-router";
import { routes } from "../../utils/constants";

const Layout = () => {

    return <Routes>
        {
            Object
                .values(routes)
                .map((route) =>
                    <Route element={route.element} path={route.path} key={route.path} />
                )
        }
    </Routes>

    // return <Routes>
    //     <Route path={routes.movies.path} element={<MoviesAllPage />}></Route>
    // </Routes>
}

export default Layout;