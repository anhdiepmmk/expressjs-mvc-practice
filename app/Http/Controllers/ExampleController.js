const faker = require('faker');

exports.index = function(req, res) {
    const payload = [];

    for (let i = 0; i < 100; i++){
        payload.push({
            title: faker.name.title(),
            image: Array.of(
                faker.image.imageUrl(),
                faker.image.imageUrl(),
                faker.image.imageUrl()
            ),
            avatar: faker.internet.avatar(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetName(),
            desc: faker.lorem.text()
        });
    }

    res.status(200).json({
        message: 'index',
        payload: payload
    });
};

exports.show = function(req, res) {
    console.log('show')
    res.status(200).json({
        message: 'show',
        payload: {
            title: faker.name.title(),
            image: Array.of(
                faker.image.imageUrl(),
                faker.image.imageUrl(),
                faker.image.imageUrl()
            ),
            avatar: faker.internet.avatar(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetName(),
            desc: faker.lorem.text()
        }
    });
};

exports.store = function(req, res) {
    res.status(200).json({
        message: 'store',
        payload: {
            title: faker.name.title(),
            image: Array.of(
                faker.image.imageUrl(),
                faker.image.imageUrl(),
                faker.image.imageUrl()
            ),
            avatar: faker.internet.avatar(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetName(),
            desc: faker.lorem.text()
        }
    });
};

exports.update = function(req, res) {
    res.status(200).json({
        title: faker.name.title(),
        image: Array.of(
            faker.image.imageUrl(),
            faker.image.imageUrl(),
            faker.image.imageUrl()
        ),
        avatar: faker.internet.avatar(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetName(),
        desc: faker.lorem.text()
    });
};

exports.destroy = function(req, res) {
    res.status(200).json({
        title: faker.name.title(),
        image: Array.of(
            faker.image.imageUrl(),
            faker.image.imageUrl(),
            faker.image.imageUrl()
        ),
        avatar: faker.internet.avatar(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetName(),
        desc: faker.lorem.text()
    });
};