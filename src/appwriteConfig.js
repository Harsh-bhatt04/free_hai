import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66178b1e2d8c2d201c9e');

export const account = new Account(client);
export const db = new Databases(client,"6617ee823c0be95de356");
export default client;