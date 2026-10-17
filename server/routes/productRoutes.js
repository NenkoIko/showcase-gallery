import { router } from 'express';
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct       
} from '../controllers/productControllers';

const productRouter = router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").put(updateProduct).delete(deleteProduct);

export default productRouter;