const {
    Pet_owner
} = require('../models');

const pet_ownerData = [
    {
        pet_id: 1,
        owner_id: 1,
    },
    {
        pet_id: 2,
        owner_id: 2,
    },
    {
        pet_id: 3,
        owner_id: 2,
    },
    {
        pet_id: 4,
        owner_id: 3,
    },
    {
        pet_id: 5,
        owner_id: 4,
    },
    {
        pet_id: 5,
        owner_id: 4,
    },
    {
        pet_id: 6,
        owner_id: 5,
    },
];

const seedPet_owner = () => Pet_owner.bulkCreate(pet_ownerData);

module.exports = seedPet_owner;