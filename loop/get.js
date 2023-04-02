const get = (object, path) => {
    const keys = path.split('.');
    let value = object;

    for (let i = 0; i < keys.length; i++) {
        value = value[keys[i]];
        if (value == null) {
            return undefined;
        }
    }

    return value;
};