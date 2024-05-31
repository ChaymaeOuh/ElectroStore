import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"small appliance"} heading={"Top's Small Appliance"}/>
      <HorizontalCardProduct category={"major appliance"} heading={"Popular Major Appliance"}/>
      
      <VerticalCardProduct category={"health_beauty"} heading={"Health _ Beauty"}/>
      <VerticalCardProduct category={"home comfort"} heading={"Home Comfort"}/>
      <VerticalCardProduct category={"tv_photo"} heading={"TV _ Photo"}/>
      <VerticalCardProduct category={"computer"} heading={"Computer"}/>
      <VerticalCardProduct category={"smartphone_tablet"} heading={"Smartphone _ Tablet"}/>
      <VerticalCardProduct category={"gaming"} heading={"Gaming"}/>
      
    </div>
  )
}

export default Home
