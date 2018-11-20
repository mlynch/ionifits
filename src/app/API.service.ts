/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreatePersonInput = {
  id?: string | null;
  name: string;
  email?: string | null;
  jobTitle?: string | null;
};

export type UpdatePersonInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  jobTitle?: string | null;
};

export type DeletePersonInput = {
  id?: string | null;
};

export type ModelPersonFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  jobTitle?: ModelStringFilterInput | null;
  and?: Array<ModelPersonFilterInput | null> | null;
  or?: Array<ModelPersonFilterInput | null> | null;
  not?: ModelPersonFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreatePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

export type UpdatePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

export type DeletePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

export type GetPersonQuery = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

export type ListPersonsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Person";
    id: string;
    name: string;
    email: string | null;
    jobTitle: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

export type OnUpdatePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

export type OnDeletePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePerson(input: CreatePersonInput): Promise<CreatePersonMutation> {
    const statement = `mutation CreatePerson($input: CreatePersonInput!) {
        createPerson(input: $input) {
          __typename
          id
          name
          email
          jobTitle
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePersonMutation>response.data.createPerson;
  }
  async UpdatePerson(input: UpdatePersonInput): Promise<UpdatePersonMutation> {
    const statement = `mutation UpdatePerson($input: UpdatePersonInput!) {
        updatePerson(input: $input) {
          __typename
          id
          name
          email
          jobTitle
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePersonMutation>response.data.updatePerson;
  }
  async DeletePerson(input: DeletePersonInput): Promise<DeletePersonMutation> {
    const statement = `mutation DeletePerson($input: DeletePersonInput!) {
        deletePerson(input: $input) {
          __typename
          id
          name
          email
          jobTitle
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePersonMutation>response.data.deletePerson;
  }
  async GetPerson(id: string): Promise<GetPersonQuery> {
    const statement = `query GetPerson($id: ID!) {
        getPerson(id: $id) {
          __typename
          id
          name
          email
          jobTitle
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPersonQuery>response.data.getPerson;
  }
  async ListPersons(
    filter?: ModelPersonFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPersonsQuery> {
    const statement = `query ListPersons($filter: ModelPersonFilterInput, $limit: Int, $nextToken: String) {
        listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            jobTitle
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPersonsQuery>response.data.listPersons;
  }
  OnCreatePersonListener: Observable<OnCreatePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePerson {
        onCreatePerson {
          __typename
          id
          name
          email
          jobTitle
        }
      }`
    )
  ) as Observable<OnCreatePersonSubscription>;

  OnUpdatePersonListener: Observable<OnUpdatePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePerson {
        onUpdatePerson {
          __typename
          id
          name
          email
          jobTitle
        }
      }`
    )
  ) as Observable<OnUpdatePersonSubscription>;

  OnDeletePersonListener: Observable<OnDeletePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePerson {
        onDeletePerson {
          __typename
          id
          name
          email
          jobTitle
        }
      }`
    )
  ) as Observable<OnDeletePersonSubscription>;
}
