import LineChart from './components/LineChart/LineChart';
import VerticalBarChart from './components/BarChart/VerticalBarChart';
import HorizontalBarChart from './components/BarChart/HorizontalBarChart';
import Layout from './components/Layout';
import StackedBarChart from './components/BarChart/StackedBarChart';

function App() {
  const data = [50, 40, 30, 35, 40];
  const labels = [2017, 2018, 2019, 2020, 2021];

  return (
    <Layout>
      <LineChart data={data} labels={labels} />
      <VerticalBarChart data={data} labels={labels} />
      <HorizontalBarChart data={data} labels={labels} />
      <StackedBarChart data={data} labels={labels} />
    </Layout>
  );
}

export default App;

