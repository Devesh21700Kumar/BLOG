const mongoose = require('mongoose')


const blogSchema = mongoose.Schema ({
    title : {type :String, default : "" },
    content : {type :String, default : "" },
    author : {type :String, default : "" },
    date : {type :String, default : "" },
    imageurl : String,
    id : mongoose.Schema.Types.ObjectId,
    likes : {type :Number, default : 0 },
    comments : [{type : String} ],
    
})

module.exports = mongoose.model('Blog', blogSchema);
