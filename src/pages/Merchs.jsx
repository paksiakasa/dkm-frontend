import React, {useEffect} from 'react'
import Layout from './Layout'
import MerchList from '../components/MerchList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getMe} from "../features/authSlice.js"

const Merchs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/login")
    }
  }, [isError, navigate]);
  return (
    <Layout>
        <MerchList/>
    </Layout>
  )
}

export default Merchs