'use strict';

module.exports = {
  handler: function(request, reply) {
    console.log(request.auth.credentials.email);
    reply({email: request.auth.credentials.email});
  }
};
