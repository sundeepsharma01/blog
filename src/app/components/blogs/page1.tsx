import Link from "next/link"
const BlogPostCard = ({ title, description,slug }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 hover:scale-105">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4">
        </div>
        <div className="mt-4">
          <Link href={`/b/${slug}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPosts = async({page}) => {
  let frm;
  let to;
  async function getPost(){
    try{
      frm = page==0?2:(Number(page)*12);
      to = 12;
      let url = process.env.API+"?frm="+frm+"&to="+to;
      console.log(url);
        let req = await fetch(url)
        let res = await req.json();
        return res;
    }catch(err){
      return [{error:err.message}]
    }
  }
  let jsonData = await getPost();
  // console.log(jsonData);
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {jsonData.data.map((post, index) => (
        <BlogPostCard key={index} {...post} />
      ))}
    </div>
    <div className="shadow-lg bg-white py-3 px-5 flex justify-evenly items-center mb-5" style={{
      width:"100%"
    }}>
<Link href={`${page<=1?'/blog':"/blog/"+(Number(page)-1)}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Prev
          </Link>
<Link href={`${jsonData.hasMore?"/blog/"+(Number(page)+1):"/blog/"+page+"#"}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Next
          </Link>

    </div>
    </>
  );
};

export default BlogPosts;
