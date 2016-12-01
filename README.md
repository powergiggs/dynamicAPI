# dynamicAPI
Dynamic json api

**Show cars**
----
  Returns json data about a cars.

* **URL**

 http://localhost:3000/api/cars/

 http://localhost:3000/api/cars/:id

* **Method:**

  GET /http://localhost:3000/api/cars/
  POST /http://localhost:3000/api/cars/
  UPDATE /http://localhost:3000/api/cars/:id
  DELETE /http://localhost:3000/api/cars/:id

*  **URL Params**

		/api/cars/
    /api/cars/:id


   **Required:**

   'make =[string]'
   'model =[string]'
   'year =[integer]'

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** ` {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2013,
    "createdAt": "2016-12-01T14:30:06.000Z",
    "updatedAt": "2016-12-01T15:13:47.000Z",
    "driveid": 1
  }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "car doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "http://localhost:3000/api/cars/",
      dataType: "json",
      type : "GET",
      success : function(err) {
        console.log(r);
      }
    });
  ```
