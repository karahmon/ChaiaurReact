import config from "../config/config";
import { Client, Account, ID,Storage,Databases,Query } from "appwrite";

export class Service{
    client= new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appwWriteProjectId);
        this.databases= new Databases(this.client)
        this.bucket= new Storage(this.client)
    }
    async createPost(title,slug,content,featuredImage,status,userId){
        try {
            return await this.databases.createDocument(config.appWriteDatabaseID,appWriteCollectionID,ID.unique(),{title,slug,content,featuredImage,status,userId})
             } 
             catch (error) {
            console.log("Appwrite Services::createPost::error",error);
        }

    }
    async updatePost(documentID,{title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(config.appWriteDatabaseID,appWriteCollectionID,documentID,{title,slug,content,featuredImage,status,userId})
             } 
             catch (error) {
            console.log("Appwrite Services::updatePost::error",error);
        }

    }
    async deletePost(documentID){
        try {
            await this.databases.deleteDocument(config.appWriteDatabaseID,appWriteCollectionID,documentID)
            return true;
        } 
             catch (error) {
            console.log("Appwrite Services::deletePost::error",error);
            return false;
        }

    }
    async getPost(documentID){
        try {
           return await this.databases.getDocument(config.appWriteDatabaseID,appWriteCollectionID,documentID)
            
        } 
             catch (error) {
            console.log("Appwrite Services::getPost::error",error);
        }

    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
           return await this.databases.listDocuments(config.appWriteDatabaseID,appWriteCollectionID,queries)
            
        } 
             catch (error) {
            console.log("Appwrite Services::getPosts::error",error);
            return false;
        }

    }
    async uploadFile(file){
        try {
           return await this.bucket.createFile(config.appWriteBucketID,ID.unique(),file)
            
        } 
             catch (error) {
            console.log("Appwrite Services::uploadFiles::error",error);
            return false;
        }

    }
    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(config.appWriteBucketID,fileID)
            return true; 
        } 
             catch (error) {
            console.log("Appwrite Services::deleteFiles::error",error);
            return false;
        }

    }
    async getFilePreview(fileID){
        try {
           return this.bucket.getFilePreview(config.appWriteBucketID,fileID)
         
        } 
             catch (error) {
            console.log("Appwrite Services::getFilePreview::error",error);
            return false;
        }

    }

    
}
const service = new Service()
export default service;