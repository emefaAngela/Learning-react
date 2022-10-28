import {useEffect, useState} from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs,setBlogs]=useState(null);
    const [isPending, setisPending]=useState(true);
    const[error,setError]=useState(null);

    

    
    
    useEffect(()=>{
        setTimeout(() =>{
        fetch('http://localhost:8000/blogss')
            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json()
            })
            .then(data =>{
                setError(null);
                setBlogs(data);
                setisPending(false);

            })
            .catch(err =>{
                setisPending(false);
                setError(err.message);
            })
        },1000);
    },[]);
    
    return (  
        <div className="home">
            {Error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} />}
            

        </div>
    );
        }
    
 
export default Home;