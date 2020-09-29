const events = require('events');
const net = require('net');

const channel = new events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
  this.clients[id] = client;
  this.subscriptions[id] = (senderId, message) => {
    if (id != senderId) {
      this.clients[id].write(message);
    }
  }
  this.on('broadcast', this.subscriptions[id]);

})
channel.on('leave', id => {
  channel.removeListener('broadcast', this.subscriptions[id]);
  channel.emit('broadcast', id, `${id} has left the chatroom.\n`)
})
const server = net.createServer(client => {
  const id = `${client.remoteAddress}:${client.remotePort}`;
  console.log(id)
  channel.emit('join', id, client);
  client.on('data', data => {
    data = data.toString();
    channel.emit('broadcast', id, data);
  });
  client.on('close', ()=> {
    channel.emit('leave', id)
  })
});
server.listen(9000);