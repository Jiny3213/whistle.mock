class Host {
  constructor() {
    this._host = ''
  }
  getHost () {
    return this._host
  }
  setHost (host) {
    this._host = host
  }
}
const host = new Host()
exports.host = host

exports.hostMiddleware = function (req, res, next) {
  host.setHost(req.originalReq.headers.host)
  next()
}