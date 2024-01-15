setTimeout(() =>{
    console.log("This is a 2 sec timeout")
}, 2000)

const names= ['john', 'njau','grace']
const shortnames = names.filter((name) =>{
    return name.length <=4;
})

const add = (a, b, callback)=>{
    setTimeout(()=>{
        callback(a+b)

    },2000)
}

add(1, 4, (sum)=>{
    console.log(sum)
})