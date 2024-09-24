import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/type/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Verification Code',
        react : VerificationEmail({username, otp : verifyCode})
      });
    return { success: true, message: "Verification Email sent Successfully" };
  } catch (email_error) {
    console.log(email_error);
    return {
      success: false,
      message: "Failed to send verification Email",
    };
  }
}
