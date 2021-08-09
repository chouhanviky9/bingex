const mongoose=require('mongoose');

const StreamsSchema={
    
    name:{type:String},
    link:{type:String}
}

const Stream = mongoose.model('Stream', StreamsSchema);
module.exports = Stream;
