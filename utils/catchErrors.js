function catchErrors(err, displayError) {
  let errMsg;
  if (err.response) {
    // the request was made and the server responded with a status code that is not in range of 2xx
    errMsg = err.response.data;
    console.log('Error response', errMsg);

    // for cloudinary image uploads
    if (err.response.data.error) {
      errMsg = err.response.data.error.message;
    }
  } else if (err.request) {
    // the request was made, but no response was received
    errMsg = err.request;
    console.log('Error request', errMsg);
  } else {
    // Something else happened in making the request that triggered an error
    errMsg = err.message;
    console.error('Error message', errMsg);
  }
  displayError(errMsg);
}

export default catchErrors;
