import styles from './menu.module.css';

import iconProfile from '../../assets/profile.svg?react';
import iconHome from '../../assets/home.svg?react';
import iconFriends from '../../assets/friends.svg?react';
import iconNotifications from '../../assets/notifications.svg?react';
import iconMessages from '../../assets/messages.svg?react';
import iconBookmarks from '../../assets/bookmarks.svg?react';
import iconMore from '../../assets/more.svg?react';

interface MenuItem {
    icon: React.FC<{ color?: string }>; 
    label: string;
  }

const menuItems: MenuItem[] = [
    { icon: iconProfile, label: 'My Profile'},
    { icon: iconHome, label: 'Home'},
    { icon: iconFriends, label: 'Friends'},
    { icon: iconNotifications, label: 'Notifications'},
    { icon: iconMessages, label: 'Messages'},
    { icon: iconBookmarks, label: 'Bookmarks'},
    { icon: iconMore, label: 'More' },
  ];

  export default function Menu() {
    return (
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className={styles.menuItem}>
                <IconComponent />
                <span className={styles.menuLabel}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }