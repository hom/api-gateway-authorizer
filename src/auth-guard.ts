module.exports.handler = async (event) => {
  console.log(event);
  const { methodArn, headers } = event;
  const xApiKey = headers['x-api-key'] || '';
  let effect = 'Deny';
  if (xApiKey === '1234567890') {
    effect = 'Allow';
  }

  const policy = {
    principalId: '1234567890',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: methodArn,
        },
      ],
    },
  };
  return policy;
};
