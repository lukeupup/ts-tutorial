/**
 * React and redux
 */

import React, { Component } from "react";

type User = {
  id: string;
  username: string;
};

type UserProfileProps = {
  user: User;
};

export const UserProfile: React.FC<UserProfileProps> = props => {
  return (
    <div>
      <h1>{props.user.id}</h1>
      <h1>{props.user.username}</h1>
    </div>
  );
};

type Query = {
  username: string;
};
type UserListState = {
  users: User[];
};
type UserListProps = {
  readonly query: Query;
};
const getUsers = async (query: Query): Promise<User[]> => {
  return [
    { id: "user1", username: "Peter" },
    { id: "user1", username: "Alice" }
  ];
};

export class UserList extends Component<UserListProps, UserListState> {
  // don't do state reassignment without types, it will override the type from generic types
  // state = {
  //   users: []
  // };
  // you can do this
  // state: UserListState = {
  //   users: []
  // };
  // better to do this
  constructor(props: UserListProps) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = await getUsers(this.props.query);
    this.setState({ users });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map(user => (
          <UserProfile user={user} />
        ))}
      </div>
    );
  }
}
