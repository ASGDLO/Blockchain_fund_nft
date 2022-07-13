import { useEffect, useState } from 'react';
import cubejs from "@cubejs-client/core";
import Flatpickr from "react-flatpickr";
import LineChart from '../../components/chart/LineChart'
import { stackedChartData } from '../../util';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import BarChart from '../../components/chart/BarChart';
import TableRenderer from '../../components/chart/Table';

import { BaseLayout, NftList } from "@ui";

// const CUBE_API_SECRET = process.env.NEXT_PUBLIC_CUBEJS_TOKEN;
// const jwt = require('jsonwebtoken');
// export const cubejsToken = jwt.sign(
// 	{}, CUBE_API_SECRET, { expiresIn: '30d' }
// );

const cubejsApi = cubejs(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc2OTEyMTB9.diuiQd1kYCiCpTWG1TtqNXv67PoHB6bsRa-57ZMUqKM',
  { apiUrl: 'https://rose-gerbil.aws-us-west-2.cubecloudapp.dev/cubejs-api/v1' }
);

export default function Performance() {

  const [data, setData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [error, setError] = useState (null);
  const [dateRange, setDateRange] = useState({
    startDate: '2017-08-02',
    endDate: '2020-12-12'
  });

  useEffect(() => {
    loadData();
  }, [dateRange]);
  
  const loadData = () => {
    cubejsApi
      .load({
        measures: ["Orders.count"],
        timeDimensions: [
          {
            dimension: "Orders.createdAt",
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
        measures: ["Orders.count"],
        timeDimensions: [
          {
            dimension: "Orders.createdAt",
            dateRange: [dateRange.startDate, dateRange.endDate]
          }
        ],
        order: {
          "Orders.count": "desc"
        },
        dimensions: ["Suppliers.company"],
        "filters": []
      })
      .then((resultSet) => {
        setBarChartData(stackedChartData(resultSet));
      })
      .catch((error) => {
        setError(error);
      })
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  if(!data || !barChartData) {
    return <div>Loading...</div>
  }

  return (
    
    <div className={styles.container}>
      
      <Link href={`/ssr-example?startDate=2017-08-02&endDate=2018-01-31`}>
        <a className={styles.link}>View SSR Example</a>
      </Link>

      <h1>Client Rendered Charts Example</h1>
      <h5>🗓️ Select a date range</h5>
      <Flatpickr
        options={{ 
          allowInput: true, 
          mode: "range", 
          minDate: new Date('2016-12-12'),
          maxDate: new Date('2020-12-12') 
        }}
        value={[dateRange.startDate, dateRange.endDate]}
        onChange={(selectedDates) => {
          if (selectedDates.length === 2) {
            setDateRange({
              startDate: selectedDates[0],
              endDate: selectedDates[1]
            })
          }
        }}
      />
      <h3>📈 Order count timeseries</h3>
      <LineChart data={data}/>

      <h3>📊 Order count by Suppliers</h3>
      <BarChart 
        data={barChartData} 
        pivotConfig={{
          x: ["Suppliers.company"],
          y: ["measures"],
          fillMissingDates: true,
          joinDateRange: false
        }}
      />

      <h3>📋 Order Table</h3>
      <TableRenderer data={barChartData} />

    </div>
    
  )
}
