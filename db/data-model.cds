namespace my.bookshop;

entity Books {
  key ID               : Integer;
      title            : String;
      stock            : Integer;
      author           : String;
      genre            : String;
      publication_year : Integer;
      price            : Decimal;
      Language         : String;
      Dict         : Association to Dictionary;
      stmarks : Association to student;

}

entity Dictionary {
  key ID          : Integer;
      dicname     : String;
      description : String;
      rating      : Decimal;

}

entity student {
   key ID          : Integer;
   stname : String;
   stdetails : String;
   st_marks :  Integer;
}
