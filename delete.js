const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect;
    let result = await data.deleteMany(
        {name : 'updated 5'});

     console.log(result.acknowledged,'ppp');
}

deleteData();