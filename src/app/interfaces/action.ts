export type Action = {
    name: string;
    mark: string;
    test: string;
    limit: string;
    type: string;
    page: number;
  }
  
export type Category = {
    name: string;
    actions: Action[]
}