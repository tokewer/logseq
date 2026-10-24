shadow$provide.module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$createDeleteUserAttributesClient = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.createDeleteUserAttributesClient = void 0;
  const composers_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$internal$index"), handler_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$handler$index"), serde_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$serde$index"), constants_1 = require("module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$constants");
  exports.createDeleteUserAttributesClient = config => (0,composers_1.composeServiceApi)(handler_1.cognitoUserPoolTransferHandler, (0,serde_1.createUserPoolSerializer)("DeleteUserAttributes"), (0,serde_1.createUserPoolDeserializer)(), {...constants_1.DEFAULT_SERVICE_CLIENT_API_CONFIG, ...config});
};

//# sourceMappingURL=module$too_long_2CA89DE50B4B0C714E3CDAB543AE04A2.js.map
