function sendError(err, res) {
  // send user defined errors to frontend.
  let status = err.status ? err.status : 500;
  res.status(status).json({
    success: false,
    title: err.title,
    msg: err.msg,
  });
}

function sendResponse(response, res) {
  // send the successful response to frontend.
  res.status(200).json({
    success: true,
    msg: response.msg,
    data: response.data,
  });
}

module.exports = { sendError, sendResponse };
