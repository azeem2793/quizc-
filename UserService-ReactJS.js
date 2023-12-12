export class UserService {
  static apiUrl = 'https://api.example.com/users';

  static async getUsers() {
    try {
      const response = await fetch(UserService.apiUrl);
      const users = await response.json();
      return users.map(user => ({
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        avatarUrl: user.avatar,
      }));
    } catch (error) {
      console.error('Error fetching users', error);
      throw error;
    }
  }

  static async saveUser(user) {
    try {
      const response = await fetch(UserService.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const res = await response.json();
      if (response.status === 200) {
        return {
          id: res.id,
          name: `${res.first_name} ${res.last_name}`,
          email: res.email,
          avatarUrl: res.avatar,
        };
      } else {
        throw new Error('Error saving user');
      }
    } catch (error) {
      console.error('Error saving user', error);
      throw error;
    }
  }
}
