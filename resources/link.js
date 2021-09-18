'use strict';

var root = "/links";

module.exports = {

    /*
    Create link
    @param: url, alias, password, space, domain, pixels, domain, pixels, disabled, privacy, privacy_password, expiration_date, expiration_date, expiration_time, expiration_clicks, target_type,
   */
    create: {
        method: "post",
        endpoint: root,
        params: ['url*', 'alias', 'password', 'space', 'domain', 'pixels', 'disabled', 'privacy', 'privacy_password', 'expiration_url', 'expiration_date', 'expiration_time', 'expiration_clicks', 'target_type', ]
    },

    /*
    Get link,
    @param: id,
    */

    get: {
        method: "get",
        endpoint: [root, '/{id}'].join(""),
        args: ['id'],
    },

     /*
    Get links,
    */

    list: {
        method: "get",
        endpoint: root,
    },

    /*
    updat link,
    params: url, alias, password, space, domain, pixels, domain, pixels, disabled, privacy, privacy_password, expiration_date, expiration_date, expiration_time, expiration_clicks, target_type,
    */

    update: {
        method: "put",
        endpoint: [root, '/{id}'].join(''),
        params: ['url*', 'alias', 'password', 'space', 'domain', 'pixels', 'disabled', 'privacy', 'privacy_password', 'expiration_url', 'expiration_date', 'expiration_time', 'expiration_clicks', 'target_type', ],
        args: ['id'],
    },

    delete: {
        method: 'delete',
        endpoint: [root, '/{id}'].join(''),
    }
}