'use strict';

var root = '/stats';


module.exports = {
    list: {
        method: 'get', 
        params: ['from', 'to', 'name', 'search', 'sort', 'sort'],
        endpoint: [root, '/{id}'],
        args: ['id'],
    }
}