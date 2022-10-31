import { useEffect,useState  } from "react";
const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [isPending, setisPending]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        setTimeout(() =>{
        fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json()
            })
            .then(data =>{
                setError(null);
                setData(data);
                setisPending(false);

            })
            .catch(err =>{
                setisPending(false);
                setError(err.message);
            })
        },1000);
    },[url]);
    return{data, isPending, error}
}
 export default useFetch;