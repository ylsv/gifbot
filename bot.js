import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'
dotenv.config()
import { showRandomGif } from './api-functions.js'

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Привет'))
bot.help((ctx) => ctx.reply('Пиши любой текст - пришлю рандомную гифку'))
bot.on('sticker', (ctx) => ctx.reply('Ха-ха 😜'))
bot.on('text', ctx => showRandomGif(ctx))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))


bot.launch()