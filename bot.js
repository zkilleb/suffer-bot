var Discord = require('discord.js');
var client = new Discord.Client();
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

client.on('ready', function (evt) {
    var list = [];
    client.channels.forEach(channel => {
        list.push(channel.name)
    });
    logger.info('Connected to: ' + list);
    logger.info('Started.');
});
client.on('message', function (msg) {
    if (msg.author.username === "Jasper") {
        msg.channel.send('@Jasper#9254 *shhh*');
        msg.delete();
    } 
    else
    if (msg.content.substring(0, 1) == '!') {
        var args = msg.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);

        switch(cmd) {
            case 'ping':
                msg.channel.send('Pong!')
                    .then(msg => logger.info(`Sent message replying to ${msg.author.id}.`));
                break;
            case 'source':
                msg.channel.send(`${msg.author} https://github.com/MADLAB96/suffer-bot`);
                break;
            case 'help':
                msg.channel.send(`I can't even help myself :gun:`);
            case 'sharren':
                msg.channel.send('why did she leave me');
            default:
                msg.channel.send('Unknown Command :b:ussy');
        }
    } 
});

client.login(auth.token);
