'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import { ExpandableCard } from "@/components/blocks/expandable-card-demo-standard";
import { BreadcrumbItem, Breadcrumbs, Image, Card, CardBody, CardFooter, CardHeader, Divider, Link, Chip } from '@nextui-org/react';
import { ExpandableCard } from '@/components/blocks/expandable-card-demo-standard';
type SponsorData = {
  company: {
    id: number;
    name: string;
    logo: string;
    description: string;
    keywords: string;
    website: string;
    sponsored_videos: number;
    latest_activity: string;
  };
  latest_youtubers: Array<{ channel_id: string; title: string; custom_url: string; banner_url: string }>;
  latest_videos: Array<{ video_id: string; title: string; published_at: string; thumbnails_default_url: string; full_description: string; short_description: string }>;
  total_sponsored_videos: number;
  total_sponsored_videos_last_week: number;
  total_sponsored_videos_last_month: number;
  total_sponsored_videos_last_year: number;
  total_youtubers: number;
  total_youtubers_last_week: number;
  total_youtubers_last_month: number;
  total_youtubers_last_year: number;
  sponsorship_type: string;
};

// Define the function to fetch the access token
async function fetchAccessToken() {
  try {
    const response = await fetch('http://localhost:3000/api/getTokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to obtain token');
    }

    const data = await response.json();
    const accessToken = data.access; // Assuming the token is returned in this field

    // Store the token in localStorage
    localStorage.setItem('accessToken', accessToken);

    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}

// Call this function when the app initializes or when needed
fetchAccessToken();
// .then(token => {
//   console.log('Access token fetched and stored:', token);
// }).catch(error => {
//   console.error('Failed to fetch and store access token:', error);
// });

// Define the function to fetch sponsor data
async function fetchSponsorData(sponsorId: string, token: string): Promise<SponsorData> {
  const response = await fetch(`/api/companies/${sponsorId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch sponsor data');
  }

  return response.json();
}

export default function SponsorPage({ params }: { params: { sponsorId: string } }) {
  const [sponsorData, setSponsorData] = useState<SponsorData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { sponsorId } = params;

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setError('No access token found');
      return;
    }

    fetchSponsorData(sponsorId, token)
      .then((data) => setSponsorData(data))
      .catch((err) => setError(err.message));
  }, [sponsorId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!sponsorData) {
    return <div>Loading...</div>;
  }

  const {
    company,
    latest_videos,
    total_sponsored_videos,
    sponsorship_type,
  } = sponsorData;

  return (
    <div>
        <Breadcrumbs className='mb-4'>
            <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
            <BreadcrumbItem href="/sponsors">Sponsors</BreadcrumbItem>
            <BreadcrumbItem href={"/sponsors/"+sponsorData.company.id}>{sponsorData.company.name}</BreadcrumbItem>
        </Breadcrumbs>
        <Card className="w-full">
            <CardHeader className="flex gap-3 items-center">
                <div className='flex items-center'>
                    <div className='flex gap-3 items-center'>
                        <Image
                        alt="nextui logo"
                        height={70}
                        radius="sm"
                        src="https://logo.clearbit.com/nordvpn.com"
                        width={70}
                        />
                        <div className="flex flex-col">
                            <p className="text-lg">{sponsorData.company.name}</p>
                            <Link
                                isExternal
                                href={sponsorData.company.website}
                                // color="primary"
                                className=''
                                // underline="always"
                                size="md"
                                showAnchorIcon
                            >
                                {sponsorData.company.website}
                            </Link>
                        </div>
                    </div>
                    {/* <div className='mx-16 items-center'>
                        <div className="flex flex-col">
                            <p className="text-lg"></p>
                            
                        </div>
                    </div> */}
                </div>

            </CardHeader>
            <Divider/>
            <CardBody>
                <p>{sponsorData.company.description}</p>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Link
                isExternal
                showAnchorIcon
                href={sponsorData.company.website}
                >
                Visit website
                </Link>
                {/* <div className='flex'> */}
                    {sponsorData.company.keywords.split(',').map((keyword, index) => <Chip className='ml-2' radius="sm" key={index} color="default">{keyword.trim()}</Chip>)}
                {/* </div> */}
            </CardFooter>
        </Card>
        <div>
            <div>
                
            </div>
            <div className='float-right'>
                 <p className='text-lg font-bold my-4'>Last 20 Sponsored Videos</p>
                <ExpandableCard videos={sponsorData.latest_videos}/>
            </div>
            <div>

            </div>
        </div>
    </div>

  );
}


