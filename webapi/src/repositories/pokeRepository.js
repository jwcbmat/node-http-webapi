const { readFile, writeFile } = require('fs/promises');

class PokeRepository {
    constructor({ file }) {
        this.file = file
    }

    async _currentFileContent() {
        return JSON.parse(await readFile(this.file))
    }

    async find(itemId) {
        const all = await this._currentFileContent()
        if (!itemId) return all

        return all.find(({ id }) => itemId === id)
    }
}

module.exports = PokeRepository

const pokeRepository = new PokeRepository({
    file: "./../../database/data.json"
})

pokeRepository.find(1).then(console.log).catch(err => console.log("error", err))