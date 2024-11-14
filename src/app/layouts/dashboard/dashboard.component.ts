import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Subject, takeUntil } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/apiResponse.model';
import { PaginationRequest } from 'src/app/core/models/paginationRequest.model';
import { Position } from 'src/app/core/models/position.model';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { PositionsService } from 'src/app/core/services/positions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  public collectionSize: number = 10;
  public page: number = 1;
  public pageSize: number = 5;
  public positionsArray: Position[] = [];
  public filter:PaginationRequest = {
    size: this.pageSize,
      page: this.page,
      columName: "",
      columnOrder: "",
      filters: [
        {
          key: "",
          type: "",
          value: ""
        }
      ]
  };

  private destroy$ = new Subject<void>();
  private positionService = inject(PositionsService);

  @ViewChild('searchPosition') searchPosition!: ElementRef;

  ngOnInit() {
    this.getAllPositions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchPosition.nativeElement, 'input')
      .pipe(
        map((x: any) => x.currentTarget.value),
        debounceTime(1500)
      ).subscribe(res => {
        this.filter = {
          ...this.filter,
          filters: [
            {
              type: "",
              key: "name",
              value: res
            }
          ]
        }

        this.getAllPositions()
      })
  }

  onPageChange(page: number): void {
    this.filter = {
      ...this.filter,
      page: page
    }

    this.getAllPositions();
  }

  onPageSizeChange(): void {
    this.filter = {
      ...this.filter,
      size: this.pageSize
    }

    this.getAllPositions();
  }

  getAllPositions() {
    this.positionService.getAllPositions(this.filter)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: ApiResponse) => {
      this.collectionSize = res.totalElements;
      this.page = res.page;
      this.pageSize = res.size
      this.positionsArray = [...res.content];
    })
  }

}
