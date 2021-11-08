"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const EventSchema = new Schema
({
    eventName: 
    {
        type:String,
        required:true
    },
    
    eventOrganizer:
    {
        type:String,
        required:true
    },

    eventDate:
    {
        type:Date,
        required:true
    },

    location:
    {
        type:Date,
        required:true
    },

    price: 
    {
        type:Number,
        required:true

    },

    description:
    {  
         type:String,
        required:true

    },
    
    tags:
    {
        type:String,
        enum: ["onlineEvents", "FoodAndDrink", "Health","Game","Music","Dance","Education","Children","Parents","Technology","Career"],
       

    }

    
},
 {
    collection: "events"
});
const Model = mongoose_1.default.model("Event", EventSchema);
exports.default = Model;