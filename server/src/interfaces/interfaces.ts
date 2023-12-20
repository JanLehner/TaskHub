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
  description: string;
  dueDate: string;
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

export interface IGetPublicBoards {
  username: string;
  passwords: IPasswordBoard[];
}
export interface IPasswordBoard {
  title: string;
  password: string;
}