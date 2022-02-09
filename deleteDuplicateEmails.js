//  Table:  Person

//  +--------------+------------+    //
//  |  Column Name |    Type    |    //
//  +--------------+------------+    //
//  |   id         |    int     |    //
//  |   email      |    varchar |    //
//  +--------------+------------+    //
//  id is the primary key column for this table //
//  Each row of this table contains an email    //
//  The emails will not contain upercase letters    //

//  Write an SQL to query to delete all the duplicate emails, keeping only one unique email with the smallest id    //
//  Note that you are supposed to write a Delete statement and not a SELECT one //
//  Return the result table in any order    //
//  The query result format is in the following example     //

//  Example:  //

//  Input:
//  Person table:
//  +-------+--------------------+       //
//  |   id  |   email            |       //
//  +-------+--------------------+       //
//  |   1   |   john@example.com |       //
//  |   2   |   bob@example.com  |       //
//  |   3   |   john@example.com |       //
//  +-------+--------------------+       //
//  Output:
//  +-------+------------------+       //
//  |   id  |   Email          |       //
//  +-------+------------------+       //
//  |  1    | john@example.com |       //
//  |  2    | bob@example.com  |       //
//  +-------+------------------+       //
//  Explanation:    john@example.com is repeated two tiemes     //
//                  We keep the row with the smallest Id = 1    //

//  # Write your MySQL query statement below    //
DELETE p1 FROM Person p1,
    Person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id

