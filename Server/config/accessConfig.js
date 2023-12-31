const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type,Authorization,Accept-Ranges,Content-Range'
    )
    next()
  }
  
  module.exports = allowCrossDomain