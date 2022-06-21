export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";
export const POWER = "POWER";
export const MODULO = "MODULO"
export const RESET = "RESET"

export const increment = (val) => {
    return {
        type: INCREMENT,
        payload: val
    }
}

export const decrement = (val) => {
    return {
        type: DECREMENT,
        payload: val
    }
}

export const multiply = (val) => {
    return {
        type: MULTIPLY,
        payload: val
    }
}

export const divide = (val) => {
    return {
        type: DIVIDE,
        payload: val
    }
}
export const power = (val) => {
    return {
        type: POWER,
        payload: val
    }
}
export const modulo = (val) => {
    return {
        type: MODULO,
        payload: val
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}