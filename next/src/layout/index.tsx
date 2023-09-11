import { ReactNode, useState } from 'react';
import MenuModal from '@/modals/MenuModal';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children }: Props) => {
  const [hideMenu, setHideMenu] = useState(true);
  function toggleMenu(): void {
    setHideMenu(
      (preState) => {
        return !preState;
      }
    );
  }

  return (
      <div>
        <p>
          <strong>Staff management app</strong>
        </p>
      <div>{children}</div>
      <MenuModal toggleMenu={toggleMenu} hideMenu={hideMenu}/>
    </div>
  );
};

export default Layout;