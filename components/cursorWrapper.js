'use client';

import dynamic from 'next/dynamic';

const Cursor = dynamic(
  () => import('@/components/cursor'),
  { ssr: false }
);

export default function CursorWrapper() {
  return <Cursor />;
}