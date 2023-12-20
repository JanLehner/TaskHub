export interface ILoginForm {
  username: string;
  password: string;
}

export interface IRegisterForm {
  username: string;
  password: string;
}

export interface IJWTData {
  username: string;
}

export interface ITask {
  title: string;
  definition: string;
  owner: string;
} 

export interface IBoard {
  owner: string;
  title: string;
  tasks: ITask[];
  public: boolean;
  password?: string;
}

export interface IAddPublicBoard {
  title: string;
  owner: string;
}