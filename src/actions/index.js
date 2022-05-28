export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const addNumber = (number) => {
    return {
        type: 'ADD_NUMBER',
        payload: number
    }
}