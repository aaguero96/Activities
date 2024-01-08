import { ClassProvider, Type } from '@nestjs/common';

export const createClassProvider = (
  provide: string | symbol,
  useClass: Type<any>,
): ClassProvider => ({
  provide,
  useClass,
});
