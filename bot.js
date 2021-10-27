// import { Telegraf } from 'telegraf'
const { Composer } = require('micro-bot')
import dotenv from 'dotenv'
dotenv.config()
import { sendOptionsKeyboard, showRandomGif, showSpecificGif } from './bot-actions.js'
import { GIF_OPTIONS, HELPTEXT, RANDOM_OPTION, WHATSUP_RESPONSE_OPTIONS } from './constants.js'

// const bot = new Telegraf(process.env.BOT_TOKEN)
const bot = new Composer()

// default commands
bot.help(ctx => ctx.reply(HELPTEXT))
bot.start(ctx => sendOptionsKeyboard(ctx, bot, 'Что вам прислать сегодня? 😀' ))

// handle specific and gif options
Object.entries(GIF_OPTIONS).forEach(entry => {
    const cb = entry[1].callback
    bot.action(cb, ctx => {
        ctx.deleteMessage()
        showSpecificGif(ctx)
        setTimeout(() => {sendOptionsKeyboard(ctx, bot, 'Что-нибудь еще? 😀')}, 3000)
    })
})
bot.action(RANDOM_OPTION.callback, ctx => {
    ctx.deleteMessage()
    showRandomGif(ctx)
    setTimeout(() => {sendOptionsKeyboard(ctx, bot, 'Что-нибудь еще? 😀')}, 3000)
})

// random actions to add more interactivity
bot.on('sticker', ctx => ctx.reply('😜'))
bot.hears(/рандом/i, ctx => showRandomGif(ctx))
bot.hears(/random/i, ctx => showRandomGif(ctx))
bot.hears(/привет/i, ctx => ctx.reply(`Привет-привет, ${ctx.chat.first_name}!`))
bot.hears(/как дела\??/i, ctx => {
    const response = WHATSUP_RESPONSE_OPTIONS[Math.floor(Math.random()*WHATSUP_RESPONSE_OPTIONS.length)]
    ctx.reply(response)
})

// bot.launch()
module.exports = bot
