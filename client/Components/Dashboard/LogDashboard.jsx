import React from 'react';
import LogErrorChart from '../Charts/LogErrorChart.jsx';
import LogTable from '../Charts/LogTable.jsx';

export default function LogDashboard() {
  return (
    <div className='flex items-center justify-center'>
      <LogTable />
    </div>
  );
}
