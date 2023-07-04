import PageLayout from '@/layouts/PageLayout';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
};

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'profile', 'home'])),
    },
  };
}

Home.layout = PageLayout;
export default Home;
