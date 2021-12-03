const router = require("express").Router();
const {
  getAllProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  filteredProducts
} = require("./_product/_functions");

// get all products
router.get("/all", getAllProducts);

// get filtered products
router.post("/filter", filteredProducts);

// get single product by ID
router.get("/:id", getProduct);

// update product by ID
router.put("/update", updateProduct);

// create product
router.put("/create", createProduct);

// delete product by ID
router.delete("/delete", deleteProduct);

module.exports = router;
