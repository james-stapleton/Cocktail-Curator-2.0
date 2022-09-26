const { Users, Cocktails } = require('../models');

const UserData = [
    {
        name: "James Stapleton",
        email: "jstapleton536@gmail.com",
        is21: true,
    },
    {
        name: "Chris",
        email: "Chris@test.com",
        is21: true,
    },
    {
        name: "Fatih",
        email: "Fatih@test.com",
        is21: true,
    },
    {
        name: "Test",
        email: "test@test.com",
        is21: false,
    }
]

const seedUsers = () => Cocktails.bulkCreate(UserData);

module.exports = seedUsers;