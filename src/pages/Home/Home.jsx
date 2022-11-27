import React,{useState, useEffect} from 'react'
import { useAuthContext } from "../../context/AuthContext";
import { Button, Spin, message } from 'antd';
import { API} from "../../constant";
/* import { getToken } from '../../helpers'; */

const Home = () => {
    const {user } = useAuthContext();
    const [workouts, setWorkouts] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);

    const fetchWorkouts = async () => {
        setIsLoading(true);
        try{
            const response = await fetch(`${API}/workouts`)
            const data = await response.json();
            console.log(data);
            setWorkouts(data ?? []);
            message.error("Successfully retrieved workouts!");
        } catch(error){
            console.log(error);
            message.error("Error while fetching workouts!");
        } finally{
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchWorkouts();
      }, []);

      if (isLoading) {
        return <Spin size="large" />;
      }
    
  return (
    <div>
    {user ? <h1>Welcome back {user.username}</h1> : <h1>Please Log in or register</h1> }
    <Button href="/workout" type="link">
            <h3>Go to Workout</h3>
          </Button>
          {console.log(workouts)}
    
    


        
    </div>
  )
}

export default Home