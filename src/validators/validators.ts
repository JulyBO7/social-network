export const required = (value: string)=> {
    if(value) {
        return undefined
    } else {
        return 'field is required'
    }
}
export const maxLengthCreator = (length: number) => (value: string)=> {

    if (value.length > length){
        return `field should be smaller then ${length} `
    } else{
        return undefined
    }
}