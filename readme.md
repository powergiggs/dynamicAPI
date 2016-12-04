**Dynamic Api**
----
  Returns json data about a cars.

  * **Installation:**

  You Will need Node JS and NPM to install project.
  1.Run command npm i in the root folder of api project
  2.App main file is src/server.js
  3.Dependencies included in package.json file.



* **Endpoints**

 http://localhost:3000/api/cars/

 http://localhost:3000/api/cars/[id]

* **Method:**

   Using GET  with endpoint http://localhost:3000/api/cars/
   would produce the result:

   ```
   [
 {
   "id": 2,
   "make": "Honda",
   "model": "Civic",
   "year": 2013,
   "createdAt": "2016-12-01T14:30:06.000Z",
   "updatedAt": "2016-12-01T15:13:47.000Z",
   "driveid": 1
 },
 {
   "id": 3,
   "make": "Nissan",
   "model": "Altima",
   "year": 2017,
   "createdAt": "2016-12-01T14:30:25.000Z",
   "updatedAt": "2016-12-01T14:30:25.000Z",
   "driveid": 1
 }
]

   ```

   Using GET  with endpoint http://localhost:3000/api/cars/3
   would produce the result:

   ```
   {
     "id": 3,
     "make": "Nissan",
     "model": "Altima",
     "year": 2017,
     "createdAt": "2016-12-01T14:30:25.000Z",
     "updatedAt": "2016-12-01T14:30:25.000Z",
     "driveid": 1
   }
   ```


  `POST /http://localhost:3000/api/cars/`
  `UPDATE /http://localhost:3000/api/cars/:id`
  `DELETE /http://localhost:3000/api/cars/:id`



* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://domainname/api/cars/",
      dataType: "json",
      type : "GET",
      success : function(err) {
        console.log(r);
      }
    });
  ```
