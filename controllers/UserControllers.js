import UserService from "../services/UserService.js";

class UserControllers {
  userService = new UserService();

  getAllUsers = (req, res) => {
    try {
      const users = this.userService.getAllUsersService();
      res.status(200).send(users);
    } catch (error) {
      res.status(404).send("get all users");
    }
  };
  getUserById = (req, res) => {
    const user = this.userService.getUserByIdService();
    res.status(200).send(user);
  };
  createUser = (req, res) => {
    const user = this.userService.createUserService();
    res.status(200).send(user);
  };
  updateUser = (req, res) => {
    const user = this.userService.updateUserService();
    res.status(200).send(user);
  };
  deleteUser = (req, res) => {
    const user = this.userService.deleteUserService();
    res.status(200).send(user);
  };
}

export default UserControllers;
