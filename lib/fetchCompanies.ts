// lib/fetchData.ts
export async function fetchCompanies(token: string) {
    const res = await fetch('http://35.234.159.163/api/companies?page=1', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch companies');
    }
  
    return res.json(); // Directly return the JSON response
  }
  
  export async function fetchToken() {
    const res = await fetch('http://35.234.159.163/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'yassine', password: '@YassineLeBro5518' }),
    });
  
    if (!res.ok) {
      throw new Error('Failed to obtain token');
    }
  
    const data = await res.json();
    if (!data.access) {
      throw new Error('Invalid token response structure');
    }
  
    return data.access; // Return the access token directly
  }
  