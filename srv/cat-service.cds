using my.bookshop as my from '../db/data-model';

service CatalogService {
            entity Books as projection on my.Books;
            entity Dictionary as projection on my.Dictionary;
            entity student as projection on my.student;
}
