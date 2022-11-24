const findMatching = (drivers, string) => {
    return drivers.filter(drivers => (drivers.toLowerCase()||drivers.toUpperCase()) === (string.toLowerCase()||string.toUpperCase()))
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(drivers => drivers.startsWith(string))
}

const matchName = (drivers, string) => {
    return drivers.filter(drivers => drivers['name'] === string)
}