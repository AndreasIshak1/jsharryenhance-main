/* eslint-disable import/no-unresolved */
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

// TODO
// enhance code
// fixa så att det blir 108 000 kr istf 108000 kr

class Car {
  constructor(name, type, color, fuel, year, img, price) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.fuel = fuel;
    this.year = year;
    this.img = `https://axmjqhyyjpat.objectstorage.eu-amsterdam-1.oci.customer-oci.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F${img}.png`;
    this.price = price;
  }
}
const cars = [];
const productContainer = document.getElementById('productContainer');
// Generate 20 cars
for (let i = 0; i < 20; i += 1) {
  const name = faker.vehicle.vehicle();
  const type = faker.vehicle.type();
  const color = faker.vehicle.color();
  const fuel = faker.vehicle.fuel();
  const year = faker.number.int({ min: 1970, max: 2023 });
  const image = faker.number.int({ min: 1, max: 100 });
  const price = faker.number.int({ min: 30, max: 200 }) * 1000;
  cars.push(new Car(name, type, color, fuel, year, image, price));

  const productGallery = document.createElement('div');
  productGallery.className = 'productcard';

  const carImage = document.createElement('img');
  carImage.src = cars[i].img;

  const containerName = document.createElement('div');
  containerName.innerHTML = cars[i].name;
  containerName.className = 'name';

  const containerYear = document.createElement('div');
  containerYear.innerHTML = cars[i].year;
  containerYear.className = 'year';

  const aButton = document.createElement('a');
  aButton.innerHTML = `${cars[i].price} kr`;
  aButton.className = 'ctabutton';

  productGallery.appendChild(carImage);
  productGallery.appendChild(containerName);
  productGallery.appendChild(containerYear);
  productGallery.appendChild(aButton);
  productContainer.appendChild(productGallery);
}
