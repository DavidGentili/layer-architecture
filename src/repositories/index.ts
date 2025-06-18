import { createDocument } from './src/create';
import { deleteDocument } from './src/delete';
import { getCount, getDocumentById, getDocuments, getDocumentsByCollectionsOfIds, getPage } from './src/get';
import { updateDocument } from './src/update';
import { IDB } from './types';

const DB: IDB = {
    get: getDocuments,
    getCount,
    getById: getDocumentById,
    getByCollectionsOfIds: getDocumentsByCollectionsOfIds,
    getPage,
    create: createDocument,
    update: updateDocument,
    delete: deleteDocument
}

export default DB;