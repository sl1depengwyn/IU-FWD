import { fetchComic } from './xkcd'
import { Game } from './tetris'

fetchComic()

const game = new Game('#game')
game.run()