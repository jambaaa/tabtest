import MenuItem from './MenuItem';
import styles from './index.module.scss'

const MENU_ITEMS = [
  {
    "name": "Home",
    "path": "/"
  },
  {
    "name": "About",
    "path": "/about"
  }
]

export default function Menu() {

  const menuItems: any = [];

  MENU_ITEMS.forEach((item, index) => {
    menuItems.push(<MenuItem key={index} path={item["path"]} name={item["name"]}/>);
  });

  return (
    <div className={styles.main}>
      {menuItems}
    </div>
  )
}
