const User = require("../models/User");
const Place = require("../models/Place");

class UserService {
  // get all users
  static async getAll() {
    return await User.findAll();
  }

  // getById
  static async getById(id) {
    return await User.findByPk(id);
  }

  // create
  static async create(data) {
    return await User.create(data);
  }

  // update
  static async update(id, data) {
    return await User.update(data, {
      where: { id: id },
    });
  }

  static async togglePlace(id, placeId) {
    const user = await User.findByPk(id);
    const place = await Place.findByPk(placeId);

    if (!user) {
      throw new Error("User not found");
    }

    if (placeId === "0") {
      // Pour supprimer la relation (définir la place de l'utilisateur sur null)
      await user.setPlace(null);
    } else if (place) {
      // Pour établir la relation avec un emplacement existant
      await user.setPlace(place);
    } else {
      throw new Error("Place not found");
    }

    return user;
  }
}

module.exports = UserService;
