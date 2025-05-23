const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

async function pushMessages(value){
  messages.push(value);
  return messages;
};

async function getMessage(value){
  return messages[value];
};

module.exports = {messages, pushMessages, getMessage};