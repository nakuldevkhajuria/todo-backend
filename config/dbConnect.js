const mongoose = require('mongoose')

const dbConnect = async ()=>{



try {
   await mongoose.connect("mongodb://0.0.0.0:27017/circles")
  console.log('database is connected')

} 

catch (error) {
    throw error
}
}

module.exports = dbConnect