const router = require('express').Router();
const listItemsController = require('../../controllers/listItemsController');

router.route('/')
    .get(listItemsController.findAll)
    .post(listItemsController.create);

router.route('/:id')
    .get(listItemsController.findById)
    .put(listItemsController.update)
    .delete(listItemsController.remove);

module.exports = router;