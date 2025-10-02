
//https://api.cosmicjs.com/v3/buckets/mr-cleaner-production/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=2YIUPJguqPaGUj5gH6zabMDphe36gwi7pfFhJD4r2aBwqwxa&depth=1&props=slug,title,

export async function getDataHome(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/68cc31b0fe0840663f6504e7?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, {next: { revalidate: 120 }})
        
        if(!res.ok){
               console.error("getDataHome response not OK:", res.status)
              return { object: { metadata: { heading: "", cta_button: {}, banner: {} } } }
        }
        return res.json()

    }catch(err){
        console.error("getDataHome error:", err)
        return { object: { metadata: { heading: "", cta_button: {}, banner: {} } } }
    }
}

//https://api.cosmicjs.com/v3/buckets/mr-cleaner-production/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=2YIUPJguqPaGUj5gH6zabMDphe36gwi7pfFhJD4r2aBwqwxa&depth=1&props=slug,title

export async function getSubirMenu(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`, {next: {revalidate: 120 }})
        if(!res.ok){
            console.error("getSubirMenu response not OK:", res.status)
      return { objects: [] }
        }

        return res.json()

    }catch(err){
        console.error("getSubirMenu error:", err)
    return { objects: [] }
    }
}

export async function getItemBySlug(itemSlug:string){

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

//definindo o objeto de consulta pelo meu slug
const queryParams = new URLSearchParams({
    query: JSON.stringify({ //o COSMIC obriga a usar este query
        slug:itemSlug
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.READ_KEY as string
})


const url = `${baseUrl}?${queryParams.toString()}`

try{
    const res = await fetch(url, {next: {revalidate: 120}})
    if(!res.ok){
       console.error("getItemBySlug response not OK:", res.status)
      return { objects: [] }
    }
    
   return res.json()

}catch(err){
   console.error("getItemBySlug error:", err)
    return { objects: [] }
}

}
