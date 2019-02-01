import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContactWithID,
  deleteContact
} from '../controllers/crmController';

const routes = app => {
  app
    .route('/contact')
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request from: ${req.method}`);
      next();
    }, getContacts)

    .post(addNewContact);

  app
    .route('/contact/:contactId')
    .get(getContactWithID)

    .put(updateContactWithID)
    .delete(deleteContact);
};

export default routes;
