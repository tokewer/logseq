shadow$provide.module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$handler$cognitoIdentityTransferHandler = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.cognitoIdentityTransferHandler = void 0;
  module = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$index");
  const internal_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$internal$index");
  require = require("module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$middleware$index");
  exports.cognitoIdentityTransferHandler = (0,internal_1.composeTransferHandler)(module.unauthenticatedHandler, [require.createDisableCacheMiddleware]);
};

//# sourceMappingURL=module$too_long_46BF990BD497DE28DC8184BED4AC1644.js.map
