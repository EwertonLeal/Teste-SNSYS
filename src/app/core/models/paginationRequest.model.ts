import { Filter } from "./filter.model";

export interface PaginationRequest {
    page: number;
    size: number;
    columName: string;
    columnOrder: string;
    filters: Filter;
  }