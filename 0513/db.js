// 异步的
const {
    readFile,
    writeFile
} = require('fs');

// 返回一个promise 对象
const {
    promisify
} = require('util');

const {
    resolve
} = require('path')

// promisify 返回的是promise
const readFileDb = promisify(readFile);
const writeFileDb = promisify(writeFile);

// 拿到文件地址
const dbPath = resolve(__dirname, './db.json');

// 读取文件
const readDb = async () => {
   const dbData = await readFileDb(dbPath, 'utf8');
   return JSON.parse(dbData);
};

// 写入文件
const saveDb = async (db) => {
    const data = JSON.stringify(db, null, ' ')
    await writeFileDb(dbPath, data)
};

module.exports = {
    readDb,
    saveDb
}


