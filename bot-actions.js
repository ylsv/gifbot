const axios = require('axios')
const { GIF_OPTIONS, RANDOM_OPTION } = require('./constants')

async function showRandomGif(ctx) {
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

async function showSpecificGif(ctx) {
  try {
    ctx.reply('Загружаем...🤔')
    const offset = Math.floor(Math.random() * 500)
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${ctx.update.callback_query.data}&limit=1&offset=${offset}&rating=g&lang=ru`
    )
    const gifArray = res.data.data
    gifArray.forEach(gif => ctx.replyWithVideo(gif.images.downsized_medium.url))
  } catch (err) {
    ctx.reply('Ошибочка, попробуй еще раз')
  }
}

function sendOptionsKeyboard(ctx, bot, questionMessage) {
  bot.Composer.sendMessage(ctx.chat.id, questionMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: GIF_OPTIONS.KITTEN.text, callback_data: GIF_OPTIONS.KITTEN.callback },
          { text: GIF_OPTIONS.DOGS.text, callback_data: GIF_OPTIONS.DOGS.callback },
        ],
        [
          { text: GIF_OPTIONS.AUTUMN.text, callback_data: GIF_OPTIONS.AUTUMN.callback },
          { text: GIF_OPTIONS.WINTER.text, callback_data: GIF_OPTIONS.WINTER.callback },
        ],
        [
          { text: GIF_OPTIONS.SPRING.text, callback_data: GIF_OPTIONS.SPRING.callback },
          { text: GIF_OPTIONS.SUMMER.text, callback_data: GIF_OPTIONS.SUMMER.callback },
        ],
        [
          { text: GIF_OPTIONS.SKY.text, callback_data: GIF_OPTIONS.SKY.callback },
          { text: GIF_OPTIONS.CLOUDS.text, callback_data: GIF_OPTIONS.CLOUDS.callback },
        ],
        [
          { text: GIF_OPTIONS.MOUNTAINS.text, callback_data: GIF_OPTIONS.MOUNTAINS.callback },
          { text: GIF_OPTIONS.WATERFALL.text, callback_data: GIF_OPTIONS.WATERFALL.callback },
        ],
        [
          { text: GIF_OPTIONS.JOKES.text, callback_data: GIF_OPTIONS.JOKES.callback },
          { text: GIF_OPTIONS.MOTIVATION.text, callback_data: GIF_OPTIONS.MOTIVATION.callback },
        ],
        [
          { text: RANDOM_OPTION.text, callback_data: RANDOM_OPTION.callback },
        ],
      ],
    },
  })
}

module.exports = { showRandomGif, showSpecificGif, sendOptionsKeyboard }
