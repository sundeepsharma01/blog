export async function getPost(p){
    try{
        let url = process.env.API+"?slug="+p.slug;
        let req = await fetch(url)
        let res = await req.json()
        return res[0];
    }catch(err){
        return {error:"error"}
    }
}