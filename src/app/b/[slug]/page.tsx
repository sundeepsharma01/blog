import Footer from "../../components/footer"
import Sidebar from "../../components/blogbar"
import Post from "../../components/blogs/posts"
import Script from "next/script"
import Hlt from "../../components/blogs/effect"
import {getPost} from "../../components/blogs/postfetch"
export async function generateMetadata({ params }) {
    let data = await getPost(params)
    // console.log(data.keywords);
    return {
      title: data.title,
      description:data.description,
      keywords:data.keywords
    }
  }
export default function Posts({params}){
    // console.log("params is",params);
  return(
    <>
    <Sidebar/>
    <Post p={params}/>
    <Footer/>
    <Hlt/>
  </>
  )
}