'use strick';


var root = '/pixels';


module.exports = {
    /*
    Create pixel
    @param: search, type, sort, per_page
    */
    create: {
        method: "post",
        endpoint: root,
        params: ['search', 'type', 'sort', 'per_page'],
        args: ['id'],
    },

    /*
    Get pixel
    */
    get: {
        method: "get",
        endpoint: [root, '/{id}'],
        args: ['id'],
    },

    /*
    Get pixels  
    */
    list: {
        method: "get",
        endpoint: root,
    },


    /*
    Update pixel
    @params: name, type, pixel_id
    */
    update: {
        method: "put",
        endpoint: [root, '/{id}'].join(''),
        params: ['name', 'type', 'pixel_id'],
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