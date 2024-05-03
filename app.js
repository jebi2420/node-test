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

    // const userData = await users
    //     .find({ name:'noona'})
    //     .project({ _id: 0, name: 1 })
    //     .toArray();
    // console.log("result: ", userData);

    // Create 데이터 생성하기
    // const inventory = database.collection('inventory');

    // 문제 1. insertOne
    // const itemData = await inventory
    //     .insertOne({ 
    //         item: 'canvas', 
    //         qty: 100, 
    //         tags: ['cotton'], 
    //         size: { h: 28, w: 35.5, uom: 'cm'}
    //     })

    // 문제 2. insertMany
    // const itemList = [
    //     { item: 'journal', qty: 25, tags: ['black', 'red'], size: { h: 14, w: 21, uom: 'cm'}},
    //     { item: 'hat', qty: 85, tags: ['gray'], size: { h: 27.9, w: 25.5, uom: 'cm'}},
    //     { item: 'mousepad', qty: 25, tags: ['gel', 'blue'], size: { h: 19, w: 22.85, uom: 'cm'}}]
    // const itemListResult = await inventory.insertMany(itemList);

    // Read 데이터 읽어오기
    // 문제 3. find_ inventory에 저장된 모든 데이터를 읽어오자
    // const findInventory = await inventory.find({}).toArray();

    // 문제 4. inventory에 데이터를 먼저 넣고 status가 D인 데이터를 찾아라
    // const itemList = [
    //     { item: 'journal', qty: 25, size: { h: 14, w: 21, uom: 'cm'}, status: 'A'},
    //     { item: 'notebook', qty: 50, size: { h: 8.5, w: 11, uom: 'in'}, status: 'A'},
    //     { item: 'paper', qty: 100, size: { h: 8.5, w: 11, uom: 'in'}, status: 'D'},
    //     { item: 'planner', qty: 75, size: { h: 22.85, w: 30, uom: 'cm'}, status: 'D'},
    //     { item: 'postcard', qty: 45, size: { h: 10, w: 15.25, uom: 'cm'}, status: 'A'}
    // ]
    // const itemListResult = await inventory.insertMany(itemList);
    // const findItem = await inventory.find({status: 'D'}).toArray();

    // 문제 5. status가 'A'이고 qty가 50인 데이터를 찾아라
    // const findItem = await inventory.find({status: 'A', qty: 50}).toArray();

    // 문제 6. $in : status가 A 또는 B인 데이터를 찾자
    // const findItem = await inventory.find({status:{$in:['A','B']}}).toArray();

    // 문제 7. $ln : status가 A이고 qty가 30보다 작은 데이터를 찾자
    // const findItem = await inventory.find({status: 'A', qty: {$lt: 30}}).toArray();
    
    // 문제 8. $or : status가 A이거나 qty가 30보다 작은 데이터를 찾자
    // const findItem = await inventory.find({ $or: [{status: 'A'},{qty: {$lt: 30}}]}).toArray();

    // 문제 9. nested field : size에 uom이 in인 데이터를 찾자
    // const findItem = await inventory.find({ "size.uom": "in"}).toArray();

    // 문제 10. size에 h가 10을 초과하는 데이터를 찾자
    // const findItem = await inventory.find({"size.h" : {$gt: 10}}).toArray();

    // Update 데이터 수정하기
    // 문제 11. updateOne : students 컬렉션에 데이터를 넣고 id가 3인 학생에게 test3의 점수를 98로 세팅
    const students = database.collection('students');
    
    // const studentsList = await students.insertMany([
    //     {_id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020")},
    //     {_id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020")},
    //     {_id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020")},
    // ])

    // const updateStudent = await students.updateOne({_id: 3}, {$set: { test3: 98}})

    // 문제 12. updateMany : 모든 데이터의 test1 점수를 0으로 세팅하고 status: "modified"라는 필드를 추가
    // const updateAll = await students.updateMany({}, {$set: {test1: 0, status: "modified"}});
    
    // Delete 데이터 삭제하기
    // 문제 13. deleteOne : test2 점수가 92점인 학생을 삭제
    // const deleteStudent = await students.deleteOne({test2 : 92});

    // 문제 14. deletemany : test1 점수가 0인 학생들을 삭제
    const deleteStudent = await students.deleteMany({test1 : 0});
    console.log("result:", deleteStudent);
}

run();