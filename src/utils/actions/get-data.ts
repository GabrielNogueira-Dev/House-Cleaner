export async function getDataHome(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/68cc31b0fe0840663f6504e7?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)
        
        if(!res.ok){
              throw new Error("Failed to fetch data")
        }
        return res.json()

    }catch(err){
        throw new Error("Failed to fetch data")
    }
}