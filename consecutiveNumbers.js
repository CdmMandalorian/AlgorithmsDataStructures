//  Table:  Logs

//  +--------------+------------+    //
//  |  Column Name |    Type    |    //
//  +--------------+------------+    //
//  |   id         |    int     |    //
//  |   num        |    varchar |    //
//  +--------------+------------+    //
//  id is the primary key for this table //

//  Write an SQL query to find all numbers that appear at least three times consecutivel //
//  Return the result table in any order    //
//  The query result format is in the following example //

//  Example:    //

//  Input:
//  Logs table:
//  +---------+-------------+       //
//  |   id    |     num     |       //
//  +---------+-------------+       //
//  |   1     |     1       |       //
//  |   2     |     1       |       //
//  |   3     |     1       |       //
//  |   4     |     2       |       //
//  |   5     |     1       |       //
//  |   6     |     2       |       //
//  |   7     |     2       |       //
//  +---------+-------------+       //
//  Output:     
//  +-----------------------+       //
//  |   ConsecutiveNums     |       //
//  +-----------------------+       //
//  |       1               |       //
//  +-----------------------+       //
//  Explanation:    1 is the only number that appears consecutively for at least three times    //

//  Solution:       //
//  # Write your MySQL query statement below        //

SELECT DISTINCT
    l1.Num AS ConsecutiveNums
FROM
    Logs l1,
    Logs l2,
    Logs l3
WHERE
    l1.Id = l2.Id - 1
    AND l2.Id = l3.Id - 1
    AND l1.Num = l2.Num
    AND l2.Num = l3.Num
;