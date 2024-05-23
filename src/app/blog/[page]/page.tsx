import Sidebar from "../../components/blogbar"
import Footer from "../../components/footer"
import BlogPosts from "../../components/blogs/page1"
export default function Blog({params}){
    return(
        <>
        <Sidebar/>
        <BlogPosts page={params.page}/>
        <Footer/>
        </>
    )
}