const reducer = (previousValue, currentValue) => previousValue + currentValue;

export const add = (...numbers) => {
    if (numbers == 0) {
        return 0
    } else
        return numbers.reduce(reducer)
}

export const filter = (value) => {
    if (value == " ") {
        return "Unknown"
    } else
        if (value.include(" ")) {
            return value.replace(/\s+/g, '')
        } else
            if (value.startWith("_")) {
                return value.substring(1)
            } else
                if (value.length > 10) {
                    return value.slice(0, 9)
                }
}