const Band = require("./band");

class BandsModel {
    constructor() {
        this.bands = [];
    }
    addBand(band = new Band()) {
        this.bands.push(band);
    }
    getBands() {
        return this.bands;
    }

    getBands() {
        return this.bands;
    }
    deleteBand(id = '') {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }
    voteBand(id = '') {
        // En lugar de hacerlo así, podría ser mejor hacerlo en la base de datos
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
            }
            return band;
        });
        return this.bands;

    }
    getBandById(id) {
        return this.bands.find(band => band.id === id);
    }

    updateBand(id, changes) {
        const bandIndex = this.bands.findIndex(band => band.id === id);
        if (bandIndex >= 0) {
            this.bands[bandIndex] = { ...this.bands[bandIndex], ...changes };
        }

        return this.bands[bandIndex];
    }

}
module.exports = BandsModel;
