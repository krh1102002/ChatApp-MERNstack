const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  reciever: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },

},{
    timeStamp:true,
});

const Message=mongoose.Model("Message",messageModel)
module.exports=Message;