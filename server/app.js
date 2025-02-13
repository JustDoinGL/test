const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const ItemTypes = {
  REAL_ESTATE: "Недвижимость",
  AUTO: "Авто",
  SERVICES: "Услуги",
};

const app = express();
app.use(bodyParser.json());


let items = [
  {
    id: 0,
    name: "Квартира в центре города",
    description: "Просторная квартира с новым ремонтом.",
    location: "Москва",
    type: "Недвижимость",
    propertyType: "Квартира",
    area: 60,
    rooms: 2,
    price: 8000000,
  },
  {
    id: 1,
    name: "Новый автомобиль",
    description: "Продается новый автомобиль, пробег 0.",
    location: "Санкт-Петербург",
    type: "Авто",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    mileage: 0,
    price: 2500000,
  },
  {
    id: 2,
    name: "Услуги репетитора",
    description: "Опытный репетитор по математике и физике.",
    location: "Казань",
    type: "Услуги",
    serviceType: "Репетиторство",
    experience: 5,
    cost: 1500,
  },
  {
    id: 3,
    name: "Просторный дом",
    description: "Дом с участком 10 соток.",
    location: "Екатеринбург",
    type: "Недвижимость",
    propertyType: "Дом",
    area: 150,
    rooms: 5,
    price: 15000000,
  },
  {
    id: 4,
    name: "Скутер",
    description: "Скутер в отличном состоянии.",
    location: "Москва",
    type: "Авто",
    brand: "Honda",
    model: "Dio",
    year: 2020,
    mileage: 5000,
    price: 70000,
  },
  {
    id: 5,
    name: "Услуги фотографа",
    description: "Профессиональная фотосессия.",
    location: "Нижний Новгород",
    type: "Услуги",
    serviceType: "Фотография",
    experience: 3,
    cost: 5000,
  },
];

const makeCounter = () => {
  let count = 0;
  return () => count++;
};

const itemsIdCounter = makeCounter();

// Создание нового объявления
app.post("/items", (req, res) => {
  const { name, description, location, type, ...rest } = req.body;

  // Validate common required fields
  if (!name || !description || !location || !type) {
    return res.status(400).json({ error: "Missing required common fields" });
  }

  switch (type) {
    case ItemTypes.REAL_ESTATE:
      if (!rest.propertyType || !rest.area || !rest.rooms || !rest.price) {
        return res
          .status(400)
          .json({ error: "Missing required fields for Real estate" });
      }
      break;
    case ItemTypes.AUTO:
      if (!rest.brand || !rest.model || !rest.year) { // В тз необязательное поле - !rest.mileage
        return res
          .status(400)
          .json({ error: "Missing required fields for Auto" });
      }
      break;
    case ItemTypes.SERVICES:
      if (!rest.serviceType || !rest.experience || !rest.cost) {
        return res
          .status(400)
          .json({ error: "Missing required fields for Services" });
      }
      break;
    default:
      return res.status(400).json({ error: "Invalid type" });
  }

  const item = {
    id: itemsIdCounter(),
    name,
    description,
    location,
    type,
    ...rest,
  };

  items.push(item);
  res.status(201).json(item);
});

// Получение всех объявлений с пагинацией
app.get("/items", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  console.log(req.query)
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedItems = items.slice(startIndex, endIndex);

  res.json({
    totalItems: items.length,
    totalPages: Math.ceil(items.length / limit),
    currentPage: Number(page),
    items: paginatedItems,
  });
});

// Получение объявления по его id
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id, 10));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Обновление объявления по его id
app.put("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id, 10));
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Удаление объявления по его id
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex(
    (i) => i.id === parseInt(req.params.id, 10)
  );
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Item not found");
  }
});

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "../.env.development" });
} else {
  dotenv.config({ path: "../.env.production" });
}

const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server mode: ${process.env.NODE_ENV} is running on port ${PORT}`);
});
