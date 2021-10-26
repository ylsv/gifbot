const GIF_OPTIONS = {
    KITTEN: {
        text: 'котят 🐈',
        callback: 'kitten',
    },
    DOGS: {
        text: 'песиков 🐕',
        callback: 'puppies',
    },
    AUTUMN: {
        text: 'осень 🍂',
        callback: 'autumn',
    },
    WINTER: {
        text: 'зиму ❄️',
        callback: 'winter',
    },
    SPRING: {
        text: 'весну 🌱',
        callback: 'spring',
    },
    SUMMER: {
        text: 'лето 🌻',
        callback: 'summer',
    },
    SKY: {
        text: 'небо 🌈',
        callback: 'sky',
    },
    CLOUDS: {
        text: 'облака ☁️',
        callback: 'clouds',
    },
    MOUNTAINS: {
        text: 'горы ⛰️',
        callback: 'mountains',
    },
    WATERFALL: {
        text: 'водопад 🌊',
        callback: 'waterfall',
    },
    JOKES: {
        text: 'шутки 😏',
        callback: 'joke',
    },
    MOTIVATION: {
        text: 'мотивацию 💪',
        callback: 'motivation',
    },
}

const RANDOM_OPTION = {
    text: 'что-нибудь 🙄',
    callback: 'random',
}

const HELPTEXT = 'Привет! Я могу прислать любые интерактивные изображения на ваш вкус. Введите команду /start, чтобы отобразить несколько вариантов'

export { GIF_OPTIONS, RANDOM_OPTION, HELPTEXT }