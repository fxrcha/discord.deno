import { Client } from '../models/client.ts'
import { Guild } from '../structures/guild.ts'
import { GatewayIntents } from '../types/gatewayTypes.ts'
import { TOKEN } from './config.ts'

const bot = new Client()

bot.connect(TOKEN, [GatewayIntents.GUILD_MESSAGES])

Guild.autoInit(bot, '').then(a => console.log(a))

setTimeout(async () => {
  const result = Guild.autoInit(bot, '')
  console.log(result)
}, 30000)
