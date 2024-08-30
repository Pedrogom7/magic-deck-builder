// src/common/decorators/permissions.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { Permissions } from '../enums/permissions.enum';

export const PermissionsDecorator = (...permissions: Permissions[]) =>
    SetMetadata('permissions', permissions);