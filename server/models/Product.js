import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"],
        },
        description: {
            type: String,
            default: "",
            trim: true,
        },
        image: {
            type: String,
            required: [true, "Image is required"],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;