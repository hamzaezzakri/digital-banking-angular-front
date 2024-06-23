export interface AccountDetails {
  accountId: string;
  balance: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  accountOperationDTOs: AccountOperationDTOS[];
}

export interface AccountOperationDTOS {
  id: number;
  operationDate: Date;
  amount: number;
  type: string;
  description: string;
}
