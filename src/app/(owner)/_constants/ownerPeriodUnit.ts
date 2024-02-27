import { PeriodUnitType } from '../_hooks/useTogglePopover';

export const OWNER_PERIOD_UNIT: PeriodUnitType[] = ['매월', '매일'];

export const OWNER_PERIOD_DAYS = Array.from(
  { length: 31 },
  (_, index) => index + 1,
);

export const OWNER_PERIOD = Array.from({ length: 12 }, (_, index) => index + 1);
