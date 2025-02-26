import type { z } from 'zod';

import type { createCategorySchema } from './schemas';

export type CreateCategoryData = z.infer<typeof createCategorySchema>;
