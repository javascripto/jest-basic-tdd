//@ts-check

/**
 * @param grades {number[]}
 */
const sum = grades => {
  if (Math.min(...grades) === 0) {
    return 0
  }
  const result = grades.reduce((acc, grade) => {
    return acc += (grade > 9 ? grade * 2 : grade)
  }, 0)
  return (grades.length > 5)
    ? result * 2
    : result
}

module.exports = { sum }
