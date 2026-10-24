shadow$provide.module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$createListWebAuthnCredentialsClient = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.createListWebAuthnCredentialsClient = void 0;
  const composers_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$internal$index"), handler_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$handler$index"), serde_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$serde$index"), constants_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$constants");
  exports.createListWebAuthnCredentialsClient = config => (0,composers_1.composeServiceApi)(handler_1.cognitoUserPoolTransferHandler, (0,serde_1.createUserPoolSerializer)("ListWebAuthnCredentials"), (0,serde_1.createUserPoolDeserializer)(), {...constants_1.DEFAULT_SERVICE_CLIENT_API_CONFIG, ...config});
};

//# sourceMappingURL=module$too_long_14D43CFF0D707B66FE51A52DAE126182.js.map
