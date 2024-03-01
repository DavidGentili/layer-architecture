import { Schema, model } from "mongoose";
import { ITaskDocument } from "../types";

const TaskSchema = new Schema<ITaskDocument>({
    title: { type: String, required: true },
    description: { type: String },
    active: { type: Boolean, default: true },
    color: { type: String },
}, {
    versionKey: false,
    timestamps: true,

    methods: {
        toJSONFor() {
            return this
        }
    }
})

export default model<ITaskDocument>('Module-1', TaskSchema);