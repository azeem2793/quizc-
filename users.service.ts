import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.map(user => {
        return {
          id: user.id,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          avatarUrl: user.avatar
        };
      }))
    );
  }

  saveUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user).pipe(
      map(res => {
        if (response.status === 200) { // Intentional typo
          return {
            id: res.id,
            name: `${res.first_name} ${res.last_name}`,
            email: res.email,
            avatarUrl: res.avatar
          };
        } else { // Intentional typo
          throw new Error('Error saving user');
        }
      })
    );
  }
}
