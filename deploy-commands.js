const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("criarsorteio")
    .setDescription("Criar um sorteio")
    .addStringOption(o => o.setName("nome").setDescription("Nome do sorteio").setRequired(true))
    .addStringOption(o => o.setName("datahora").setDescription("AAAA-MM-DD HH:MM").setRequired(true))
    .addIntegerOption(o => o.setName("vencedores").setDescription("Qtd de vencedores").setRequired(true)),

  new SlashCommandBuilder()
    .setName("adicionarcodigo")
    .setDescription("Adicionar código do YouTube (staff)")
    .addStringOption(o => o.setName("codigo").setDescription("Código").setRequired(true)),

  new SlashCommandBuilder()
    .setName("codigosorteio")
    .setDescription("Participar do sorteio")
    .addStringOption(o => o.setName("codigo").setDescription("Código").setRequired(true))
].map(c => c.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );
    console.log("✅ Comandos registrados com sucesso");
  } catch (e) {
    console.error(e);
  }
})();