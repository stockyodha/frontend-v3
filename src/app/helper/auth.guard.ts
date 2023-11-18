import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.me().then(response => {
    console.log(response);
    return true;
  }).catch(error => {
    console.log(error);
    // route to login page
    router.navigate(['/auth/login']);
    return false;
  });
};
