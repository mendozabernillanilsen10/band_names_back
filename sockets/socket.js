const { io } = require('../index');
const BandsModel = require('../models/bands');
const Band = require('../models/band');

const bands = new BandsModel();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Héroes del Silencio'));
bands.addBand(new Band('Metallica'));

console.log(bands);

io.on('connection', client => {
    console.log('Cliente conectado');

    client.emit('bands', bands.getBands());

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje:', payload);
        io.emit('mensaje', { mensaje: 'Nuevo mensaje del servidor' });
    });

    client.on('votar-banderolo', (payload) => {
        console.log('Voto:', payload);
        bands.voteBand(payload.id);
        io.emit('bands', bands.getBands());
    });

    client.on('nuevo-banda', (payload) => {
        console.log('Banda:', payload);
        const newBand = new Band(payload.name);
        bands.addBand(newBand);
        io.emit('bands', bands.getBands());
    });

    client.on('delete-band', (payload) => {
        console.log('Eliminar:', payload);
        bands.deleteBand(payload.id);
        io.emit('bands', bands.getBands());
    });
    
});
