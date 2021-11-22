const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'rock',
    },
    {
        tag_name: 'pop',
    },
    {
        tag_name: 'camouflage',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'olive',
    },
    {
        tag_name: 'black',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'hip hop',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;