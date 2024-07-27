// app/page.tsx
import React from 'react';
import SponsorsTable from './table';
import { fetchCompanies, fetchToken } from '@/lib/fetchCompanies';
import { SponsorTooltip } from '@/components/SponsorTooltip';

export default async function Page() {
  try {
    const token = await fetchToken();
    const data = await fetchCompanies(token);
    return (
      <main>
        <SponsorsTable sponsors={data} />
        <br />
        <SponsorTooltip/>
      </main>
    );
  } catch (error:any) {
    console.error(error);
    return (
      <main>
        <div>Error: {error.message}</div>
      </main>
    );
  }
}
