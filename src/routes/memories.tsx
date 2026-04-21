import { createFileRoute } from '@tanstack/react-router';

import Memories from '@/lib/pages/memories';

export const Route = createFileRoute('/memories')({
  component: Memories,
});
