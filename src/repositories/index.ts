import { getDocuments, getDocumentById, getDocumentsByCollectionsOfIds, getCount, getPage } from './src/get';
import { createDocument } from './src/create';
import { updateDocument } from './src/update';
import { deleteDocument } from './src/delete';
import { IDB } from '@/types';

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