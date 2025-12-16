export interface forgotPassword {
    email: string
}

export interface forgotPasswordResponse {
    message: string;
    info: string
}
export interface changePassword {
    password: string;
    newPassword: string;
    
}
export interface changePasswordResponse {
    message: string;
    token: string
}
export interface verifyOtp {
    resetCode: string;
}
export interface verifyOtpResponse {
       status: string;

}

export interface reset {
    email: string;
    newPassword: string;
 }
 export interface resetResponse {
    message: string;
    token: string;
 }
 
