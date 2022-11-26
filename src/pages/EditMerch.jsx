import React, {useEffect} from 'react'
import Layout from './Layout'
import FormEditMerch from '../components/FormEditMerch.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getMe} from "../features/authSlice.js"

const EditMerch = () => {
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
        <FormEditMerch/>
    </Layout>
  )
}

export default EditMerch