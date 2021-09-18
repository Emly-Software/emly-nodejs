'use strict';


var root =  "/domains";

module.exports = {

    /*
    Create space
    @params: name, search, not_found_page
    */
    create: {
        method: "post",
        endpoint: root,
        params: ['name', 'search', 'not_found_page'],
    },

    /*
    Create space
    @params: name, index_page, not_found_page
    */
    list: {
        method: "get",
        endpoint: root,
    },

     /*
    Get domain
    */
    get: {
        method: "get",
        endpoint: [root, '/{id}'].join(''),
        args: ['id'],
    },
    /*
    Get domain
    */
    update: {
        method: "put",
        endpoint: [root, '/{id}'].join(''),
        params: ['index_page', 'index_page'],
        args: ['id'],
    },

    /*
    Delete domain
    */
    delete: {
        method: "delete",
        endpoint: [root, '/{id}'].join(''),
        args: ['id'],
    },

}