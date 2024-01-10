const { log } = require('console');
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'template'), err =>{
//     if (err) throw new Error()

//     console.log('succsses');
// })

// fs.mkdir(path.join(__dirname, 'notes' ), err =>{
//     if (err) throw new Error()

//     console.log('success');
// } )
 
fs.writeFile(path.join(__dirname, 'notes', 'text.txt'), 'senga qanday qizla yoqadi? ', err =>{
    if (err) throw new Error()

    console.log('papka');


    fs.appendFile(path.join(__dirname, 'notes', 'text.txt'), ' nega aynan u', err =>{
        if (err) throw new Error()

        console.log('change');
    })
    fs.readFile(path.join(__dirname, 'notes', 'text.txt'), 'utf-8', (err,data) =>{
        if (err) throw new Error()
    
        // console.log(Buffer.from(data).toString());
        console.log(data);
    })
})
