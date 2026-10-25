shadow$provide.module$node_modules$$aws_amplify$auth$dist$cjs$foundation$factories$serviceClients$cognitoIdentityProvider$shared$handler$cognitoUserPoolTransferHandler = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.cognitoUserPoolTransferHandler = void 0;
  const core_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$index");
  module = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$internal$index");
  require = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$index");
  exports.cognitoUserPoolTransferHandler = (0,module.composeTransferHandler)(require.unauthenticatedHandler, [() => (next, _) => async function(request) {
    request.headers = {...request.headers, "cache-control":"no-store", ...(await core_1.Amplify.libraryOptions?.Auth?.headers?.())};
    return next(request);
  }]);
};

//# sourceMappingURL=module$too_long_21C534101B51BB45B1C64F972DCFFA59.js.map
