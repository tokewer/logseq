shadow$provide.module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$cognitoIdentityPoolEndpointResolver = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.cognitoIdentityPoolEndpointResolver = void 0;
  const clients_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$index"), libraryUtils_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$libraryUtils"), constants_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$constants");
  exports.cognitoIdentityPoolEndpointResolver = ({region}) => ({url:new libraryUtils_1.AmplifyUrl(`https://${constants_1.COGNITO_IDENTITY_SERVICE_NAME}.${region}.${(0,clients_1.getDnsSuffix)(region)}`)});
};

//# sourceMappingURL=module$too_long_9A6AB083F7398AD37DE77A76C0DFC23C.js.map
