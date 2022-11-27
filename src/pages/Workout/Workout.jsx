import React from 'react'
import {Button,Row,Col} from "antd";
import { Fragment } from 'react';
import useScreenSize from "../../hooks/useScreenSize";
import { useAuthContext } from '../../context/AuthContext';

const Workout = () => {
    const {isDesktopView} = useScreenSize();
    const {user} = useAuthContext();
  return (
    <Fragment>
    <Row align="middle">
      <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
    {user ? <Button type="primary" htmlType="submit" className="login_submit_btn">
                  Create Workout</Button> : <div><h1>Please Log in or register to add workouts</h1></div>}
    
                  
                  </Col>
              </Row>    
    </Fragment>
 ) 
}

export default Workout;