import { inject, Injectable, signal } from '@angular/core';
import { AuthAPI } from '../base/auth-api';
import { finalize, Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse, User } from '../interfaces/login.interface';
 import { Signup, SignupResponse } from '../interfaces/signup.interface';
import { HttpClient } from '@angular/common/http';
 import { AuthEndpoints } from '../enums/AuthEndpoints';
import { changePassword, changePasswordResponse, forgotPassword, forgotPasswordResponse, reset, resetResponse, verifyOtp, verifyOtpResponse } from '../interfaces/password.interface';
import { EditProfile, EditProfileResponse } from '../interfaces/editProfile.interface';
import { BASE_URL1 } from '../base/token';
import { LoggedUserResponse } from '../interfaces/loggedUser.interface';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthAPI {
    private _http=inject(HttpClient)
    private readonly baseUrl=inject(BASE_URL1)


  //   user = signal<User | null>(null);
  // loadingUser = signal(false);


   
  login(data: LoginRequest): Observable<LoginResponse>  {
    return this._http.post<LoginResponse>(this.baseUrl+AuthEndpoints.LOGIN,data)

   }
  register(data: Signup): Observable<SignupResponse> {
    return this._http.post<SignupResponse>(this.baseUrl+AuthEndpoints.REGISTER,data)
   }
   forgotPassword(data: forgotPassword): Observable<forgotPasswordResponse> {
        return this._http.post<forgotPasswordResponse>(this.baseUrl+AuthEndpoints.FORGOT_PASSWORD,data)

   }
   verifyOtp(data: verifyOtp): Observable<verifyOtpResponse> {
    return this._http.post<verifyOtpResponse>(this.baseUrl+AuthEndpoints.VERIFY_OTP,data)

   }
   resetPassword(data:reset): Observable<resetResponse> {
      return this._http.put<resetResponse>(this.baseUrl+AuthEndpoints.RESET_PASSWORD,data)

   }
   editProfile(data:EditProfile): Observable<EditProfileResponse> {
    return this._http.put<EditProfileResponse>(this.baseUrl+AuthEndpoints.edit_profile,data)
   }
   changePassword(data:changePassword): Observable<changePasswordResponse> {
    return this._http.patch<changePasswordResponse>(this.baseUrl+AuthEndpoints.CHANGE_PASSWORD,data)
   }
   logout():Observable<string>{
    return this._http.get<string>(this.baseUrl+AuthEndpoints.LOGOUT)
   }
  loadLoggedUser(): Observable<LoggedUserResponse> {
  // this.loadingUser.set(true);

  return this._http.get<LoggedUserResponse>(
    this.baseUrl+ AuthEndpoints.get_logged_user
  )}
  
//   .pipe(
//     tap(user => this.user.set(user)),
//     finalize(() => this.loadingUser.set(false))
//   );
// }
// isLoggedIn() {
//   return !!this.user();
// }


 
   

}
