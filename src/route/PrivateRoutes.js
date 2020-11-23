import Home from "../components/Home";
import Admin from "../components/Admin";
import roles from '../config/roles';
import CreateUser from '../components/CreateUser';

const PrivateRoutes = [
    {
      path: '/',
      component: Home,
      exact: true,
      requiredRoles: roles.all,
    },
    {
        path: '/admin',
        component: Admin,
        exact: true,
        requiredRoles: roles.admins,
    },
    {
        path: '/createuser',
        component: CreateUser,
        exact: true,
        requiredRoles: roles.all,
    },
]

export default PrivateRoutes