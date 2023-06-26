export const localString = (time: string) => {
  const hour = String(new Date(time).getHours()).padStart(2, '0')
  const minutes = String(new Date(time).getMinutes()).padStart(2, '0')
  const day = String(new Date(time).getDate()).padStart(2, '0')
  const month = String(new Date(time).getMonth() + 1).padStart(2, '0')
  const year = String(new Date(time).getFullYear()).slice(-2)

  return `${day}.${month}.${year} ${hour}:${minutes}`
}
