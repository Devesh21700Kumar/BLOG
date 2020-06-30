import axios from 'axios';

export default {
    getAll : async () => {
        let res = await axios.get('/blogs');
        console.log(res);
        return res || [];
    },
    postOne : async (title, content, date,imgurl) => {
        let res = await axios.post('/blogs/login', {
            title : title,
            content : content,
            date : date,
            imageurl : imgurl
        });
        console.log(res);
        
    },
    deleteOne : async (id) => {
        let res = await axios.delete('/blogs/login/' + id, {data : id});
        console.log(res);
    },
    postLike : async (id, likes) => {
        let res = await axios.patch('/blogs/login/' + id, {
            likes : likes
        });
        console.log(res);
        return res || [];
    },
    postComment : async (id, comments) => {
        let res = await axios.patch('/blogs/login/' + id, {
            comments : comments,
        });
        console.log(res);
        return res || [];
    },
    editOne : async (id, title, content, url) => {
        let res = await axios.patch('/blogs/login/' + id, {
            title : title,
            content : content,
            imageurl : url,
        });
        console.log(res);
        return res || [];
    }
}


