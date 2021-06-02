import fetch from '../utils/fetch'

export const exampleFetch = (data: any) => {
    return fetch('POST','api/',data);
}
