import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      fullName,
      email,
      phone,
      company,
      designation,
      size,
      goals,
    } = req.body;

    let employee_count = 0;
    if (size) {
      if (size === '1 or 10') employee_count = 10;
      else if (size === '11 or 50') employee_count = 50;
      else if (size === '51 or 200') employee_count = 200;
        else {
          // Ensure size is a string, trim, and extract a number
          const trimmedSize = (typeof size === 'string' ? size : String(size)).trim();
          const match = trimmedSize.match(/(\d+)/);
          if (match) {
            employee_count = parseInt(match[1], 10);
          }
        }
    }

    const payload = {
      full_name: fullName,
      email,
      phone,
      company_name: company,
      designation,
      employee_count,
      message: goals,
      org_id: "website-landing-form", };

    const response = await fetch(
      'https://mdm-security-backend-498807929429.us-central1.run.app/organizations/submit',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
    if (!response.ok) {
      console.error('Backend error:', data);
      return res.status(response.status).json({ error: data });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error });
  }
}
