shadow$provide.module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$serde$createUserPoolSerializer = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.createUserPoolSerializer = void 0;
  exports.createUserPoolSerializer = operation => (input, endpoint) => {
    const headers = {"content-type":"application/x-amz-json-1.1", "x-amz-target":`AWSCognitoIdentityProviderService.${operation}`};
    input = JSON.stringify(input);
    return buildHttpRpcRequest(endpoint, headers, input);
  };
  const buildHttpRpcRequest = ({url}, headers, body) => ({headers, url, body, method:"POST"});
};

//# sourceMappingURL=module$too_long_61B54FDF2BA751C559B1C28655BAD2C3.js.map
