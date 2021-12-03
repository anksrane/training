SELECT * FROM product;
SELECT * FROM sales;
SELECT * FROM customer;
SELECT COUNT(*) from product;

Select distinct city from customer where region in('South','East');
select * from sales where Sales between 100 and 500;
select COUNT(*) from customer where Age between 20 and 30;
select * from sales where Discount>0 order by Discount desc;
select SUM(Sales) from sales;
SELECT AVG(Age) FROM customer where Region="East";

select min(age) as min_age, max(age) from customer where city="Philadelphia";
SELECT COUNT(Customer_ID), Country FROM customer GROUP BY Country;
SELECT COUNT(Customer_ID), City FROM customer GROUP BY City;
SELECT COUNT(Customer_ID) as count, City FROM customer GROUP BY City order by count desc;
select COUNT(Customer_ID), City FROM Customer GROUP BY City HAVING COUNT(Customer_ID) BETWEEN 10 AND 40 ORDER BY COUNT(Customer_ID) ASC;

/*Joins SQL*/
/*Inner Join*/
SELECT * FROM product as A INNER JOIN sales as B ON A.Product_ID=B.Product_ID;
SELECT A.Product_Name, B.Profit FROM product as A INNER JOIN sales as B ON A.Product_ID=B.Product_ID ORDER BY B.Profit DESC;
SELECT A.Category, sum(B.Sales) FROM product as A INNER JOIN sales as B ON A.Product_ID=B.Product_ID GROUP BY A.Category ORDER BY B.Sales DESC;
SELECT A.Product_Name, B.Sales FROM product as A INNER JOIN sales as B ON A.Product_ID=B.Product_ID WHERE A.Product_Name like 'b%' ORDER BY B.Sales DESC LIMIT 1 , 1;/*Inner Join */

/*Left Join*/
SELECt * from product as a left join sales b on a.Product_ID=b.Product_ID;
/*Right Join*/
SELECt * from product as a right join sales b on a.Product_ID=b.Product_ID;

SELECT LENGTH(Product_Name),Product_Name from product;

CREATE TABLE Pesons(
ID int PRIMARY KEY,
FirstName VARCHAR(255),
LastName VARCHAR(255),
Age int
);

SELECT * FROM Persons;
INSERT into Persons values (102,"Suhas","Mishra",36);
ALTER TABLE Persons MODIFY LastName VARCHAR(255) NOT NULL;
ALTER TABLE Persons ADD City VARCHAR(255) NOT NULL;
ALTER TABLE Persons DROP City;

SELECT * FROM Country;
CREATE TABLE Country(CoID int PRIMARY KEY, Name VARCHAR(255) NOT NULL);
USE here1;
CREATE TABLE State (
    StID int NOT NULL,
    StName int NOT NULL,
    CoID int,
    PRIMARY KEY (StID),
    FOREIGN KEY (CoID) REFERENCES Country(CoID)
);
Select * from persons;
INSERT into persons(ID,FirstName,LastName,Age)Values(104,'Nitin','Gujral',30);

