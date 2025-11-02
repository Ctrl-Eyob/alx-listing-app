import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_NAME } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">{APP_NAME}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              title="Modern Apartment"
              description="A cozy 2-bedroom apartment in the city center."
              imageUrl="/assets/placeholder.jpg"
            />
            <Card
              title="Beachfront Villa"
              description="Luxury villa with a stunning ocean view."
              imageUrl="/assets/placeholder.jpg"
            />
            <Card
              title="Mountain Cabin"
              description="Peaceful retreat surrounded by nature."
              imageUrl="/assets/placeholder.jpg"
            />
          </div>

          <div className="mt-10 text-center">
            <Button label="Explore More" onClick={() => alert('Coming soon!')} />
          </div>
        </div>
      </main>
    </>
  );
}
