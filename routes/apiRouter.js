const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const PlaceController = require("../controllers/placeController");
const CompanyController = require("../controllers/companyController");

// USER ROUTES

router.get("/users", UserController.getAll);

router.get("/users/:id", UserController.getById);

router.post("/users", UserController.create);

router.put("/users/:id", UserController.update);

router.put("/users/:id/toggle-place/:placeId", UserController.togglePlace);

// PLACES ROUTES

router.get("/places", PlaceController.getAll);

router.get("/places/:id", PlaceController.getById);

router.get("/places/:id/users", PlaceController.getAllUserByPlace);

router.post("/places", PlaceController.create);

// COMPANIES ROUTES

router.get("/companies", CompanyController.getAll);

router.get("/companies/:id", CompanyController.getById);

router.get("/companies/:id/users", CompanyController.getAllUserByCompany);

module.exports = router;
