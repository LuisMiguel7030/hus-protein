import Home from '../views/Home/Home.jsx';
import Task from '../views/Task/Task.jsx';

import { Store, Subject } from '@material-ui/icons';

const dashboardRoutes = [
    {
        path: "/",
        exact: true,
        sidebarName: "Home",
        navbarName: "Hus Protein",
        icon: Store,
        component: Home
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