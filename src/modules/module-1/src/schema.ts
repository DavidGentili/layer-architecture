import { Schema, model } from "mongoose";
import { IModule1Document, IObjectParam } from "../types";


const ObjectParamSchema = new Schema<IObjectParam>({

}, {
    timestamps: false,
    versionKey: false,
})

const Module1Schema = new Schema<IModule1Document>({
    stringParam: { type: String },
    numberParam: { type: Number },
    booleanParm: { type: Boolean },
    objectParam: { type: ObjectParamSchema },
}, {
    versionKey: false,
    timestamps: true,

    methods: {
        toJSONFor() {
            return this
        }
    }
})

export default model<IModule1Document>('Module-1', Module1Schema);