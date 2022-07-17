import { useEffect, useState } from 'react';
import cubejs from "@cubejs-client/core";
// import Flatpickr from "react-flatpickr";
import LineChart from '../../components/chart/LineChart'
import { stackedChartData } from '../../util';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import BarChart from '../../components/chart/BarChart';
import TableRenderer from '../../components/chart/Table';

import { BaseLayout, NftList } from "@ui";

import React, { useRef } from "react";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.css";

// const cubejsApi = cubejs(
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc2OTEyMTB9.diuiQd1kYCiCpTWG1TtqNXv67PoHB6bsRa-57ZMUqKM',
//   { apiUrl: 'https://rose-gerbil.aws-us-west-2.cubecloudapp.dev/cubejs-api/v1' }
// );

const cubejsApi = cubejs( 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgwMjcyNDF9.700039kdJftSQR2pR2_phIh4uUG5kUGGT2GT3307nJw', 
  { apiUrl: 'https://gross-falcon.aws-us-west-2.cubecloudapp.dev/cubejs-api/v1' } 
); 

export default function Home() {
  // const rootElement = document.getElementById("root");
  // ReactDOM.render(<App />, rootElement);

  // const fp = useRef(null);
  const fp = useRef(null);
  
  
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [error, setError] = useState (null);
  const [dateRange, setDateRange] = useState({
    startDate: '2017-08-02',
    endDate: '2022-07-10'
  });

  useEffect(() => {
    loadData();
  }, [dateRange]);
  
  const loadData = () => {

    cubejsApi
      .load({
        measures: ["Bitcoin.number"],
        timeDimensions: [
          {
            dimension: "Bitcoin.createdAt",
            granularity: `day`,
            dateRange: [dateRange.startDate, dateRange.endDate]
          }
        ]
      })
      .then((resultSet) => {
        setData(stackedChartData(resultSet));
      })
      .catch((error) => {
        setError(error);
      })

    cubejsApi
      .load({
        measures: ["Performance.number"],
        timeDimensions: [
          {
            dimension: "Performance.createdAt",
            granularity: `day`,
            dateRange: [dateRange.startDate, dateRange.endDate]
          }
        ]
      })
      .then((resultSet) => {
        setData2(stackedChartData(resultSet));
      })
      .catch((error) => {
        setError(error);
      })

    cubejsApi
      .load({
        measures: ["Bitcoin.number"],
        timeDimensions: [
          {
            dimension: "Bitcoin.createdAt",
            dateRange: [dateRange.startDate, dateRange.endDate]
          }
        ],
        order: {
          "Bitcoin.number": "desc"
        },
        dimensions: ["Bitcoin.createdAt"],
        "filters": []
      })
      .then((resultSet) => {
        setBarChartData(stackedChartData(resultSet));
      })
      .catch((error) => {
        setError(error);
      })
  }

  // if(error) {
  //   return <div>Error: {error.message}</div>
  // }

  if(!data || !barChartData) {
    return 
  }

  return (
    <BaseLayout>
    <div className={styles.container}>
      
      
        <Flatpickr 
        options={{ 
          allowInput: true, 
          mode: "range", 
          minDate: new Date('2016-12-12'),
          maxDate: new Date('2022-07-10') 
        }}
        value={[dateRange.startDate, dateRange.endDate]}
        onChange={(selectedDates) => {
          if (selectedDates.length === 2) {
            setDateRange({
              startDate: selectedDates[0],
              endDate: selectedDates[1]
            })
          }
        }}  />
        
        <button
          type="button"
          onClick={() => {
            if (!fp?.current?.flatpickr) return;
            fp.current.flatpickr.clear();
          }}
        >
          Clear
        </button>
    
  
    
      <h3>📈 Bitcoin Price</h3>
      <LineChart data={data}/>

      <h3>📈 Fund Performance %</h3>
      <LineChart data={data2}/>

      <h3>📊 NFT sales number</h3>
      <BarChart 
        data={barChartData} 
        pivotConfig={{
          x: ["Bitcoin.createdAt"],
          y: ["measures"],
          fillMissingDates: true,
          joinDateRange: false
        }}
      />

      {/* <h3>📋 Order Table</h3>
      <TableRenderer 
      data={barChartData} /> */}

    </div>
    </BaseLayout>
  )
}
