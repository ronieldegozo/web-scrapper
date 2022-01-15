exports.get404 = (req, res) => {
    res.status(404).json({
        status: 'Page not found'
    })
};