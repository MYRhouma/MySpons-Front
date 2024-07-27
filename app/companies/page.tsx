"use client"
import { ExpandableCard } from '@/components/blocks/expandable-card-demo-standard';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useEffect, useState } from 'react';

interface Company {
  id: number;
  name: string;
  address: string;
  website: string;
}

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const fetchTokensAndCompanies = async () => {
      try {
        // Get tokens
        const tokenResponse = await fetch('/api/getTokens', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!tokenResponse.ok) {
          throw new Error('Failed to obtain tokens');
        }

        const { access } = await tokenResponse.json();

        // Fetch companies using the access token
        const companiesResponse = await fetch('/api/companies', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${access}`,
          },
        });

        if (!companiesResponse.ok) {
          throw new Error('Failed to fetch companies');
        }

        const data = await companiesResponse.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // fetchTokensAndCompanies();
  }, []);

  return (
    <div>
      
      {/* <AuroraBackground><h1>Companies</h1></AuroraBackground> */}

      {/* <ExpandableCard/> */}
      {/* <ul>
        {companies.map(company => (
          <li key={company.name}>
            <h2>{company.name}</h2>
            <a href={company.website}>{company.website}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Companies;
