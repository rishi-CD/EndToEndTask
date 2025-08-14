
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import "../Styles/CaloireSummary.css"

interface Props {
  totalCalories: number;
  maxCalories?: number;
}

const CalorieSummary = ({ totalCalories, maxCalories = 3000 }:Props) => {
  return (
    <div className="summary-list">
      <div className="calorie-summary">
        <div className="card-title">Today's Total Calories</div>
        <div className="cal-val">{totalCalories} cal</div>
        <Gauge
          value={totalCalories}
          valueMin={0}
          valueMax={maxCalories}
          startAngle={-110}
          endAngle={110}
          innerRadius="80%"
          outerRadius="100%"
          sx={{
            [`& .${gaugeClasses.valueArc}`]: {
              strokeWidth: 24,
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              strokeWidth: 24, 
            },
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 48,
              fontWeight: 'bold',
              fill: '#23bd23',
            },
            width: 300,
            height: 300,
            margin: '0 auto',
          }}
          text={({ value, valueMax }) => `${value} / ${valueMax} cal`}
        />
      </div>
    </div>
  );
};

export default CalorieSummary;
