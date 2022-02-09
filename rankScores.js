//  Table:  Scores

//  +--------------+------------+    //
//  |  Column Name |    Type    |    //
//  +--------------+------------+    //
//  |   id         |    int     |    //
//  |   score      |    decimal |    //
//  +--------------+------------+    //

//  id is the primary key for this table //
//  Each row of this table contains the score of a game     //
//  Score is a floating point value with two decimal places //

//  Write an SQL query to rank the scores. The ranking should be calculated according to the following rules     //
//  If there is a tie between two scores, both should have the same ranking  //
//  After a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no holes between ranks    //

//  Return the result table ordered by score in descending order    //
//  the query  result format is in the following order  //

//  Example:    //

//  Input:
//  Employee table:
//  +---------+------------------+       //
//  |   id    |     score        |       //
//  +---------+------------------+       //
//  |   1     |     3.50         |       //
//  |   2     |     3.65         |       //
//  |   3     |     4.00         |       //
//  |   4     |     3.85         |       //
//  |   5     |     4.00         |       //
//  |   6     |     3.65         |       //
//  +---------+------------------+       //
//  Output:     
//  +-------------------------------+       //
//  |   score      |    rank        |       //
//  +-------------------------------+       //
//  |    4.00      |     1          |       //
//  |    4.00      |     1          |       //
//  |    3.85      |     2          |       //
//  |    3.65      |     3          |       //
//  |    6.65      |     3          |       //
//  |    3.50      |     4          |       //
//  +-------------------------------+       //

//  Solution:   //
//  # Write your MySQL query statement below    //
//  Subquery the grouped score with a rank so that you can duplicate the rows   //

SELECT Scores.score, x.rank
FROM Scores
INNER JOIN (
    SELECT score, ROW_NUMBER() OVER (ORDER BY score DESC) as "rank"
    FROM Scores
    GROUP BY score
) x ON x.score = Scores.score
ORDER BY x.rank