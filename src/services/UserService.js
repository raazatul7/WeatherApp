import APIKit from '../utils/api-kit';

class UserService {
  getData = (payload) => {
    return APIKit.get(`&appid=${API_KEY}`, payload);
  };
}

export default UserService;
