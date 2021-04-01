const {
    Pet
} = require('../models');

const petData = [{
        name: 'Tinkerbell',
        birth_date: '2016-08-09',
        species_id: 4,
        notes: 'nasty dog'
    },
    {
        name: 'Merideth',
        birth_date: '2016-08-09',
        species_id: 4,
        notes: 'taylors cat'
    },
    {
        name: 'Olivia',
        birth_date: '2018-03-19',
        species_id: 4,
        notes: 'taylors other cat'
    },
    {
        name: 'Babou',
        birth_date: '1990-04-22',
        species_id: 4,
        notes: 'old dog'
    },
    {
        name: 'Calippo',
        birth_date: '2021-01-01',
        species_id: 4,
        notes: 'nicknamed Squish'
    },
    {
        name: 'Dorito',
        birth_date: '2020-11-21',
        species_id: 4,
        notes: 'nicknamed Pussle'
    },
    {
        name: 'Bubbles',
        birth_date: '1989-05-08',
        species_id: 4,
        notes: 'this is a monkey'
    },
];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;