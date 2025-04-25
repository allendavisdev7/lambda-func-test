exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Testing lambda function",
      input: event,
    }),
  };
};