![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white "Node.js")
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black "Javascript")
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white "Express")
![MongDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white "MongoDB")
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=Mongoose&logoColor=white "Mongoose")
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white "HTML5")
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white "CSS3")

# URL Shortener Microservice
The URL Shortener Microservice allows users to shorten URLs and retrieve original URLs through a RESTful API.

## Table of Contents  

- [Requirements](#requirements)
- [How to use](#how-to-use)
- [Project structure](#project-structure)
- [Preview](#preview)
- [License](#license)
- [Author](#author)

## <a name="requirements"></a>Requirements
  
  - Node: >=20.0.0 <21
  - MongoDB >7.0.0 <8

## How to Use
`Make sure the MongoDB is running or has a ready-to-go connection link.`  

1. Create a .env file, add a DB_URL variable with the value of the database connection link;
2. **Install the packages:**
   ```sh
   npm install
   ```
3. **Initialize the server:**
   ```sh
   npm run start
   ```
4. **Make a POST request to** `http://localhost:{env.PORT}/api/shorturl`  
Example payload:
  ```json
  {
	  "url": "https://www.example.com"
  }
  ```  
Example response:
  ```json
  {
	  "original_url": "https://www.example.com",
	  "short_url": "1"
  }
  ``` 
5. **Make a GET request to** `http://localhost:{env.PORT}/api/shorturl/1`  
This will redirect to: `https://www.example.com`

## <a name="project-structure"></a>Project Structure

```
src/
├── app.js
├── server.js
├── config/
│   └── database.js
├── controllers/
│   └── urlController.js
│   └── viewController.js
├── models/
│   └── urlModel.js
├── routes/
│   └── urlRoutes.js
│   └── viewRoutes.js
├── validators/
│   └── urlValidator.js
├── views/
│   └── index.html
│   └── style.css
│   └── main.js
```

## <a name="preview"></a>Preview
![url-shortener-preview](https://github.com/user-attachments/assets/cd908df1-729e-4367-b45c-e090ba39d11b)

## <a name="license"></a>License

The code is under the [MIT License](./LICENSE).

## <a name="author"></a>Author

Developed by @Wesley-Nunes  
[![Connect](https://img.shields.io/badge/-Connect-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dev-wesley-nunes/)](https://www.linkedin.com/in/dev-wesley-nunes/)
