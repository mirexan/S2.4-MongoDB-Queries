use Restaurant

//1.  Write a query to display all the documents in the Restaurants collection.
  db.restaurant.find({})

  //2.  Write a query to display the restaurant\_id, name, borough, and cuisine for all documents in the Restaurants collection.
  db.restaurant.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id:0})

  //3.  Write a query to display the restaurant\_id, name, borough, and cuisine, but exclude the \_id field for all documents in the Restaurants collection.
  db.restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0})

  //4.  Write a query to display restaurant\_id, name, borough, and zip code, but exclude the \_id field for all documents in the Restaurants collection.
  db.restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0})

  //5.  Write a query to display all the restaurants that are in the Bronx.
  db.restaurant.find({borough: "Bronx"})

  //6.  Write a query to display the first 5 restaurants that are in the Bronx.
  db.restaurant.find({borough: "Bronx"}).limit(5)

  //7.  Write a query to display the next 5 restaurants after skipping the first 5 in the Bronx.
  db.restaurant.find({borough: "Bronx"}).skip(5).limit(5)

  //8.  Write a query to find the restaurants that have a score of more than 90.
  db.restaurant.find({"grades.score": {$gt : 90}})

  //9.  Write a query to find the restaurants that have a score of more than 80 but less than 100.
  db.restaurant.find({"grades.score": {$gt : 80, $lt : 100}})

  //10. Write a query to find the restaurants that are located at a latitude value of less than -95.754168.
  db.restaurant.find({"address.coord.1": {$lt :  -95.754168}})

  //11. Write a MongoDB query to find the restaurants that do not prepare any 'American' cuisine and their rating is higher than 70 and longitude less than -65.754168.
  db.restaurant.find({$and: [{cuisine : {$ne: "American "}},{"grades.score": {$gt: 70}},{"address.coord.0": {$lt : -65.754168}}]})

  //12. Write a query to find the restaurants that do not prepare any 'American' cuisine and achieved a score higher than 70 and are located at a longitude less than -65.754168. Note: Do this query without using the $and operator.
  db.restaurant.find({cuisine : {$ne: "American "},"grades.score":{$gt: 70},"address.coord.0": {$lt : -65.754168}})

  //13. Write a query to find the restaurants that do not prepare any 'American' cuisine and achieved a grade of 'A' and do not belong to Brooklyn. The document must be displayed sorted by cuisine in descending order.
  db.restaurant.find({cuisine : {$ne: 'American '},"grades.grade":'A',borough:{$ne:'Brooklyn'}}).sort({cuisine: -1})

  //14. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that contain 'Wil' as the first three letters in their name.
  db.restaurant.find({name:{ $regex: '^Wil'}},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})

  //15. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that contain 'ces' as the last three letters in their name.
  db.restaurant.find({name : {$regex: 'ces$'}},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})

  //16. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that contain 'Reg' as three letters somewhere in their name.
  db.restaurant.find({name : {$regex: 'Reg'}},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})

  //17. Write a query to find the restaurants that belong to the Bronx and prepared either American or Chinese dishes.
  db.restaurant.find({borough:'Bronx',cuisine:{$in:['American ','Chinese']}})

  //18. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that belong to Staten Island, Queens, Bronx, or Brooklyn.
  db.restaurant.find({borough: {$in: ['Staten Island','Queens','Bronx','Brooklyn']}})

  //19. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that do not belong to Staten Island, Queens, Bronx, or Brooklyn.
  db.restaurant.find({borough: {$nin: ['Staten Island','Queens','Bronx','Brooklyn']}})

  //20. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that achieved a score that is not more than 10.
  db.restaurant.find({"grades.score":{$lt: 11}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1,_id:0})

  //21. Write a query to find the restaurant\_id, name, borough, and cuisine for those restaurants that prepare fish except 'American' and 'Chinees' or the restaurant's name starts with the letters 'Wil'.
  db.restaurant.find({$or:[{cuisine: "Seafood"},{name :{$regex: '^Wil'}}]},{restaurant_id:1,name:1,_id:0,borough:1,cuisine:1})

  //22. Write a query to find the restaurant\_id, name, and grades for those restaurants that achieved a grade "A" and a score of 11 on the ISODate "2014-08-11T00:00:00Z".
  db.restaurant.find({grades:{$elemMatch: {grade:"A",score:11,date:ISODate("2014-08-11T00:00:00Z")}}},{restaurant_id:1,name:1,_id:0,grades:1})

  //23. Write a query to find the restaurant\_id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and a score of 9 on an ISODate "2014-08-11T00:00:00Z".
  db.restaurant.find({"grades.1.grade":"A","grades.1.score":9,"grades.1.date":ISODate("2014-08-11T00:00:00Z")},{restaurant_id:1,name:1,_id:0,grades:1})

  //24. Write a query to find the restaurant\_id, name, address, and geographical location for those restaurants where the second element of the coord array contains a value that is more than 42 and up to 52.
  db.restaurant.find({"address.coord.1":{$gt:42,$lte:52}},{restaurant_id:1,name:1,_id:0,address:1})

  //25. Write a query to sort the name of the restaurants in ascending order along with all the columns.
  db.restaurant.find({}).sort({name:1})

  //26. Write a query to sort the name of the restaurants in descending order along with all the columns.
  db.restaurant.find({}).sort({name:-1})

  //27. Write a query to sort the cuisine name in ascending order and by the borough in descending order.
  db.restaurant.find({}).sort({cuisine:1,borough:-1})

  //28. Write a query to find all addresses that do not contain the street.
  db.restaurant.find({"address.street":{$exists: false}})

  //29. Write a query that will select all documents in the restaurants collection where the value of the coord field is Double.
  db.restaurant.find({"address.coord.0":{$type:"double"}})

  //30. Write a query that will select the restaurant\_id, name, and grade for those restaurants that return 0 as a remainder after dividing the score by 7.
  db.restaurant.find({"grades.score":{$mod:[7,0]}},{restaurant_id:1,name:1,_id:0,"grades":1})

  //31. Write a query to find the restaurant name, borough, longitude and altitude, and cuisine for those restaurants that contain 'mon' as three letters somewhere in their name.
  db.restaurant.find({name:{$regex: 'mon'}},{name:1,_id:0,borough:1,"address.coord":1,cuisine:1})

  //32. Write a query to find the restaurant name, borough, longitude and latitude, and cuisine for those restaurants that contain 'Mad' as the first three letters of their name.
  db.restaurant.find({name:{$regex: '^Mad'}},{name:1,_id:0,borough:1,"address.coord":1,cuisine:1})
