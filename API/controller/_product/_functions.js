const ProductModel = require("../../models/Product.model");
const { sendResponse, sendError } = require("../_helper");

const getAllProducts = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at getAllProducts");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

const getProduct = async (req, res, next) => {
  try {
    const data = await ProductModel.findById(req.params.id);
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: `product ${req.params.id}`,
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at getProduct");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

// TODO pending
const updateProduct = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at updateProduct");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

// TODO pending
const createProduct = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at createProduct");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

// TODO pending
const deleteProduct = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at deleteProduct");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

// TODO pending
const filteredProducts = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    if (!data) {
      sendError(
        {
          title: "no_products",
          msg: "no product found",
        },
        res
      );
    }
    sendResponse(
      {
        msg: "list of Products",
        data,
      },
      res
    );
  } catch (error) {
    console.log("ERROR at filteredProducts");
    sendError(
      {
        title: "server_error",
        msg: error,
      },
      res
    );
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  filteredProducts,
};
