const { Owner } = require('../models');

const ownerData = [{
        first_name: 'Paris',
        last_name: 'Hilton',
        mobile: 4445551234,
        email: 'parisHilton@gmail.com',
        phone: 5554442222,
        notes: 'famous for being famous'
    },
    {
        first_name: 'Taylor',
        last_name: 'Swift',
        mobile: 5555555555,
        email: 'tswift@gmail.com',
        phone: 1114442333,
        notes: 'Taylor is a famous singer'
    },
    {
        first_name: 'Salvador',
        last_name: 'Dali',
        mobile: 6658883333,
        email: 'Salamander@hotmail.com',
        phone: 9998883333,
        notes: 'crazy painter guy'
    },
    {
        first_name: 'Ed',
        last_name: 'Sheeran',
        mobile: 89233388992,
        email: 'sissorhead@aol.com',
        phone: 1429992222,
        notes: 'singer from england'
    },
    {
        first_name: 'Michael',
        last_name: 'Jackson',
        mobile: 7773338888,
        email: 'mjforever@gmail.com',
        phone: 1124449999,
        notes: 'mega pop star'
    },

];

const seedOwner = () => Owner.bulkCreate(ownerData);

module.exports = seedOwner;