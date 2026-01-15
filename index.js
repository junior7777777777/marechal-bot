require('dotenv').config();
const { Client, GatewayIntentBits, PermissionFlagsBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const ROLE_AUTORIZADO = 'ID_DO_CARGO_AQUI';

client.once('ready', () => {
  console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!sorteio')) {
    if (!message.member.roles.cache.has(ROLE_AUTORIZADO)) {
      return message.reply('❌ Você não tem permissão para criar sorteios.');
    }

    message.reply('🎉 Sorteio criado com sucesso!');
  }
});

client.login(process.env.TOKEN);