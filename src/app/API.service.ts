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
  profileImage?: string | null;
};

export type UpdatePersonInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  jobTitle?: string | null;
  profileImage?: string | null;
};

export type DeletePersonInput = {
  id?: string | null;
};

export type CreateExpenseInput = {
  id?: string | null;
  title?: string | null;
  amount?: number | null;
  date?: string | null;
};

export type UpdateExpenseInput = {
  id: string;
  title?: string | null;
  amount?: number | null;
  date?: string | null;
};

export type DeleteExpenseInput = {
  id?: string | null;
};

export type ModelPersonFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  jobTitle?: ModelStringFilterInput | null;
  profileImage?: ModelStringFilterInput | null;
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

export type ModelExpenseFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  amount?: ModelIntFilterInput | null;
  date?: ModelStringFilterInput | null;
  and?: Array<ModelExpenseFilterInput | null> | null;
  or?: Array<ModelExpenseFilterInput | null> | null;
  not?: ModelExpenseFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type CreatePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type UpdatePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type DeletePersonMutation = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type CreateExpenseMutation = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
};

export type UpdateExpenseMutation = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
};

export type DeleteExpenseMutation = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
};

export type GetPersonQuery = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type ListPersonsQuery = {
  __typename: string;
  items: Array<{
    __typename: "Person";
    id: string;
    name: string;
    email: string | null;
    jobTitle: string | null;
    profileImage: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetExpenseQuery = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
};

export type ListExpensesQuery = {
  __typename: string;
  items: Array<{
    __typename: "Expense";
    id: string;
    title: string | null;
    amount: number | null;
    date: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type OnUpdatePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type OnDeletePersonSubscription = {
  __typename: string;
  id: string;
  name: string;
  email: string | null;
  jobTitle: string | null;
  profileImage: string | null;
};

export type OnCreateExpenseSubscription = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
};

export type OnUpdateExpenseSubscription = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
};

export type OnDeleteExpenseSubscription = {
  __typename: string;
  id: string;
  title: string | null;
  amount: number | null;
  date: string | null;
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
          profileImage
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
          profileImage
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
          profileImage
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
  async CreateExpense(
    input: CreateExpenseInput
  ): Promise<CreateExpenseMutation> {
    const statement = `mutation CreateExpense($input: CreateExpenseInput!) {
        createExpense(input: $input) {
          __typename
          id
          title
          amount
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateExpenseMutation>response.data.createExpense;
  }
  async UpdateExpense(
    input: UpdateExpenseInput
  ): Promise<UpdateExpenseMutation> {
    const statement = `mutation UpdateExpense($input: UpdateExpenseInput!) {
        updateExpense(input: $input) {
          __typename
          id
          title
          amount
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateExpenseMutation>response.data.updateExpense;
  }
  async DeleteExpense(
    input: DeleteExpenseInput
  ): Promise<DeleteExpenseMutation> {
    const statement = `mutation DeleteExpense($input: DeleteExpenseInput!) {
        deleteExpense(input: $input) {
          __typename
          id
          title
          amount
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteExpenseMutation>response.data.deleteExpense;
  }
  async GetPerson(id: string): Promise<GetPersonQuery> {
    const statement = `query GetPerson($id: ID!) {
        getPerson(id: $id) {
          __typename
          id
          name
          email
          jobTitle
          profileImage
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
            profileImage
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
  async GetExpense(id: string): Promise<GetExpenseQuery> {
    const statement = `query GetExpense($id: ID!) {
        getExpense(id: $id) {
          __typename
          id
          title
          amount
          date
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetExpenseQuery>response.data.getExpense;
  }
  async ListExpenses(
    filter?: ModelExpenseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListExpensesQuery> {
    const statement = `query ListExpenses($filter: ModelExpenseFilterInput, $limit: Int, $nextToken: String) {
        listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            amount
            date
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
    return <ListExpensesQuery>response.data.listExpenses;
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
          profileImage
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
          profileImage
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
          profileImage
        }
      }`
    )
  ) as Observable<OnDeletePersonSubscription>;

  OnCreateExpenseListener: Observable<
    OnCreateExpenseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateExpense {
        onCreateExpense {
          __typename
          id
          title
          amount
          date
        }
      }`
    )
  ) as Observable<OnCreateExpenseSubscription>;

  OnUpdateExpenseListener: Observable<
    OnUpdateExpenseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateExpense {
        onUpdateExpense {
          __typename
          id
          title
          amount
          date
        }
      }`
    )
  ) as Observable<OnUpdateExpenseSubscription>;

  OnDeleteExpenseListener: Observable<
    OnDeleteExpenseSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteExpense {
        onDeleteExpense {
          __typename
          id
          title
          amount
          date
        }
      }`
    )
  ) as Observable<OnDeleteExpenseSubscription>;
}
