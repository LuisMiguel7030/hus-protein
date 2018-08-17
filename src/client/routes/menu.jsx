import Home from '../views/Home/Home.jsx';
import Task from '../views/Task/Task.jsx';

import { Store, Subject, KeyboardArrowRight } from '@material-ui/icons';

const dashboardRoutes = [
    {
        path: "/",
        exact: true,
        sidebarName: "Inicio",
        navbarName: "Hus Protein",
        icon: Store,
        component: Home
    },
    {
        path: "/task",
        sidebarName: "Masa Muscular",
        navbarName: "Task",
        icon: '',
        component: Task
    },
    {
        path: "/task",
        sidebarName: "Pérdida De Peso",
        navbarName: "Task",
        icon: '',
        component: Task
    },
    {
        path: "/task",
        sidebarName: "Energia",
        navbarName: "Task",
        icon: '',
        component: Task
    },
    {
        path: "/task",
        sidebarName: "Alimentos",
        navbarName: "Task",
        icon: '',
        component: Task
    },
    {
        path: "/task",
        sidebarName: "Marcas",
        navbarName: "Task",
        icon: '',
        component: Task
    },
    {
        path: "/task",
        sidebarName: "Task",
        navbarName: "Task",
        icon: Subject,
        component: Task
    },
];

export default dashboardRoutes;