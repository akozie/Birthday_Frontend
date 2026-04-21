import { createFileRoute } from '@tanstack/react-router';
import ViewMemories from '@/lib/pages/viewmemories';

export const Route = createFileRoute('/viewmemories')({
  component: ViewMemories,
});

