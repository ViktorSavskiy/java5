// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
//     }
// for (const key in numbers)  {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// } 

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//     {
//     userId: 10,
//     userName: "Alex",
//     text: "lorem ipsum",
//     rating: {
//     likes: 10,
//     dislikes: 2, // вывести это число
//     },
//     },
//     {
//     userId: 5, // вывести это число
//     userName: "Jane",
//     text: "lorem ipsum 2", // вывести этот текст
//     rating: {
//     likes: 3,
//     dislikes: 1,
//     },
//     },
//     ],
//     };
// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
    ];
    products.forEach(key => console.log(key.price * 0.85));