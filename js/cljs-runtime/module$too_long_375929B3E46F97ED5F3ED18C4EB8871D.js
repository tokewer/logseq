shadow$provide.module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$serde$createUserPoolDeserializer = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.createUserPoolDeserializer = void 0;
  const aws_client_utils_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$index"), assertServiceError_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$errors$utils$assertServiceError"), AuthError_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$errors$AuthError");
  exports.createUserPoolDeserializer = () => async response => {
    if (response.statusCode >= 300) {
      throw response = await (0,aws_client_utils_1.parseJsonError)(response), (0,assertServiceError_1.assertServiceError)(response), new AuthError_1.AuthError({name:response.name, message:response.message, metadata:response.$metadata});
    }
    return (0,aws_client_utils_1.parseJsonBody)(response);
  };
};

//# sourceMappingURL=module$too_long_375929B3E46F97ED5F3ED18C4EB8871D.js.map
