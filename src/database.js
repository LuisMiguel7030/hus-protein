import mongoose from 'mongoose';

const URI = 'mongodb://localhost/hus-protein';

const con = mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

export default mongoose;