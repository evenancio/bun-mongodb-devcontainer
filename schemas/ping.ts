import * as mongoose from 'mongoose';

const pingSchema = new mongoose.Schema({
    count: {type: Number, required: true, default: 1}
});

export type Ping = mongoose.InferSchemaType<typeof pingSchema>;
export const Ping = mongoose.model('ping', pingSchema);