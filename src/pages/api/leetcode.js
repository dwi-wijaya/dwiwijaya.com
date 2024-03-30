import { NextApiRequest, NextApiResponse } from 'next';

import { getLeetcode } from '@/services/LeetcodeService';

export default async function handler(req,res) {
  const queryParams = req.query;

  const response = await getLeetcode();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(response.status).json(response.data);
}
