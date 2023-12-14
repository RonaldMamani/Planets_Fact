import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Mercury from "../pages/Mercury"
import Venus from "../pages/Venus"
import Mars from "../pages/Mars"
import Earth from "../pages/Earth"
import Jupiter from "../pages/Jupiter"
import Uranus from "../pages/Uranus"
import Saturn from "../pages/Saturn"
import Neptune from "../pages/Neptune"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [{
            index: true,
            element: <Mercury />
        },{
            path: "venus",
            element: <Venus />
        },{
            path: "earth",
            element: <Earth />
        },{
            path: "mars",
            element: <Mars />
        },{
            path: "jupiter",
            element: <Jupiter />
        },{
            path: "saturn",
            element: <Saturn />
        },{
            path: "uranus",
            element: <Uranus />
        },{
            path: "neptune",
            element: <Neptune />
        }
        ]
    }
])

export default router