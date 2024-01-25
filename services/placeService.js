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

    // create
  static async create(data) {
    // if id = 0, then set it to null
    if (data.id === 0) {
      data.isNull = true;
    } else {
      data.id = parseInt(data.id);
    }
    return await Place.create(data);
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
