export function formatRating (num) {
  return (Number(num) / 100).toFixed(1)
}

export function globalRating (ratings) {
  let all = 0
  ratings.forEach(el => {
    all += +el.rating / 100
  })
  return all / ratings.length
}
