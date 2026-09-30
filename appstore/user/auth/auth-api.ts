import Cookies from "js-cookie";
import { apiSlice } from "@/appstore/api-slice";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  refreshToken: string;
  user: AuthUser;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface SignUpResponse {
  message: string;
  email?: string;
}

export interface ProfileResponse {
  user: AuthUser;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

export interface ConfirmOtpRequest {
  email: string;
  otp: string;
}

export interface MessageResponse {
  message: string;
}

const clearAuthCookies = () => {
  Cookies.remove("userToken");
  Cookies.remove("refreshToken");
};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: (credentials) => ({
        url: "/student-auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.set("userToken", data.token, { expires: 7 });
          Cookies.set("refreshToken", data.refreshToken, { expires: 30 });
          window.location.href = "/user/dashboard";
        } catch {
          clearAuthCookies();
        }
      },
    }),
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: (payload) => ({
        url: "/student-auth/signup",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          window.location.href = "/verify-otp";
        } catch {
          clearAuthCookies();
        }
      },
    }),
    logout: builder.query<MessageResponse, void>({
      query: () => ({
        url: "/student-auth/logout",
        method: "POST",
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch {
          clearAuthCookies();
        } finally {
          clearAuthCookies();
          window.location.href = "/login";
        }
      },
    }),
    profile: builder.query<ProfileResponse, void>({
      query: () => "/student-auth/profile",
      providesTags: ["Profile"],
    }),
    changePassword: builder.mutation<MessageResponse, ChangePasswordRequest>({
      query: (body) => ({
        url: "/student-auth/change-password",
        method: "POST",
        body,
      }),
    }),
    updateProfile: builder.mutation<ProfileResponse, UpdateProfileRequest>({
      query: (body) => ({
        url: "/student-auth/update-profile",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Profile", "User"],
    }),
    confirmOtp: builder.mutation<MessageResponse, ConfirmOtpRequest>({
      query: (body) => ({
        url: "/student-auth/confirm-otp",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useProfileQuery,
  useLogoutQuery,
  useLazyLogoutQuery,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useConfirmOtpMutation,
} = authApi;
