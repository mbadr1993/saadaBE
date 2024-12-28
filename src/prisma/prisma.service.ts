import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOWU2ZTA5YjgtYjg5Zi00NWJmLTljMTYtOWMzNGI2YWJlMDEzIiwidGVuYW50X2lkIjoiODQ1NWFkYWZjNGEyYjI0NmEwZTlkMGM1NWU4NWZhY2IzNjcyY2IwZTVjODhmOTQ5NDNhYWU4MTczYTc2ODUzOSIsImludGVybmFsX3NlY3JldCI6ImY2NTM5Y2Q4LWY2NWEtNDQ1Yy04OTZkLTFkZGE1NDE0MGVjNiJ9.L_ZB65zqRvit1hjkDpJ1HqkMSghcU7UVYGGHuzREqwM',
        },
      },
    });
  }
}
