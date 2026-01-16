const ROLE_AUTORIZADO = 1445625887021334548;

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!sorteio")) {
    const member = message.member;

    const isOwner = message.guild.ownerId === message.author.id;
    const isAdmin = member.permissions.has("Administrator");
    const hasRole = member.roles.cache.has(ROLE_AUTORIZADO);

    if (!isOwner && !isAdmin && !hasRole) {
      return message.reply("❌ Você não tem permissão para criar sorteios.");
    }

    message.reply("🎉 Sorteio criado com sucesso!");
  }
});
