import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FarmsList from '../../components/Farms/FarmsList';

const FarmsListPage = () => {

    return <>
    
    <FarmsList/>

    </>

}
export default FarmsListPage;
