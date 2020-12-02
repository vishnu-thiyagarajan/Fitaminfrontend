export const UserRoles = {
	superadmin: "superadmin",
	admin: "admin",
	chef: "chef",
	nutrition: "nutrition"
};

const roles = {
	superadmins: [UserRoles.superadmin],
	nutritionandadmins: [UserRoles.admin, UserRoles.nutrition],
	admins: [UserRoles.admin],
	nutrition: [UserRoles.nutrition],
	chef: [UserRoles.chef],
	all: [UserRoles.superadmin, UserRoles.admin, UserRoles.nutrition,UserRoles.chef]
}
export default roles;