import { Position } from "./position.model";

export interface ApiResponse {
    page: number;
    size: number;
    totalPages: number;
    totalElements: number;
    message: string;
    success: boolean;
    content: Position[];
}