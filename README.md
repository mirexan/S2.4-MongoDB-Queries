# S2.4-MongoDB-Queries

📄 Description

This project focuses on practicing MongoDB query skills. It involves working with a provided dataset, `restaurant.json`, and solving a comprehensive list of queries against the collection.

---

### Database - Restaurants 🍽️ (Restaurantes)

The following queries subject uses a single collection, `restaurant`, loaded from the `restaurant.json` file.
The data must be loaded from the provided `.json` file.

### **Queries**

> ⚠️**Data Note:** The following queries that filter for 'American' cuisine have been adapted to `"American "` (with a trailing space). This is intentional, as it reflects how the information appears in the `restaurant.json` dataset.

1.  Write a query to display all the documents in the `restaurant` collection.
2.  Write a query to display the `restaurant_id`, `name`, `borough`, and `cuisine` for all documents in the `restaurant` collection.
3.  Write a query to display the `restaurant_id`, `name`, `borough`, and `cuisine`, but exclude the `_id` field for all documents in the `restaurant` collection.
4.  Write a query to display `restaurant_id`, `name`, `borough`, and `zip code`, but exclude the `_id` field for all documents in the `restaurant` collection.
5.  Write a query to display all the restaurants that are in the Bronx.
6.  Write a query to display the first 5 restaurants that are in the Bronx.
7.  Write a query to display the next 5 restaurants after skipping the first 5 in the Bronx.
8.  Write a query to find the restaurants that have a score of more than 90.
9.  Write a query to find the restaurants that have a score of more than 80 but less than 100.
10. Write a query to find the restaurants that are located at a latitude value of less than -95.754168.
11. Write a MongoDB query to find the restaurants that do not prepare any 'American ' cuisine and their rating is higher than 70 and longitude less than -65.754168.
12. Write a query to find the restaurants that do not prepare any 'American ' cuisine and achieved a score higher than 70 and are located at a longitude less than -65.754168. Note: Do this query without using the `$and` operator.
13. Write a query to find the restaurants that do not prepare any 'American ' cuisine and achieved a grade of 'A' and do not belong to Brooklyn. The document must be displayed sorted by cuisine in descending order.
14. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that contain 'Wil' as the first three letters in their name.
15. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that contain 'ces' as the last three letters in their name.
16. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that contain 'Reg' as three letters somewhere in their name.
17. Write a query to find the restaurants that belong to the Bronx and prepared either 'American ' or 'Chinese' dishes.
18. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that belong to Staten Island, Queens, Bronx, or Brooklyn.
19. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that do not belong to Staten Island, Queens, Bronx, or Brooklyn.
20. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that achieved a score that is not more than 10.
21. Write a query to find the `restaurant_id`, `name`, `borough`, and `cuisine` for those restaurants that prepare 'Seafood' (fish) except 'American ' and 'Chinese' or the restaurant's name starts with the letters 'Wil'.
22. Write a query to find the `restaurant_id`, `name`, and `grades` for those restaurants that achieved a grade "A" and a score of 11 on the ISODate "2014-08-11T00:00:00Z".
23. Write a query to find the `restaurant_id`, `name`, and `grades` for those restaurants where the 2nd element of the `grades` array contains a grade of "A" and a score of 9 on an ISODate "2014-08-11T00:00:00Z".
24. Write a query to find the `restaurant_id`, `name`, `address`, and `geographical location` (coord) for those restaurants where the second element of the `coord` array contains a value that is more than 42 and up to 52.
25. Write a query to sort the name of the restaurants in ascending order along with all the columns.
26. Write a query to sort the name of the restaurants in descending order along with all the columns.
27. Write a query to sort the cuisine name in ascending order and by the borough in descending order.
28. Write a query to find all addresses that do not contain the `street` field.
29. Write a query that will select all documents in the `restaurant` collection where the value of an element in the `coord` array is a Double.
30. Write a query that will select the `restaurant_id`, `name`, and `grade` for those restaurants that return 0 as a remainder after dividing the `score` by 7.
31. Write a query to find the restaurant `name`, `borough`, `longitude` and `latitude` (coord), and `cuisine` for those restaurants that contain 'mon' as three letters somewhere in their name.
32. Write a query to find the restaurant `name`, `borough`, `longitude` and `latitude` (coord), and `cuisine` for those restaurants that contain 'Mad' as the first three letters of their name.

---

### 🏆 Evaluation Criteria

* **Level 1:** Complete 20 correct queries.
* **Level 2:** Complete 30 correct queries.
* **Level 3:** Complete all 32 correct queries.

---

### 💻 Used technologies

* MongoDB
* MongoDB Compass
* `mongosh` (MongoDB Shell)
* Git

---

### 🛠️ Install

1.  Clone this repo: https://github.com/mirexan/S2.4-MongoDB-Queries.git
2.  Start your MongoDB server (e.g., `mongod`).
3. Connect to your database using `mongosh` or MongoDB Compass.

	```bash
	mongosh
	use restaurant
	```
5.  Execute the required queries from the list above to validate the project.