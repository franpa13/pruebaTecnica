import React from 'react'

import { Home } from './pages';
import { MainLayout } from './layout/MainLayout';

export const App: React.FC = () => {
  return (
    <MainLayout>
      <Home></Home>
    </MainLayout>


  )
}
