export default ({ container }) => {
    return (req, res, next) => {
        req.container = container.createScope();
        next();
    };
};
