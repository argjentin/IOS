const Company = require("../models/Company");
const User = require("../models/User");

class CompanyService {
  // get all entreprises
  static async getAll() {
    return await Company.findAll();
  }

  // getById
  static async getById(id) {
    return await Company.findByPk(id);
  }

  // get all users by entreprise
  static async getAllUserByCompany(id) {
    return await User.findAll({
      where: {
        CompanyId: id,
      },
    });
  }
}

module.exports = CompanyService;
