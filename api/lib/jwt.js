const jwt = require('koa-jwt');
const fs = require('fs');

const publicKey = fs.readFileSync('api/lib/keys/dragonChat.rsa.pub');
const privateKey = fs.readFileSync('api/lib/keys/dragonChat.rsa');

const algorithm = { algorithm: 'RS256' };

function signJWT(user) {
  const token = jwt.sign(user, privateKey)
  return token;
};

function verifyJWT(webToken) {
  return jwt.verify(webToken, publicKey);
}

module.exports.sign = signJWT;
module.exports.verify = verifyJWT;
