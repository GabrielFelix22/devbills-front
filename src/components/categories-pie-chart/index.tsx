import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';
import { theme } from '../../styles/theme';

const apiData = [
  {
    _id: '1',
    title: 'Alimentação',
    amount: 20000,
    color: '#FF33BB',
  },
  {
    _id: '2',
    title: 'Mercado',
    amount: 15000,
    color: '#0033FF',
  },
  {
    _id: '3',
    title: 'Compras',
    amount: 25000,
    color: '#00FF00',
  },
];

type ChartData = {
  id: string;
  label: string;
  externalId: string;
  value: number;
  color: string;
};

export function CategoriesPieChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color,
    }));

    return chartData;
  }, []);

  return (
    <ResponsivePie
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 8 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      legends={[
        {
          anchor: 'top',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: -28,
          itemWidth: 120,
          itemHeight: 16,
          itemTextColor: theme.colors.neutral,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 16,
          symbolShape: 'circle',
        },
      ]}
    />
  );
}
