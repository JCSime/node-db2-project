// STRETCH
const cars = [
    {
        vin: '1234567890123',
        make: 'Nissan',
        model: '350z',
        mileage: 60000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1234567890123',
        make: 'Toyota',
        model: 'AE86',
        mileage: 3000,
        title: 'clean',
    },
    {
        vin: '1234567890123',
        make: 'Ford',
        model: 'Crown Vic',
        mileage: 265000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
