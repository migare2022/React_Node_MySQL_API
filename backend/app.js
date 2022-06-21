
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const port = process.env.PORT || 5002;
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use(morgan('combined'))

//mysql database configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ubuntumysql',
  database: 'test_API_DB',
  insecureAuth: true
})




app.post("/addnote",  (req, res)=> {
  
  
  const note = req.body;

 
  console.log(note.id);
 
  let insertQuery = `insert into notes( user_id, title, body, edited,state ) 
                     values( '${note.user_id}', '${note.title}', 
                     '${note.body}', '${note.edited}', '${note.state}')`

  connection.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{
          console.log(err.message) 
          
        }
  })
  connection.end;
})



app.get("/notes", (req, res) => {


  console.log("Fetching all notes")

  const noteId = req.params.id
  const queryString = "SELECT * FROM notes"
  connection.query(queryString, [noteId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for notes: " + err)
      res.sendStatus(500)
      return
      // throw err
    }


    console.log("Notes retrieved, attempting to show result")

    const notes = rows.map((row) => {
      return {id: row.id, user_id: row.user_id, title: row.title , body: row.body , edited: row.edited, state: row.state}
    })

    
    res.json(notes)


  })
})




app.delete('/delnote/:id', (req, res) => {
 
  console.log("******* Deleting notes with id: ********" + req.params.id)


  const noteId = req.params.id
  const queryString = "UPDATE notes SET state=3 WHERE id = ?"
  connection.query(queryString, [noteId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to delete note: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

  

  })

  connection.end;
 
})



app.post('/archnote/:id', (req, res) => {
 
  console.log("******* Archiving note with id: ********" + req.params.id)


  const noteId = req.params.id
  const queryString = "UPDATE notes SET state=1 WHERE id = ?"
  connection.query(queryString, [noteId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for note: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

  

  })

  connection.end;
 
})




app.post('/unarchnote/:id', (req, res) => {
 
  console.log("******* Un-Archiving note with id: ********" + req.params.id)


  const noteId = req.params.id
  const queryString = "UPDATE notes SET state=0 WHERE id = ?"
  connection.query(queryString, [noteId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for note: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

  

  })

  connection.end;
 
})



app.get('/notes/:id', (req, res) => {
  console.log("Fetching notes with id: " + req.params.id)

  const noteId = req.params.id
  const queryString = "SELECT * FROM notes WHERE id = ?"
  connection.query(queryString, [noteId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for note: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("Notes retrieved, attempting to show result")

    const notes = rows.map((row) => {
      return {id: row.id, user_id: row.user_id, title: row.title , body: row.body , edited: row.edited, state: row.state}
    })

    
    res.json(notes)


  })
})


app.get('/notesstate/:state', (req, res) => {

  console.log("################## LLego el get.... ##################")

//  console.log("Fetching notes with state: " + req.params.state  )

  const stt = req.params.state
  const queryString = "SELECT * FROM notes WHERE state = ?"
  connection.query(queryString, [stt], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query notes: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("User retrieved, attempting to show result")

    const notes = rows.map((row) => {
      return {id: row.id, user_id: row.user_id, title: row.title , body: row.body , edited: row.edited, state: row.state}
    })

    
    res.json(notes)


  })
})



app.listen(port, () => console.log(`Listening on port ${port}`));
