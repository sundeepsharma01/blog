import Sidebar from "../components/blogbar"
import BlogPosts from "../components/blogs/page1"
import Footer from "../components/footer"
export default function Blog({params}){
    return(
        <>
        <Sidebar/>
        <BlogPosts page={0}/>
        <Footer/>
        </>
    )
}