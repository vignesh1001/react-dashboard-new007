/** @format */

import React from 'react';
import Grid from '@mui/material/Grid';
import ContentTable from './ContentTable';
import MainCard from '../../components/cards/MainCard';
import { gridSpacing } from '../../store/constant';

const Leads = () => {
  return (
    <MainCard
      title="LEAD MANAGEMENT TRACKER"
      darkTitle
      headerStyle={{ color: '#006AB4' }}
    >
      <Grid container spacing={gridSpacing}>
        <ContentTable />
      </Grid>
    </MainCard>
  );
};

export default Leads;
