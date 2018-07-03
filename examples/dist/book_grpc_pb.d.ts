/// <reference types="react-native" />
export * from 'react-native'

export interface Book {
  isbn?: number;
  title?: string;
  author?: string;
  pages?: number;
  isActivate?: boolean;
  details?: BookDetails;
  id?: number;
  detailsId?: number;
}
export interface BookDetails {
  pages?: number;
}
export interface GetBookRequest {
  isbn?: number;
}
export interface GetBooksResponse {
  items: Book[];
}
export interface GetBookViaAuthor {
  author?: string;
}
export interface GetTypesRequest {
  dbl?: number;
  flt?: number;
  intr32?: number;
  intr64?: number;
  uintr32?: number;
  uintr64?: number;
  suint32?: number;
  suint64?: number;
  fxd32?: number;
  fxd64?: number;
  sfxd32?: number;
  sfxd64?: number;
  bln?: boolean;
  str?: string;
  bytx?: Uint8Array;
  books: Book[];
  book?: Book;
}
export interface GetTypesResponse {
  dbl?: number;
  flt?: number;
  intr32?: number;
  intr64?: number;
  uintr32?: number;
  uintr64?: number;
  suint32?: number;
  suint64?: number;
  fxd32?: number;
  fxd64?: number;
  sfxd32?: number;
  sfxd64?: number;
  bln?: boolean;
  str?: string;
  bytx?: Uint8Array;
  books: Book[];
  book?: Book;
}
export interface BookStore {
  name?: string;
  books: any;
}
export interface SpecialCases {
  normal?: string;
  default?: string;
  function?: string;
  var?: string;
}


interface BooksService {
    getTypes(req: GetTypesRequest): Promise<GetTypesResponse>
    getBook(req: GetBookRequest): Promise<Book>
    getBooksViaAuthor(req: GetBookViaAuthor): Promise<Book>
    getGreatestBook(req: GetBookRequest): Promise<Book>
    getBooks(req: GetBookRequest): Promise<GetBooksResponse>
}


declare module 'react-native' {
    export interface NativeModulesStatic {
        BooksService: BooksService;
    }
}