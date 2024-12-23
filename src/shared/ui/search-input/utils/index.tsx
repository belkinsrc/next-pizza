export const highlightText = (text: string, query: string) => {
  const regex = new RegExp(`(${query})`, 'gi')
  return text
    .split(regex)
    .map((part, index) => (regex.test(part) ? <b key={index}>{part}</b> : part))
}
