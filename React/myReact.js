//Destructuring - phân rã
var array = ['Javascript', 'PHP', 'Ruby'];

var [a, b , c] = array;
console.log(a, b, c);
//Rest parameters - lấy ra phần còn lại
var array = ['Javascript', 'PHP', 'Ruby'];

var [a, ...rest] = array;
console.log(a);
console.log(rest);
//Thu thuật-hãy xóa một key của object mà không được sử dụng keywork và không được gán lại
var course = {
    name: 'Javascript',
    price: 1000,
    image : 'image-address',

};

var {name, ...newObject} = course;
console.log(newObject);

var course = {
    name: 'Javascript',
    price: 1000,
    image : 'image-address',
    children:{
        name: 'ReactJS' // muốn lấy name trong children
    }


};
//Spread
var {name:parentName, children:{name:childrenName}} = course;  // bằng cách đổi tên name thành parentName => name:parentName
console.log(parentName);
console.log(childrenName);

const hello = {hello: "😋😛😜🤪😝"}
const world = {world: "🙂🙃😉😊😇🥰😍🤩!"}

const helloWorld = {...hello,...world}
console.log(helloWorld)
