const User = require('../../models/User');

module.exports = {
    Mutation: {
        async createMessage(_, {messageInput: {text, username} }) {
            
        }
    },
    Query: {
       // message: (_, {ID}) => Message.findById(ID)
    }
}