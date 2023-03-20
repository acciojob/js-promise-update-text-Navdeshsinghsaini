//your JS code here. If required.
const out = document.getElementById('output');

const hello =  new Promise ((resolve , reject ) => {
        setTimeout(() => {
                 resolve ("Hello, world!")
        },1000);
    });

// console.log (hello);
hello.then((data) => {
    out.innerHTML = data
    console.log(data);
})

// myPromise.then((data) => {
//     console.log(data);
// })