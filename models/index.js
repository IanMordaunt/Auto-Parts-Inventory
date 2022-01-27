const User = require('./User');
const Parts = require('./Parts');
const Reviews = require('./Reviews');
const Stores = require('./Stores');

Parts.hasMany(Reviews, {
    foreignKey: 'parts_id',
    onDelete: 'CASCADE'
});

Stores.hasMany(Parts, {
    foreignKey: 'stores_id',
    onDelete: 'CASCADE'
});

User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Parts, Reviews, Stores };
