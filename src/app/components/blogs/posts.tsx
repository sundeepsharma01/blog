import {getPost} from "./postfetch"
import Ad1 from "../../components/ad1"
import Ad2 from "../../components/ad2"
import Ad3 from "../../components/ad3"
import Ad4 from "../../components/ad4"
export default async function Post({p}){
    let data = await getPost(p)
    // console.log(data);
    if(data.error){
        return(
            <>
            <h1>Oops! Something went wrong</h1>
            </>
        )
    }else{
        return (
            <>
            <div className="flex justify-center items-center" style={{flexDirection:"column"}}>
                <div>
                <h1 dangerouslySetInnerHTML={{ __html: data.title}}></h1><br/><hr />
                <Ad1/>
                </div>
            {
                    <div className="container my-3 p-3 shadow-lg" dangerouslySetInnerHTML={{ __html: data.content}} >
                    </div>
                
            }
            <Ad4/>
            <Ad2/>
            <Ad3/>
            </div>
            </>
        )
    }
}