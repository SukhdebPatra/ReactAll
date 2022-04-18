import React,{useEffect,useState} from 'react'
import Loding from './Loding';

const Api = () => {
    const [users, setUsers] = useState( []);

    const [load,setload]=useState(true);

    const getUsers=async()=>{
        try{

            setload(false);

            const response= await fetch('https://jsonplaceholder.typicode.com/posts')
        setUsers (await response.json());
        }
        catch (error){
            console.log('My error is' + error);
        }
        
        
    }

    useEffect(()=>{
        getUsers();
    },[]);

    if(load){
        return <Loding/>
    }


  return (
    <>
    <h2>List of gitHub Users </h2>
    <div className='container-fluid mt-5 '>
        <div className="row text-center">

        {
            users.map((cur)=>{
                return(
                    <div key={cur.id}>
                        <div className="col-10 col-md-4 mt-5 " >
                <div className="card p-2">
                    <div className="image">
                        <img src='' className="rounded" width='155'/>
                    </div>
                    <div className="ml-3 w-100">
                        <h4 className='mb-0 mt-0 textleft'>{cur.id}</h4><span className='textLeft'>{cur.title}</span>
                        <div className="p-2 mt-2 bg primary d-flex justify-content-between round text-primary stats">
                            <div className="d-flex flex-column"><span className='articles'>articles<span className='number1'>38</span></span></div>
                            <div className="d-flex flex-column"><span className='followers'>followers<span className='number1'>980</span></span></div>
                            <div className="d-flex flex-column"><span className='rating'>rating<span className='number1'>8.9</span></span></div>
                        </div>
                    </div>
                </div>

            </div>

                        </div>
                )
            })


        }

            

        </div>
    </div>
    
    </>
  )
}

export default Api