import { ReactElement, useState } from 'react';
import { AppBar } from '../AppBar';
import { Drawer } from '../Drawer';

export const Header = (): ReactElement => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar open={open} onDrawerToggle={toggleDrawer} />
      <Drawer open={open} onDrawerToggle={toggleDrawer} />
    </>
  );
};
