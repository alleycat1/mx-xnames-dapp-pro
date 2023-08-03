export const getNumsFromStr = (str: string) => {
  const res = str.match(/\d+/g)

  if (!res) return []

  return res.map((value) => +value)
}
