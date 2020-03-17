import { name as _name, image as _image, internet, phone as _phone, address as _address, lorem } from 'faker';

export function index(req, res) {
    //throw new Error();
    const payload = [];

    for (let i = 0; i < 100; i++){
        payload.push({
            title: _name.title(),
            image: Array.of(
                _image.imageUrl(),
                _image.imageUrl(),
                _image.imageUrl()
            ),
            avatar: internet.avatar(),
            name: _name.findName(),
            phone: _phone.phoneNumber(),
            address: _address.streetName(),
            desc: lorem.text()
        });
    }

    res.status(200).json({
        message: 'index',
        payload: payload
    });
}

export function show(req, res) {
    console.log('show')
    res.status(200).json({
        message: 'show',
        payload: {
            title: _name.title(),
            image: Array.of(
                _image.imageUrl(),
                _image.imageUrl(),
                _image.imageUrl()
            ),
            avatar: internet.avatar(),
            name: _name.findName(),
            phone: _phone.phoneNumber(),
            address: _address.streetName(),
            desc: lorem.text()
        }
    });
}

export function store(req, res) {
    res.status(200).json({
        message: 'store',
        payload: {
            title: _name.title(),
            image: Array.of(
                _image.imageUrl(),
                _image.imageUrl(),
                _image.imageUrl()
            ),
            avatar: internet.avatar(),
            name: _name.findName(),
            phone: _phone.phoneNumber(),
            address: _address.streetName(),
            desc: lorem.text()
        }
    });
}

export function update(req, res) {
    res.status(200).json({
        title: _name.title(),
        image: Array.of(
            _image.imageUrl(),
            _image.imageUrl(),
            _image.imageUrl()
        ),
        avatar: internet.avatar(),
        name: _name.findName(),
        phone: _phone.phoneNumber(),
        address: _address.streetName(),
        desc: lorem.text()
    });
}

export function destroy(req, res) {
    res.status(200).json({
        title: _name.title(),
        image: Array.of(
            _image.imageUrl(),
            _image.imageUrl(),
            _image.imageUrl()
        ),
        avatar: internet.avatar(),
        name: _name.findName(),
        phone: _phone.phoneNumber(),
        address: _address.streetName(),
        desc: lorem.text()
    });
}