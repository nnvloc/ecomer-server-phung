import { UserService } from '@services';

class UserController {
  async getUsers(req, res, next) {
    try {
      const results = await UserService.getUsers();
      res.json({
        success: true,
        results,
      });
    } catch(err) {
      next(err);
    }
  }

  async getProfile(req, res, next) {
    const {user} = req;
    if (!user) {
      throw new Error('Unauthorized');
    }

    res.json({
      success: true,
      user,
    });
  }

  getUserById(req, res, next) {
    res.json({
      success: true,
      result: {}
    })
  }

  async createUser(req, res, next) {
    try {
      const result = await UserService.createUser(null);
      res.json({
        success: true,
        result,
      });
    } catch(err) {
      next(err);
    }
  }
}

export default new UserController();
