export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });
export const userDetail = (req, res) =>
  res.send("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.send("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.send("changePassword", { pageTitle: "Change Password" });
