export const logoutUser = (navigate) => {
  localStorage.removeItem("admin");
  navigate("/login");
};