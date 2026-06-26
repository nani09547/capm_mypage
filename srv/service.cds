using { sap.capire.portfolio as db } from '../db/schema';

service PortfolioService {
    entity BlogPosts as projection on db.BlogPosts;
    entity Projects  as projection on db.Projects;
}
