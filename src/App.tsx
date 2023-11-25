import { Outlet } from 'react-router-dom';
import ReactIcon from '@icons/ico-react.svg';
import GlobalHeader from '@/layouts/GlobalHeader';

export default function App() {
  console.log(import.meta.env.VITE_API_HOST);
  return (
    <div>
      <GlobalHeader />
      <img src={ReactIcon} alt="" />
      <Outlet />
    </div>
  );
}
