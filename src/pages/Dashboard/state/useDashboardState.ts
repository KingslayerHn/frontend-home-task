import axios from 'axios';
import { useEffect, useState } from 'react';
import { config } from '../../../config/config';
import { UserGithuInterface } from '../../../interfaces/userGithubInterface';

const useDashboardState = () => {
  const [user, setUser] = useState<UserGithuInterface>();
  useEffect(() => {
    const getUserInfo = async () => {
      const res = await axios.get(`${config.baseUrl}/users/KingslayerHn`);
      setUser(res.data);
    };

    getUserInfo();
  }, []);
  return {
    user,
  };
};

export default useDashboardState;
