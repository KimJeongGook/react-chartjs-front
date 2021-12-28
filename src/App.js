import LineChart from './components/LineChart/LineChart';
import VerticalBarChart from './components/BarChart/VerticalBarChart';
import HorizontalBarChart from './components/BarChart/HorizontalBarChart';
import StackedBarChart from './components/BarChart/StackedBarChart';

import Layout from './components/Layout';
import StackdBarChartWithGroups from './components/BarChart/StackdBarChartWithGroups';
import FloatingBarChart from './components/BarChart/FloatingBarChart';
import BarChartBoarderRadius from './components/BarChart/BarChartBoarderRadius';
import MultiAxisLineChart from './components/LineChart/MultiAxisLineChart';
import SteppedLineChart from './components/LineChart/SteppedLineChart';

import './App.css';
import axios from 'axios';
import { useEffect, useCallback, useState } from 'react';

function App() {
  const data = [50, 40, 30, 35, 40];
  const labels = [2017, 2018, 2019, 2020, 2021];

  const [csv, setCsv] = useState([]);
  const [monthBasePassenger, setMonthBasePassenger] = useState([])

  const getCsvWithCallback = useCallback(async()=> {
    try {
      const url ='http://localhost:3001/csv'
      const axiosObj = await axios.get(url)
      const res = await axiosObj.data
      setCsv(res)      
    }catch (e) {
      console.log(e)
    }
  }, [])
  useEffect(() => {
    getCsvWithCallback()
  }, [getCsvWithCallback])

  //데이터 처리 useEffect
  useEffect(() => {
    if (Array.isArray(csv) && csv.length !== 0) {
      // console.log('this. is array!')
      const monthBase = csv.reduce((acc, cur) => {
        const month = cur['년월']
        const sum = Number(cur['합계'])
        const type = cur['구분']

        // console.log(type);
        if (!acc.has(month)) {
          acc.set(month, {
            sum: 0,
            getIn: 0,
            getOff: 0,
          })
        }
        const thisMonth = acc.get(month);
        const getIn = thisMonth['getIn'];
        const getOff = thisMonth['getOff'];
        acc.set(month, {
          sum: thisMonth['sum'] + sum,
          getIn: type === '승차' ? getIn + sum : getIn,
          getOff: type === '하차' ? getOff + sum : getOff,
        })

        return acc
      }, new Map())
      console.log(monthBase);
      const monthData = Array.from(monthBase, ([key, value]) => ({
        month: key,
        data: value
      }))
      setMonthBasePassenger(monthData)
      // console.log(monthData);
    }
  }, [csv])

  console.log(csv);
  return (
    <>
      <div className='App'>
        <h1>대구광역시 버스노선별 시간대별 승하차 인원정보(2019년)</h1>
      </div>
      <Layout>
        <VerticalBarChart monthBasePassenger={monthBasePassenger} />
        <HorizontalBarChart monthBasePassenger={monthBasePassenger} />
        <StackdBarChartWithGroups monthBasePassenger={monthBasePassenger} />
        <StackedBarChart monthBasePassenger={monthBasePassenger} />
       
        <LineChart monthBasePassenger={monthBasePassenger} />    
        <SteppedLineChart monthBasePassenger={monthBasePassenger} />

        <MultiAxisLineChart data={data} labels={labels} />
        <SteppedLineChart data={data} labels={labels} />
      </Layout>
    </>
  );
}

export default App;


