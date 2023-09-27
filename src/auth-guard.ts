import { Handler } from 'aws-lambda';

type PolicyDocumentStatement = {
  Action: string;
  Effect: string;
  Resource: string | string[];
};

type PolicyDocument = {
  Version: string;
  Statement: PolicyDocumentStatement[];
};

type Policy = {
  principalId: string;
  policyDocument: PolicyDocument;
};

function createAuthorizePolicy(principalId, effect, resource) {
  if (effect && resource) {
    const policyDocument = {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        },
      ],
    };
    const policy: Policy = {
      principalId,
      policyDocument,
    };
    console.log(policy);
    return policy;
  }
  return {};
}

export const handler: Handler = async (event: any) => {
  console.log(event);
  const { type, methodArn, authorizationToken } = event;
  const principalId = '1234567890';
  if (type !== 'TOKEN' || authorizationToken !== '1234567890') {
    return createAuthorizePolicy(principalId, 'Deny', methodArn);
  }
  return createAuthorizePolicy(principalId, 'Allow', methodArn);
};
