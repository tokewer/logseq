shadow$provide.module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$createDeleteWebAuthnCredentialClient = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.createDeleteWebAuthnCredentialClient = void 0;
  const composers_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$internal$index"), handler_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$handler$index"), serde_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$serde$index"), constants_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$constants");
  exports.createDeleteWebAuthnCredentialClient = config => (0,composers_1.composeServiceApi)(handler_1.cognitoUserPoolTransferHandler, (0,serde_1.createUserPoolSerializer)("DeleteWebAuthnCredential"), (0,serde_1.createUserPoolDeserializer)(), {...constants_1.DEFAULT_SERVICE_CLIENT_API_CONFIG, ...config});
};

//# sourceMappingURL=module$too_long_6BCA5E107C23D71F8A3CFBC562A67D45.js.map
