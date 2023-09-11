import { ReactNode, useState } from 'react';
import MenuModal from '@/modals/MenuModal';
import Header from '@/components/Header';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children }: Props) => {
  const [hideMenu, setHideMenu] = useState(true);
  function toggleMenu(): void {
    setHideMenu(
      (preState) => {
        console.log(preState);
        return !preState;
      }
    );
  }

  return (
      <div className='w-5/6'>
        <Header/>
      <div>{children}</div>
      <MenuModal toggleMenu={toggleMenu} hideMenu={hideMenu}/>
    </div>
  );
};

export default Layout;