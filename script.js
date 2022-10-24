
// let x = 10; 

// let y = 5;

// let result = x + y;


// alert(result);

function calc(){ 

let nam1 = prompt('Enter first namber');

let nam2 = prompt ('Enter second namber')

let result = Number(nam1) + Number(nam2);

// alert(nam1 + '+' + nam2 + '=' + result);

alert(`${nam1} + ${nam2} = ${result}`)

document.getElementById('hw').innerHTML= `${nam1} + ${nam2} = ${result}`;

}

function o_o() {

let number1 = document.getElementById('_num1').value;

let number2 = document.getElementById('_num2').value;

let result = Number(number1) + Number(number2);
document.getElementById('hw3').innerHTML = `${number1} + ${number2} = ${result}`;
}

function _calculate(x,y){

    let result = Number(x) + Number(y);
    document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;  
}

function check(){
    let numberOne = Number(document.getElementById('num1').value);
    let numberTwo = Number(document.getElementById('num2').value);


    if(numberOne > numberTwo){ 
    document.getElementById('great').innerHTML= `${numberOne} Is Greater Than ${numberTwo} 🔼`;
     }

     else if (numberOne == numberTwo){ 
    document.getElementById('great').innerHTML= `${numberOne} Is Equal To ${numberTwo} 🤝 `;
     }

     else{
        document.getElementById('great').innerHTML= `${numberOne} Is Lass Than ${numberTwo} 🔽`
     }
}

let x = 10; 

let y = 5;

let _array_ = ['text','nitzan',x,y,];

console.log(_array_);
console.log(_array_[0]); 
console.log(_array_[_array_.length - 1]);

//1
let array = ['text', 'lear', x, y,'dfgdf', 'nitzan', 'dfgdfgdrdrg','last'];

console.log(`The Fourth element is ${array[3]}`)

//2
console.log(`Array Length Is: ${array.length} The Last Element Is ${array.length[array.length -1]}`);


let _movies = [
  {
      title:'The Dark Knight',
      rating: 9.5,
      year: 2008,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
      linkUrl: 'https://www.imdb.com/title/tt0468569/',
      rateUrl: 'https://www.imdb.com/title/tt0468569/ratings'
  },
  {
      title:'The Dark Knight Rises',
      rating: 8.4,
      year: 2012,
      imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
      linkUrl: 'https://www.imdb.com/title/tt1345836/',
      rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
  },
  {
      title:'Superman Man of Steel',
      rating: 7.1,
      year: 2013,
      imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
      linkUrl: 'https://www.imdb.com/title/tt0770828/',
      rateUrl:'https://www.imdb.com/title/tt0770828/ratings'
  },
  {
    title:'wonder Woman',
    rating: 7.4,
    year: 2017,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/he/e/ed/Wonder_Woman_%282017_film%29.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0451279/?ref_=nv_sr_srsg_3',
    rateUrl: 'https://www.imdb.com/title/tt0451279/ratings/?ref_=tt_ov_rt'
  },
  {
    title:'Captain America: The First Avenger',
    rating: 6.9,
    year: 2011,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/he/b/b1/Captain_America_Vol_6_2_Textless.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0458339/?ref_=nv_sr_srsg_0',
    rateUrl: 'https://www.imdb.com/title/tt0458339/ratings/?ref_=tt_ov_rt'
  },
  {
    title:'Captain America: Civil War',
    rating: 7.8,
    year: 2016,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/he/b/b9/Capitain_america_-_civil_war.jpg',
    linkUrl: 'https://www.imdb.com/title/tt3498820/?ref_=nv_sr_srsg_3',
    rateUrl: 'https://www.imdb.com/title/tt3498820/ratings/?ref_=tt_ov_rt'
  },
];

console.log(_movies);

// for(let i = 1; i > 0)

for (let i = 0; i < _movies.length ; i++) 
{
  console.log(i)
}

function displayImages()
{
    for (let i = 0; i < _movies.length; i++)
    {
    document.getElementById('movies').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[i].imageUrl}" alt="${_movies[i].title}">
            <div class="card-body">
              <h6 class="card-text">Movie Name:</h6>${_movies[i].title}
              <h6 class="card-text">Rating:</h6> ${_movies[i].rating}
              <h6 class="card-text">Year:</h6> ${_movies[i].year}
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a class="btn btn-sm btn-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                <a class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" target="_blank">Rate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
}



  function sendEmail() {
    let firstName = document.querySelector('[name="firstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;
    let date = new Date();

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "איימיל שלך מהאתר",
        Password: "סיסמה שלך מהאתר",
        From: "איימיל שלך מהאתר",
        To: "איימיל שלך מהאתר",
        Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
        Body: `
    <b>הודעה מאת:</b> ${firstName} ${lastName}
    <br>
    <br>
    <b>כתובת איימיל של השולח:</b> ${email}
    <br>
    <br>
    <b>נשלח בתאריך:</b> ${date}
    <br>
    <br>
    <b>תוכן ההודעה:</b>
    <br>
    ${message}`
    });

    document.querySelector('#sent-success').style = 'display:block';

}

  // function sendEmail(){
  //   let firstName = document.querySelector('[name-"FirstName"]')
  //   let firstName = document.querySelector('FirstName').value;
  // }


// //index=> _array_[_array_]
// console.log(_array_[0]); //text
// console.log(_array_[1]); //your name
// console.log(_array_[2]); //value of x
// console.log(_array_[3]); //value of y

// console.log(_array_.length); //=> 4
//   //true
//   if(_a_r_r_a_y_.length >= 4){
//     console.log(`array has more than 3 items. \narray size is: ${_a_r_r_a_y_.length}`);
// }




// console.log(_array_.length); //length og _array_







// function _calculate(x,y){

//     let result = Number(x) + Number(y);
//     document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;  
// }

// function check(){
//     let numberOne = Number(document.getElementById('num1').value);
//     let numberTwo = Number(document.getElementById('num2').value);


//     if(numberOne > numberTwo){ 
//     document.getElementById('great').innerHTML= `${numberOne} Is Greater Than ${numberTwo} 🔼`;
//      }

//      else if (numberOne < numberTwo){
//     document.getElementById('great').innerHTML= `${numberOne} Is Lass Than ${numberTwo} 🔽`;
//      }

//      else if (numberOne == numberTwo){ 
//     document.getElementById('great').innerHTML= `${numberOne} Is Equal To ${numberTwo} 🤝 `;
//      }
// }

