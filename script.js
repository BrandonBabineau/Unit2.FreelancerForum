let priceArray = [];

const heading1 = document.querySelector('h1');
heading1.textContent = 'Freelancer Forum';

const heading4 = document.querySelector('h4');
heading4.textContent = `The average starting price is 
                        ${averageStartingPrice() > 0 ? averageStartingPrice() : 0}`;

const heading2 = document.getElementById("freelance2");
heading2.textContent = 'Available Freelancers';

const namesList = ['Brandon', 'Beverly', 'Liam', 'Mikey', 'Kenneth', 'April', 'Aria', 'Winston'];
const occupationList = ['Writer', 'Artist', 'Engineer', 'Programmer', 'Teacher', 'Driver', 'Teacher', 'Dog Trainer'];
const priceList = [25, 50, 90, 150, 65, 30, 60, 100];


let randomNumList = [];

const setIntervalId = setInterval(addFreeLancers, 1000);

function render(freeLancers) {
  const namesParent = document.querySelector('#names');
  const occupationsParent = document.querySelector('#occupations');
  const priceParent = document.getElementById('price');
  
  
  
  const showFreelancers = freeLancers.map(freelancer => {
    const nameList = document.createElement('li');
    nameList.textContent = freelancer.name;
    
    const occupationList = document.createElement('li');
    occupationList.textContent = freelancer.occupation;

    const priceList = document.createElement('li');
    priceList.textContent = freelancer.price;
   

    namesParent.appendChild(nameList);
    occupationsParent.appendChild(occupationList);
    priceParent.appendChild(priceList);

  });

 console.log('PriceArray:', priceArray);
 heading4.textContent = `The average 
                        starting price is 
                        ${averageStartingPrice() > 0 ? averageStartingPrice() : 0}`;
  return showFreelancers;
  
}
function addFreeLancers() {
  let freeLancers = [];
  let randomNum = generateRandomNumber();
  let lsitIndex;
  console.log(`randomNum: ${randomNum}`);

  if(!randomNumList.includes(randomNum)) {
      randomNumList.push(randomNum);
      lsitIndex = randomNum
  } 
   
  if(lsitIndex != undefined) {
    
    const name = namesList[lsitIndex];
    const occupation = occupationList[lsitIndex];
    const price = priceList[lsitIndex];

    priceArray.push(price);
    freeLancers.push({ name, occupation, price});
    console.log(`freeLancers: ${JSON.stringify(freeLancers)}`);
    render(freeLancers);
  }
 
  if(randomNumList.length >= 6) {
    clearInterval(setIntervalId);
  }
}

function generateRandomNumber() {
 return (Math.floor(Math.random() * namesList.length)); 
}

function averageStartingPrice() {
  let averagePrice = 0;
  const totalPrice = priceArray.reduce((sum, price) => {
    return (sum + price);
  },0);
  console.log('totalPrice::', totalPrice);
  averagePrice = Math.ceil(totalPrice / (priceArray.length));
  return averagePrice;
}