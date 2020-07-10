import MyBike from '../models/MyBike.js';
import Category from '../models/Category.js';

// Create a new bike
export async function create(req, res) {
    res.status(200);

    const createdBike = await MyBike.create({
        title: 'Toll Boy x',
        price: 10895,

    });
    res.json({
        message: createdBike
    });
}

// Create a new bike category
export async function createCategory(req, res) {
    const bikeCategory = await Category.create({
        name: 'Commuter',
        bikesId: 2
    });
    res.json({
        message: bikeCategory
    })

}
// Get the list of bikes
export async function getlist(req, res) {
    let bikeLists;
    if (req.query.id) {
        bikeLists = await MyBike.findOne({ where: { id: req.query.id } });
    } else {
        bikeLists = await MyBike.findAll();
    }


    res.json({
        message: bikeLists
    }).status(200);
}

// Create Bike Category
export async function createBikeCategory(req, res) {
    const { name, bikesId } = req;
    console.log(req);
    try {
        const bikeCategory = await Category.create({
            name: 'downHill',
            bikesId: 2
        });
        res.status(200)
            .send({
                data: bikeCategory
            })
    } catch (err) {
        res.status(500)
            .send({
                message: err
            })
    }
}