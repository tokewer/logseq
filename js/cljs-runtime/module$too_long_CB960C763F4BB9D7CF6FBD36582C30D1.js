shadow$provide.module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$createGetCredentialsForIdentityClient = function(require, module, exports) {
  Object.defineProperty(exports, "__esModule", {value:!0});
  exports.createGetCredentialsForIdentityClient = void 0;
  const clients_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$index"), internal_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$clients$internal$index"), Platform_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$Platform$index"), constants_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$constants"), handler_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$handler$index"), 
  serde_1 = require("module$node_modules$$aws_amplify$core$dist$cjs$foundation$factories$serviceClients$cognitoIdentity$serde$index");
  exports.createGetCredentialsForIdentityClient = config => (0,internal_1.composeServiceApi)(handler_1.cognitoIdentityTransferHandler, (0,serde_1.createClientSerializer)("GetCredentialsForIdentity"), getCredentialsForIdentityDeserializer, {...constants_1.DEFAULT_SERVICE_CLIENT_API_CONFIG, ...config, userAgentValue:(0,Platform_1.getAmplifyUserAgent)()});
  const getCredentialsForIdentityDeserializer = async response => {
    if (response.statusCode >= 300) {
      throw await (0,clients_1.parseJsonError)(response);
    }
    const body = await (0,clients_1.parseJsonBody)(response);
    return {IdentityId:body.IdentityId, Credentials:deserializeCredentials(body.Credentials), $metadata:(0,clients_1.parseMetadata)(response)};
  }, deserializeCredentials = ({Expiration, ...rest} = {}) => ({...rest, Expiration:Expiration && new Date(Expiration * 1000)});
};

//# sourceMappingURL=module$too_long_CB960C763F4BB9D7CF6FBD36582C30D1.js.map
