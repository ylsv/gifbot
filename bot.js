import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'
dotenv.config()
import { sendOptionsKeyboard, showRandomGif } from './bot-actions.js'
const bot = new Telegraf(process.env.BOT_TOKEN)

// default commands
bot.help(ctx => ctx.reply('Присылаю интерактивные изображения на ваш вкус'))
bot.start(ctx => sendOptionsKeyboard(ctx, bot))

bot.action('dog', ctx => {
    //reply logic goes here
})

// random actions to add more interactivity
bot.on('sticker', ctx => ctx.reply('😜'))
bot.hears(/рандом/i, ctx => showRandomGif(ctx))
bot.hears(/random/i, ctx => showRandomGif(ctx))
bot.hears(/привет/i, ctx => ctx.reply('Привет-привет!'))
bot.hears(/сиськи/i, ctx => ctx.reply('Письки 😱'))

bot.launch()
