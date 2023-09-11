import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  hideMenu: boolean,
  toggleMenu: () => void,
}

export default function MenuModal(props: Props) {
  const {toggleMenu, hideMenu} = props;
  return (
    <>
    <main className='bg-red-700'>
      <div className='bg-blue-700'> 
        <strong><p>Menu</p></strong>
        <p>Automatically save</p>
      </div>
      <div >
        <Link href='/'>
          <div>
            <p>Home</p>
          </div>
        </Link>
        <Link href='/settings'>
          <div>
            <p>Settings</p>
          </div>
        </Link>
      </div>
    </main>
    <span onClick={toggleMenu}>Click here</span>
    </>
  )
}
