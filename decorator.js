export const DecoratingIsFun = () => {
  console.log('Decorating is fun')
}

export const DecoratingMakesSense = (object, methodName, description) => {
  console.log('Decorating makes sense', description)

  description.writable = false
  return description
}
