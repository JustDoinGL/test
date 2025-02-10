# Запустить проект можно двумя способами: **локально** или с использованием **Docker**. 

### 1. Запуск локально
Для локального запуска выполните следующие шаги:

 ```bash
   npm i
   ```

1. Перейдите в директорию проекта и установите зависимости:
   ```bash
   cd server
   ```
   ```bash
   npm i
   ```

    ```bash
   cd frontend
   ```
   ```bash
   npm i
   ```
  
2. Запустите проект с помощью команды:
   ```bash
   npm run dev
   ```
   
**Важно:** Перед запуском убедитесь, что все зависимости установлены как для серверной части (`/server`), так и для клиентской части (`/frontend`).

---

### 2. Запуск с использованием Docker
Для запуска проекта с использованием Docker выполните следующие команды:
1. Соберите базовый образ:
   ```bash
   docker build -t node-base -f Dockerfile.base .
   ```
2. Запустите проект с помощью `docker-compose`:
   ```bash
   docker compose up
   ```

---

# Frontend 
 ```bash
   http://localhost:8080
   ```

# Backend
  ```bash
   http://localhost:3000
   ```
  



### Важное замечание:
Необходимо **выбрать только один из методов запуска**: **локальный** или **через Docker**, так как оба варианта используют одинаковые порты. Если вы попытаетесь запустить оба метода одновременно, это приведёт к конфликту портов.

# Есть Husky для прикомита и CI github/workflows