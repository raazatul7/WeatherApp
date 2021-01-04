import APIKit from '../utils/api-kit';
class UserService {
  getData = (url) => {
    return APIKit.get(url);
  };
}

export default UserService;
