export const getData = async(url)=>{
    try{
       const res =  await fetch(url)
       const data =  await res.json()
       return data
    }
    catch(err){
        return err.message
    }
}
