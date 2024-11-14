import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { catchError, takeUntil } from 'rxjs/operators';

import { EMPTY, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginForm: UntypedFormGroup;
  submitted:any = false;
  error:any = '';
  returnUrl: string;
  year: number = new Date().getFullYear();

  private destroy$ = new Subject<void>();


  constructor(
    private formBuilder: UntypedFormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private authenticationService: AuthenticationService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get f() { return this.loginForm.controls; }
  
  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if(!this.loginForm.valid) {
      return;
    }

    const email = this.loginForm.controls['email']?.value;
    const password = this.loginForm.controls['password']?.value;

    this.authenticationService.auth(email, password)
      .pipe(
        takeUntil(this.destroy$),
        catchError(err => {
          this.toastr.error(
            'Login ou senha inválidos!', 
            'Não foi possivel logar', 
            { 
              timeOut: 6000,
              positionClass: 'toast-center-center' 
            }
          );
          return EMPTY;
      })
      ).subscribe({
        next: ()=> this.router.navigate(['/dashboard'])
      });
  }
}
