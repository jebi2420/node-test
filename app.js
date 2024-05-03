const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run (){
    const database = client.db('firstDB') // firstDB라는 이름의 db 생성
    const users = database.collection('users') // users라는 이름의 collection 생성

    // const userData = await users.insertOne({name:'noona', age:17})// user에 data 1개 넣기
    // console.log("result: ", userData);

    // const userList = [{name:'철수', age:30}, {name:'영희', age:25}]
    // const userListResult = await users.insertMany(userList)
    // console.log("result: ", userListResult);

    // const findUser = await users.findOne({name:'noona'})
    // console.log("result: ", findUser);

    // const findUser = await users.find({}).toArray();
    // console.log("result: ", findUser);

    // const findUser = await users.find({age:{$gt:20}}).toArray();
    // console.log("result: ", findUser);

    // const updateUser = await users.updateOne(
    //     { name:'noona' },
    //     { $set:{ age: 18 } }
    // );
    // console.log("result:", updateUser)

    // const deleteUsers = await users.deleteMany({ age: { $gt: 20 }});
    // console.log("result: ", deleteUsers);

    const userData = await users
        .find({ name:'noona'})
        .project({ _id: 0, name: 1 })
        .toArray();
    console.log("result: ", userData);
}

run();