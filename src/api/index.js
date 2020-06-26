import UserService from './userService'
import TransactionsService from './transactionsService';
import StatsService from './statsService';

const options = {
  baseURL: process.env.REACT_APP_API_BASE_URL
};

export default {
  users: new UserService(options),
  transactions: new TransactionsService(options),
  stats: new StatsService(options)
}
