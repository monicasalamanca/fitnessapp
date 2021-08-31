import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction<{url: string, onSuccess: string}>("api/callBegan");
export const apiCallSuccess = createAction<any>("api/callSuccess");
export const apiCallFailed = createAction<string>("api/callFailed");