import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const SinglePost = () => {
    const {id} = useParams();
    const [news, setNews] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data => {
             if (!data.id){
            navigate('/news')
        return
      }
      setNews(data)
    })
},[id, navigate])


  return (
    <div>
        {news && (
            <>
            <h1>{news.title}</h1>
            <p>{news.body}</p>
            </>
        )}
    </div>)}
export default SinglePost;
