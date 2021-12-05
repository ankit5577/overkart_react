const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product Title is required"],
    trim: true
  },
  id: {
    type: String,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Product Description is required"],
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
  type: {
    type: String,
    required: [true, "Product Type is required"],
  },
  brand: {
    type: String,
    trim: true,
    required: [true, "Product Brand is required"],
  },
  collections: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
    required: [true, "Product Category is required"],
  },
  price: {
    type: Number,
    required: true,
  },
  sale: {
    type: Boolean,
    required: true,
  },
  discount: {
    type: Number,
  },
  stock: {
    type: Number,
    required: true,
  },
  new: {
    type: Boolean,
    default: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  varients: {
    type: [
      {
        varient_id: {
          type: Number,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        sku: {
          type: String,
        },
        size: {
          type: String,
        },
        color: {
          type: String,
        },
        image_id: {
          type: Number,
        },
      },
    ],
  },
  images: {
    type: [
      {
        image_id: {
          type: Number,
          required: false,
        },
        id: {
          type: Number,
          required: false,
        },
        alt: {
          type: String,
        },
        src: {
          type: String,
          required: true,
        },
        varient_id: [
          {
            type: Number,
          },
        ],
      },
    ],
    required: false,
  },
});

module.exports = mongoose.model("products", ProductsSchema);
