const PlaceService = require("../services/placeService");

class PlaceController {
  // get all places
  static async getAll(req, res) {
    try {
      const entreprises = await PlaceService.getAll();
      res.status(200).json(entreprises);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // getById
  static async getById(req, res) {
    try {
      const entreprise = await PlaceService.getById(req.params.id);
      res.status(200).json(entreprise);
    } catch (err) {
      res.status(500).json(err);
    }
  }

    // create
  static async create(req, res) {
    try {
      const entreprise = await PlaceService.create(req.body);
      res.status(201).json(entreprise);
      console.log(entreprise);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getAllUserByPlace(req, res) {
    try {
      const users = await PlaceService.getAllUserByPlace(req.params.id);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = PlaceController;
