interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
}

interface ICategory {
  ID: number;
  Name: string;
}
// user in cards (name,username,email
interface IUser {
  Name: string;
  UserName: string;
  Email: string;
}
interface IPost {
  ID: number;
  Title: string;
  Body: string;
}
//enum is a special type that allows us to define a set of named constants
enum DiscountOffer {
  NoDiscount = 'No Discount',
  TenPercent = '10',
  FifteenPercent = '15',
}
export { IProduct, ICategory, DiscountOffer, IUser, IPost };
