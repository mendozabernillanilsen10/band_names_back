const { v4: uuidv4 } = require('uuid');

class Band {
    constructor(name = ' NO NAME ') {
        this.id = uuidv4();
        this.name = name;
        this.votes = 0;
    }
}

module.exports = Band;