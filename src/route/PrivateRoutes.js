import Home from "../components/Home";
import Admin from "../components/Admin";
import roles from '../config/roles';
import AddCore from '../components/AddCore';
import AddCustom from '../components/AddCustom';
import ResetPassword from '../components/ResetPassword';

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
        path: '/addcore',
        component: AddCore,
        exact: true,
        requiredRoles: roles.nutritionandadmins,
    },
    {
        path: '/addcustom',
        component: AddCustom,
        exact: true,
        requiredRoles: roles.nutritionandadmins,
    },
    {
        path: '/resetPassword',
        component: ResetPassword,
        exact: true,
        requiredRoles: roles.all,
    },
]

export default PrivateRoutes