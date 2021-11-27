const dbConnect = require('./mongodb');

// lines to read data
const main   = async () => {
    let data = await dbConnect;
    data = await data.find().toArray();
    console.warn(data)

}

main();