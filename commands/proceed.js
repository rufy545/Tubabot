module.exports = {
    name: 'procced',
    description: "ohhhhhhhhhh colors",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#E5FF00')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription('this is a test')
        .addFields(

            {name: 'rule1', value: 'benice'},
            {name: 'rule2', value: 'shutup'}
        )
        .setImage('https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
        .setFooter('testetstetuvhrusbtrhvgbrsthvbtfhbgsvybvfyvshbdgvbfsyt')
        message.channel.send(newEmbed);
        message.channel.send('to you want to procced type example *yL2v4 or *nL2v4');
        
    }

    
}