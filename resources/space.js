'use strick';

var root = '/spaces';


module.exports = {

    /*
    Create space
    @params: name, color,
    */
    create: {
        method: "post",
        endpoint: root,
        params: ['name', 'color'],
    },

    /*
    Get spaces
    @params: name, color,
    */
    list: {
        method: "get",
        endpoint: root,
        params: ['search', 'sort', 'per_page'],
    },

    /*
    Get space
    */
   get:{
       method: 'get',
       endpoint: [root, '/{id}'].join(''),
       args: ['id'],
   },

   /*
    Update space
    @params: name, color
    */
    update:{
        method: 'put',
        endpoint: [root, '/{id}'].join(''),
        params: ['name', 'color'],
        args: ['id'],
    },

    /*
    Delete space
    @params: name, color
    */
    delete: {
        method: "post",
        endpoint: [root, '/{id}'].join(''),
        args: ['id'],
    }


}