
export const loadFromStorage = (key) => {
  const data = sessionStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return {}
}

export const saveToStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data))
}
