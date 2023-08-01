import {
  Squares2X2Icon,
  MegaphoneIcon,
  BanknotesIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  SunIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { authLogout } from 'src/store/auth/authSlice';

const listMenu = [
  {
    icon: <Squares2X2Icon className='w-8 h-8 text-icon' />,
    title: 'Dashboard',
    url: '/',
  },
  {
    icon: <MegaphoneIcon className='w-8 h-8 text-icon' />,
    title: 'Campain',
    url: '/campain',
  },
  {
    icon: <BanknotesIcon className='w-8 h-8 text-icon' />,
    title: 'Payment',
    url: '/payment',
  },
  {
    icon: <TruckIcon className='w-8 h-8 text-icon' />,
    title: 'Shipping',
    url: '/ship',
  },
  {
    icon: <UserCircleIcon className='w-8 h-8 text-icon' />,
    title: 'Profile',
    url: '/me',
  },

  {
    icon: <ArrowRightOnRectangleIcon className='w-8 h-8 text-icon' />,
    title: 'Logout',
    url: '/logout',
  },
  {
    icon: <SunIcon className='w-8 h-8 text-icon' />,
    title: 'Theme',
    url: '/!',
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className='w-full md:w-[76px] flex-shrink-0 rounded-3xl shadow-md bg-white px-[14px] py-10 flex flex-col'>
      {listMenu.map((menu) => {
        if (menu.url === '/logout') {
          return (
            <button
              key={menu.icon}
              data-tooltip-id='menu-tooltip'
              data-tooltip-content={menu.title}
              onClick={() => dispatch(authLogout())}
              className={classNames(
                'flex items-center gap-2 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto'
              )}
            >
              <span>{menu.icon}</span>
              <span className='md:hidden'>{menu.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            data-tooltip-id='menu-tooltip'
            data-tooltip-content={menu.title}
            to={menu?.url}
            key={menu.title}
            className={classNames(
              'flex items-center gap-2 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto'
            )}
          >
            <span>{menu.icon}</span>
            <span className='md:hidden'>{menu.title}</span>
          </NavLink>
        );
      })}
      <Tooltip
        place='right'
        id='menu-tooltip'
        className='z-10'
        render={({ content }) => <span>{content}</span>}
      />
    </div>
  );
};

export default Sidebar;
