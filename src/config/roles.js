export const UserRoles = {
	superAdmin: "superAdmin",
	admin: "admin",
	deoperator: "deoperator",
};

const roles = {
	superadmins: [UserRoles.superAdmin],
	deoperatorsandadmins: [UserRoles.admin, UserRoles.deoperator],
	admins: [UserRoles.admin],
	deoperators: [UserRoles.deoperator],
	all: [UserRoles.superAdmin, UserRoles.admin, UserRoles.deoperator]
}
export default roles;