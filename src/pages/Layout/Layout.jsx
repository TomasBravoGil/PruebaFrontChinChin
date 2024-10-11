import React from 'react'
import { Outlet } from 'react-router'
import { UserContextProvider } from '../../contexts/UserContext';
import { Navbar } from '../../components/NavBar/NavBar';

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        <Navbar />
        <section>
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}