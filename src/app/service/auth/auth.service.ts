
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { GQLQuery, GQLUser } from 'src/app/model/graphqlTypes';

const CHECK_USERNAME = gql`
  query Query($username: String!) {
    checkUsername(username: $username)
  }
`;

const ME = gql`
query Me {
  me {
    createdAt
    deletedAt
    email
    id
    isAdmin
    updatedAt
    username
  }
}
`;

const LOGIN = gql`
query Query($password: String!, $username: String!) {
  login(password: $password, username: $username)
}
`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private apollo: Apollo) { }

  checkUsername(username: string):  Promise<boolean>{
    const result = firstValueFrom(this.apollo.query({
        query: CHECK_USERNAME,
        variables: {
          username
        }
      }).pipe(map(result => {
          const data = result.data as GQLQuery;
          return data.checkUsername;
        })
      )
    );
    return result;
  }

  me(): Promise<GQLUser> {
   return firstValueFrom(this.apollo.query({
      query: ME,
      errorPolicy: 'ignore'
    }).pipe(map(result => {
        const data = result.data as GQLQuery;
        console.log(data);
        if (data == null) {
          throw new Error('Not logged in');
        }
        return data.me;
      })
    ));
  }


  login(username: string, password: string): Promise<boolean> {
    const result = firstValueFrom(this.apollo.query({
        query: LOGIN,
        variables: {
          username,
          password
        }
      }).pipe(map(result => {
          const data = result.data as GQLQuery;
          return data.login;
        })
      )
    );
    return result;
  }

}
