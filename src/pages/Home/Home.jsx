import React,{useState, useEffect} from 'react'
import { useAuthContext } from "../../context/AuthContext";
import { Button,Modal, message, Row, Col, Typography, Form, Input } from 'antd';
import { API} from "../../constant";
/* import { getToken } from '../../helpers'; */

const Home = () => {
  
    const {user } = useAuthContext();
    const [workouts, setWorkouts] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInput, setUserInput] = useState('');

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setWorkouts(
        prevState => ([
          ...prevState,
          {
            'name': userInput
          }
        ])
      );
      console.log(workouts);
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleChange = (e) => {

      setUserInput(e.target.value);
    }
  

    /* const fetchWorkouts = async () => {
        setIsLoading(true);
        try{
            const response = await fetch(`${API}/workouts`)
            const data = await response.json();
            console.log(data);
            setWorkouts(data ?? []);
            message.success("Successfully retrieved workouts!");
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
      } */
    
  return (
    <Row>
      <Col>
        <Typography.Title level={2}>Personal Workout Page</Typography.Title>
        <Button type="primary" onClick={showModal}>
        Create Workout
      </Button>

      
      <Modal title="Add Exercise Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'Add Exercise'}>
        
                <Input placeholder="Exercise Name" onChange={handleChange}/>
              
        
      </Modal>
      <ul>
      {workouts.map( (workout,idx) => {
        return <li key={idx}>{workout.name}</li>
      })}
      </ul>
  

      </Col>
    </Row>  
  )
}


export default Home;

const workout = [{
  'name': 'Chest'
},
{
'name': 'Legs'}
];

