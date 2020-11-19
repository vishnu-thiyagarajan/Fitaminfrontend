import Home from "../components/Home";
import Admin from "../components/Admin";
import roles from '../config/roles';

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
]

export default PrivateRoutes