import { inject, Injectable } from '@angular/core';
import { AuthAPI } from '../base/auth-api';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../interfaces/login.interface';
 import { Signup, SignupResponse } from '../interfaces/signup.interface';
import { HttpClient } from '@angular/common/http';
 import { AuthEndpoints } from '../enums/AuthEndpoints';
import { changePassword, changePasswordResponse, forgotPassword, forgotPasswordResponse, reset, resetResponse, verifyOtp, verifyOtpResponse } from '../interfaces/password.interface';
import { environment } from '../../../../src/environments/environment';
import { EditProfile, EditProfileResponse } from '../interfaces/editProfile.interface';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthAPI {
    private _http=inject(HttpClient)


   
  login(data: LoginRequest): Observable<LoginResponse>  {
    return this._http.post<LoginResponse>(environment.baseUrl+AuthEndpoints.LOGIN,data)

   }
  register(data: Signup): Observable<SignupResponse> {
    return this._http.post<SignupResponse>(environment.baseUrl+AuthEndpoints.REGISTER,data)
   }
   forgotPassword(data: forgotPassword): Observable<forgotPasswordResponse> {
        return this._http.post<forgotPasswordResponse>(environment.baseUrl+AuthEndpoints.FORGOT_PASSWORD,data)

   }
   verifyOtp(data: verifyOtp): Observable<verifyOtpResponse> {
    return this._http.post<verifyOtpResponse>(environment.baseUrl+AuthEndpoints.VERIFY_OTP,data)

   }
   resetPassword(data:reset): Observable<resetResponse> {
      return this._http.put<resetResponse>(environment.baseUrl+AuthEndpoints.RESET_PASSWORD,data)

   }
   editProfile(data:EditProfile): Observable<EditProfileResponse> {
    return this._http.put<EditProfileResponse>(environment.baseUrl+AuthEndpoints.edit_profile,data)
   }
   changePassword(data:changePassword): Observable<changePasswordResponse> {
    return this._http.patch<changePasswordResponse>(environment.baseUrl+AuthEndpoints.CHANGE_PASSWORD,data)
   }
   

 
   

}
