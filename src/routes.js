import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import HomePage from "./pages/HomePage/HomePage"
import ProductListPage from "./pages/ProductListPage/ProductListPage"
import ActionProductPage from "./pages/ActionsProductPage/ActionProductPage"

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/product-list",
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: "/add",
        exact: false,
        main: ({history}) => <ActionProductPage history={history}/>
    },
    {
        path: "/:id/edit",
        exact: false,
        main: ({history , match}) => <ActionProductPage match={match} history={history}/>
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes