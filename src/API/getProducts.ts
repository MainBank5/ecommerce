import axios from 'axios'
export const getProducts =  async () => {
    try {
    const res = await axios.get("https://jsonserver.reactbd.com/amazonpro")

    if ( res.status !== 200) {
        throw new Error("Cant fetch the data")
    }
    
    const data = res.data
    console.log(data);
    return data;
    }
    catch(err) {
        console.log(err)
        return[]
    }
   
}