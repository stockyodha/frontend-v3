import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom, map } from 'rxjs';
import { GQLMutation, GQLQuery } from 'src/app/model/graphqlTypes';

const CHECK_USERNAME = gql`
  query Query($username: String!) {
    checkUsername(username: $username)
  }
`;

const REGISTER = gql`
mutation Register($username: String!) {
  register(username: $username)
}
`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  register(username: string): Promise<boolean> {
    const result = firstValueFrom(this.apollo.mutate({
        mutation: REGISTER,
        variables: {
          username
        }
      }).pipe(map(result => {
          const data = result.data as GQLMutation;
          return data.register;
        })
      )
    );
    return result;
  }
}
