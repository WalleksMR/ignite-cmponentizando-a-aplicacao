

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { MoviesContextProvider } from './contexts/MoviesContext';


export function App() {

  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <MoviesContextProvider>
      <SideBar />
      <Content />
    </MoviesContextProvider>
    </div>
  )
}