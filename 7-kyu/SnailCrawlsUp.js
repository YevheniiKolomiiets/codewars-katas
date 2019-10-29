function snail(column, day, night, result = 0) {
  result++;

  column -= day;
  if (column <= 0) return result;
  column += night;

  return snail(column, day, night, result);
}
