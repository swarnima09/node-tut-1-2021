const dbConnect = require('./mongodb');

const insert = async () =>  {
    const db =  await dbConnect;
  /*  const result = await db.insert(
        {name : 'note 5' ,brands : "vivo"}
    )*/
}

insert();