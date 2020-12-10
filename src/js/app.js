const customerImage = document.getElementById('customer-img');
const customerName = document.getElementById('customer-name');
const customerText = document.getElementById('customer-text');
const buttons = document.querySelectorAll('btn');
let index = 0;
const customers = [];

class Customer {
    constructor(image, name, quote)
    {
        this.image = image;
        this.name = name;
        this.quote = quote;
    }
}

function createCustomer(image, name, quote)
{
    let fullImg = `./images/people/${image}`;
    let customer = new Customer(fullImg, name, quote);
    customers.push(customer);
}

createCustomer("customer-0.png", 'John Doe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer("customer-1.png", 'Sandy Su', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer("customer-2.png", 'Amy Zing', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer("customer-3.png", 'Tyrell F', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer("customer-4.png", 'Wanda M', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

customerImage.src = customers[index].image;
customerName.textContent = customers[index].name;
customerText.textContent = customers[index].quote;

let prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener("click", function(e)
{
    index = (index === 0) ? customers.length : index;
    index--;
    customerImage.src = customers[index].image;
    customerName.textContent = customers[index].name;
    customerText.textContent = customers[index].quote;
});

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener("click", function(e)
{
    index++;
    index = (index === customers.length) ? 0 : index;
    customerImage.src = customers[index].image;
    customerName.textContent = customers[index].name;
    customerText.textContent = customers[index].quote;
});