import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Configs } from '..';
import { AppBar, Drawer } from '../../components';
import { Customers, Dashboard, NotFound, Orders } from '../../screens';

export const NavigationProvider = (): ReactElement => {
  return (
    <BrowserRouter basename={Configs.basename}>
      <AppBar />
      <Drawer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
