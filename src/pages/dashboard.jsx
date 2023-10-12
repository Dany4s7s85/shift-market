import React from 'react';
import NavBar from 'components/organisms/NavBar';
import DashboardBody from 'components/organisms/DashboardBody';
import Footer from 'components/organisms/Footer';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <DashboardBody />
      <Footer />
    </>
  );
}
