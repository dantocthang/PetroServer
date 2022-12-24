import mongoose from 'mongoose';

const TypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Type', TypeSchema);