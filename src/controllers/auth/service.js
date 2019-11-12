const {boomify} = require('boom');
const SecurityManagementService = require('../../lib/SecurityManagementService');

exports.login = async (req, reply) => {
  try {
    const tokens = await SecurityManagementService.login(req.body.authDetails.username, req.body.authDetails.password);
    
    if('accessToken' in tokens === false){
      return reply
              .code(401)
              .send();
    }
    return {...tokens};
  } catch (err) {
    throw boomify(err);
  }
};  

exports.refreshAccessToken = async(req, reply) => {
  try {
    const refreshedTokens = await SecurityManagementService.refreshAccessToken(req.body.refreshToken);
    if('accessToken' in refreshedTokens === false) {
      return reply
                .code(401)
                .send();
    }

    return  {...refreshedTokens};
  } catch (err) {
    throw boomify(err);
  }
};

exports.createUser = async(req, reply) => {
  try {
    const user = await SecurityManagementService.createUser(req.body.user);
    return {user};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getUserWithFilter = async(req, reply) => {
  try {
    const users = await SecurityManagementService.getUserWithFilter(req.query, req.headers.authorization);
    return {users};
  } catch (err) {
    throw boomify(err);
  }
};