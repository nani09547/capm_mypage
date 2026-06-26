namespace sap.capire.portfolio;

entity BlogPosts {
    key ID        : Integer;
        title     : String(200);
        excerpt   : String(500);
        content   : LargeString;
        tags      : String(200);
        date      : Date;
        published : Boolean default true;
}

entity Projects {
    key ID          : Integer;
        title       : String(200);
        description : String(500);
        tags        : String(200);
        githubUrl   : String(300);
        liveUrl     : String(300);
        emoji       : String(10);
        featured    : Boolean default false;
}
