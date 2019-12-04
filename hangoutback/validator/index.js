exports.createPostValidator = (req, res, next) => {
    req.check('title', "Create a proper event title").notEmpty();
    req.check('title', 'Create a more descriptive title').isLength({
        min: 4,
        max: 150
    });
    req.check('body', "Create a proper event description").notEmpty();
    req.check('body', 'A body of character 4-2000 is required').isLength({
        min: 1,
        max: 2000
    });
    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}