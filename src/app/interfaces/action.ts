export type Action = {
    name: string;
    mark: string;
    test: string;
    limite: string;
    type: string;
    page: number;
  }
  
export type Category = {
    name: string;
    show: boolean;
    actions: Action[]
}