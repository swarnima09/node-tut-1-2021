const dbConnect = require('./mongodb');

const updateDate = async () => {
    let data = await dbConnect;
    let result = await data.update(
    {name : 'note 5'},{
        $set: {name : 'updated 5'}
        }
    );

}

updateDate()