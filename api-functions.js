import axios from "axios"

const showRandomGif = async ctx => {
    try {
        ctx.reply('Загружаем...🤔')
        const res = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=&rating=g`)
        ctx.replyWithVideo(res.data.data.images.downsized_medium.url)
    } catch (err) {
        ctx.reply('Ошибочка, попробуй еще раз')
    }
}

export { showRandomGif }