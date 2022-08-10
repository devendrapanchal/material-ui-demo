import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

import NoteCard from '../components/NoteCard'

export default function Notes() {
  const [notes,setNotes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then (data => setNotes(data))
  },[])
  const handleDelete = async(id) => {
    await fetch('http://localhost:8000/notes/'+ id,{
      method : "DELETE"
    })
    const newNotes = notes.filter((note) => {
      return note.id !=id
    })
    setNotes(newNotes)
  }
  return (
    <div>
      <Container >
        <Grid container spacing={3} >
          {notes && notes.map((note)=>(
            <Grid item key ={note.id} xs ={12} md={6} lg={4}>
              <NoteCard handleDelete ={handleDelete} note ={note}/>
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </div>
  )
}
