exports.index = function(req, res) {
    console.log('index')
    res.status(200).json({
        message: 'index',
        payload: {
            'query': req.query,
            'params': req.params
        }
    });
};

exports.show = function(req, res) {
    console.log('show')
    res.status(200).json({
        message: 'show',
        payload: {
            'query': req.query,
            'params': req.params
        }
    });
};

exports.store = function(req, res) {
    res.status(200).json({
        message: 'store',
        payload: {
            'query': req.query,
            'params': req.params
        }
    });
};

exports.update = function(req, res) {
    res.status(200).json({
        message: 'update'
    });
};

exports.destroy = function(req, res) {
    res.status(200).json({
        message: 'destroy'
    });
};