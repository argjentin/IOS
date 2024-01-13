const Place = require("../models/Place");
const User = require("../models/User");

class PlaceService {
  // get all places
  static async getAll() {
    return await Place.findAll();
  }

  // getById
  static async getById(id) {
    return await Place.findByPk(id);
  }

  static async getAllUserByPlace(id) {
    return await User.findAll({
      where: {
        PlaceId: id,
      },
    });
  }
}

module.exports = PlaceService;
