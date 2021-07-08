import axios from 'axios';

let API =  {
    getListItems: function() {
        return axios.get('/api/listitem');
    },

    getListItem: function(id) {
        return axios.get('/api/listitem/' + id);
    },

    deleteListItem: function(id) {
        return axios.delete('/api/listitem/' + id);
    },

    saveListItem: function(listItemData) {
        console.log(listItemData);
        return axios.post('/api/listitem', listItemData);
    },

    getUser: function(id) {
        return axios.get('/api/user/' + id);
    },

    saveUser: function(userData) {
        console.log(userData);
        return axios.post('/api/user', userData);
    }
};

export default API;