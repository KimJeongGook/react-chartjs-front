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

function App() {
  const data = [50, 40, 30, 35, 40];
  const labels = [2017, 2018, 2019, 2020, 2021];

  return (
    <Layout>
      <LineChart data={data} labels={labels} />
      <VerticalBarChart data={data} labels={labels} />
      <HorizontalBarChart data={data} labels={labels} />
      <StackedBarChart data={data} labels={labels} />
      <StackdBarChartWithGroups data={data} labels={labels} />
      <FloatingBarChart data={data} labels={labels} />
      <BarChartBoarderRadius data={data} labels={labels} />
      <MultiAxisLineChart data={data} labels={labels} />
      <SteppedLineChart data={data} labels={labels} />
    </Layout>
  );
}

export default App;

