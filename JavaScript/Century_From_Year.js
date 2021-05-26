/*
Century From Year

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task: Given a year, return the century it is in.

Example:
Input         Output
1705   -->    18
1900   -->    19
1601   -->    17
2000   -->    20

*/

function century(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade > 0) {
    return century + 1;
  }

  return century;
}
