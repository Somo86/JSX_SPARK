const flat = (initial = []) => {
    return (list) => {
        return list.reduce((acc, el) => {
            if(Array.isArray(el)){
                return [...acc, ...flat([])(el)];
            } else {
                return [...acc, el];
            }
        }, initial)
    }
}

export const flatten = flat([]);