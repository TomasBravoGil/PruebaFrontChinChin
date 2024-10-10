import React from 'react'
import { Outlet } from 'react-router'
import styles from './Layout.module.css';
import { UserContextProvider } from '../../contexts/UserContext';
import { Navbar } from '../../components/NavBar/NavBar';

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        <Navbar />
        <section className={styles.body}>
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}