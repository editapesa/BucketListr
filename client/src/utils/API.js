import axios from 'axios';

let API =  {
    getListItems: function() {
        return axios.get('/api/listitem');
    },

    getListItem: function(id) {
        return axios.get('/api/listitem/' + id);
    },

    deleteListItem: function(id) {
        return axios.delete('/api/listitem' + id);
    },

    saveListItem: function(listItemData) {
        return axios.listItem('/api/listitem', listItemData);
    }
};

export default API;