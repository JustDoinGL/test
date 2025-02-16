const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const ItemTypes = {
  REAL_ESTATE: "Недвижимость",
  AUTO: "Авто",
  SERVICES: "Услуги",
};

const app = express();

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "../.env.development" });
} else {
  dotenv.config({ path: "../.env.production" });
}

// Настройка CORS
const FRONTEND_PORT = process.env.FRONTEND_PORT || 5173;

app.use(
  cors({
    origin: `http://localhost:${FRONTEND_PORT}`,
    credentials: true,
  })
);

// Подключение bodyParser для обработки JSON
app.use(bodyParser.json());

let items = []

const users = [{ id: 1, email: "admin@mail.ru", password: "admin" }];

const makeCounter = () => {
  let count = items.length;
  return () => ++count;
};

const itemsIdCounter = makeCounter();

const MOCK_TOKEN = "mock-jwt-token"; // Моковый токен

// Middleware для проверки авторизации
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Получаем токен из заголовка

  if (token === MOCK_TOKEN) {
    next(); // Продолжаем выполнение, если токен валиден
  } else {
    res.status(401).json({ success: false, message: "Не авторизован" });
  }
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  console.log(user);
  console.log(req.body);

  if (user) {
    res.json({
      success: true,
      token: MOCK_TOKEN,
      user: { id: user.id, email: user.email },
    });
  } else {
    res.status(401).json({ success: false, message: "Неверные данные" });
  }
});

// Ручка для проверки авторизации
app.get("/check-auth", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token === MOCK_TOKEN) {
    res.json({ success: true, user: { id: 1, username: "admin" } });
  } else {
    res.status(401).json({ success: false, message: "Не авторизован" });
  }
});

// Ручка для выхода
app.post("/logout", (req, res) => {
  res.json({ success: true });
});

// Создание нового объявления
app.post("/items", authenticateToken, (req, res) => {
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
      if (!rest.brand || !rest.model || !rest.year) {
        // В тз необязательное поле - !rest.mileage
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

  items.unshift(item); // Для вставления в начало
  res.status(201).json(item);
});

// Получение списка объявлений
app.get("/items", (req, res) => {
  const {
    page = 1,
    limit = 5,
    q,
    type,
    brand,
    model,
    year,
    propertyType,
    area,
    rooms,
    price,
  } = req.query;

  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit);

  // Фильтрация по всем параметрам
  let filteredItems = items;

  if (q) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(String(q).toLowerCase())
    );
  }

  if (type) {
    filteredItems = filteredItems.filter((item) => item.type === type);
  }

  if (brand) {
    filteredItems = filteredItems.filter((item) => item.brand === brand);
  }

  if (model) {
    filteredItems = filteredItems.filter((item) => item.model === model);
  }

  if (year) {
    filteredItems = filteredItems.filter((item) => item.year === Number(year));
  }

  if (propertyType) {
    filteredItems = filteredItems.filter(
      (item) => item.propertyType === propertyType
    );
  }

  if (area) {
    filteredItems = filteredItems.filter((item) => item.area === Number(area));
  }

  if (rooms) {
    filteredItems = filteredItems.filter(
      (item) => item.rooms === Number(rooms)
    );
  }

  if (price) {
    filteredItems = filteredItems.filter(
      (item) => item.price === Number(price)
    );
  }

  // Пагинация
  const paginatedItems = filteredItems.slice(startIndex, endIndex);

  res.json({
    totalItems: filteredItems.length,
    totalPages: Math.ceil(filteredItems.length / Number(limit)),
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
app.put("/items/:id", authenticateToken, (req, res) => {
  const itemId = parseInt(req.params.id, 10); // Преобразуем id в число
  const itemIndex = items.findIndex((i) => i.id === itemId); // Находим индекс элемента

  if (itemIndex === -1) {
    // Если элемент не найден
    return res.status(404).json({ message: "Item not found" });
  }

  // Обновляем элемент
  const updatedItem = { ...items[itemIndex], ...req.body }; // Создаем новый объект с обновленными данными
  items[itemIndex] = updatedItem; // Заменяем старый объект на новый

  console.log("Updated item:", updatedItem); // Логируем обновленный элемент
  console.log("All items:", items); // Логируем весь список элементов

  res.json(updatedItem); // Возвращаем обновленный элемент
});

// Удаление объявления по его id
app.delete("/items/:id", authenticateToken, (req, res) => {
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

const BACK_PORT = process.env.BACKEND_PORT || 3000;

app.listen(BACK_PORT, () => {
  console.log(
    `Server mode: ${process.env.NODE_ENV} is running on port ${BACK_PORT}, FRONTEND- ${FRONTEND_PORT}`
  );
});
