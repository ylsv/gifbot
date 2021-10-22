import axios from 'axios'

const showRandomGif = async ctx => {
  try {
    ctx.reply('Загружаем...🤔')
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=g`
    )
    ctx.replyWithVideo(res.data.data.images.downsized_medium.url)
  } catch (err) {
    ctx.reply('Ошибочка, попробуй еще раз')
  }
}

const sendOptionsKeyboard = (ctx, bot) => {
  bot.telegram.sendMessage(ctx.chat.id, 'Что вам прислать?', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'песиков', callback_data: 'dog' },
          { text: 'кошаков', callback_data: 'cat' },
        ],
      ],
    },
  })
}

export { showRandomGif, sendOptionsKeyboard }
