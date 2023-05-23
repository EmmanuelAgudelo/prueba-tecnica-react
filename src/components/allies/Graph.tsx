import { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { infoRating } from '../../store/rating';
import Global from '../../Global';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);


const colors = [
  '#41af8a',
  '#4269a4',
  '#47849b'
];

const labels = ['0', '1', '2', '3', '4', '5', '6', '7'];

const sales: Array<number> = [0, 1, 3, 2, 6, 0, 8, 2]

export const data = {
  labels,
  datasets: [
    {
      label: 'ventas',
      data: sales,
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = colors[0];
  const colorMid = colors[1];
  const colorEnd = colors[2];

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export function Graph() {


  const { rating } = infoRating((state) => ({
    rating: state.rating
  }));
  const { setRating } = infoRating();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const url = Global.url;
      const request = "/json-server/rating.json";
      const { data: { rating } } = await axios.get(url + request)
      setReady(true);
      setRating(rating);
    }
    )()
    
  
  }, []);

  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    chart?.resize(300, 300);

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);


  return <Chart ref={chartRef} type='line' data={chartData} />;
}
