import axios from 'axios';

export interface IPayload {
  url: string
  method: undefined
  data: Record<string, unknown>
  onSuccess: string
  onError: string
}

export interface IAction {
  type: string
  payload: IPayload
}

const api = (store: any) => (next: any) => async (action: IAction) => {
  if (action.type !== "apiCallBegan") return next(action);

  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({
      baseURL:  'http://localhost:9001/api',
      url, 
      method,
      data
    });
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch(error) {
    store.dispatch({ type: onError, payload: error });
  }
}

export default api;