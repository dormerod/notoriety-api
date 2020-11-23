function handler(lambda: (event: { body: string }, context: object) => object) {
  return async function (event: { body: string }, context: object) {
    let body: object, statusCode: number;

    try {
      // Run the Lambda
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      body = { error: e.message };
      statusCode = 500;
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}

export default handler;
