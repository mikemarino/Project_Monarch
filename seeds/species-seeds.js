const {
    Species
} = require('../models');

const speciesData = [
    {
        species_name: 'Bulldog',
    },
    {
        species_name: 'Pointer',
    },

    {
        species_name: 'Golden Retriever',
    },

    {
        species_name: 'Labrador',
    },

    {
        species_name: 'American Short Hair',
    },

    {
        species_name: 'Yorkie',
    },
];

const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;