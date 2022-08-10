import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, ButtonGroup, Container, makeStyles } from '@material-ui/core'
import ArrowForward from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { useState } from 'react';
import { FormControlLabel,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  margin : {
    margin : 5,
  }

}))

export default function Create() { 
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [titleError,setTitleError] = useState(false)
  const [detailsError,setDetailsError] = useState(false)
  const [category,setCategory] = useState('todos')
  const [age,setAge] = useState('')
  const history = useHistory()
  const classes = useStyles()
  const handlesubmit = (e)=>{
    setTitleError(false)
    setDetailsError(false)
   
    if(title == ''){
      setTitleError(true)
    }
    if(details == ''){
      setDetailsError(true)
    }
    e.preventDefault();
    if(title && details){
      fetch('http://localhost:8000/notes',{
        method : 'post',
        headers : {
          "content-type" : 'application/json'
        },
        body : JSON.stringify({title,details,category})
      })
      .then(()=> history.push('/'))
      const user = {
        title : title,
        details : details,
        category : category,
        age : age
      }
      console.log(user);
      setTitle('');
      setDetails('');
    }
      
  }
  return (
    <Container>
      <Typography 
        variant='h6'
        component='h2'
        color="textSecondary"
        gutterBottom
        error={titleError}
        >
        Create a New Note
      </Typography>

      <form className='margin' noValidate autoComplete='off' onSubmit={handlesubmit}>
        <TextField
          className={classes.margin}
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          label="Note Title"
          variant="outlined"
          color='secondary'
          error={titleError}
          fullWidth
          required
          />
          <TextField
          className={classes.margin}
          spacing={3}
          value={details}
          onChange={(e)=>{setDetails(e.target.value)}}
          label="Details"
          variant="outlined"
          color='secondary'
          multiline
          error={detailsError}
          minRows ={2}
          maxRows={4}
          fullWidth
          required
          />
          <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
            <FormControlLabel value='money' control={<Radio/>} label="money"/>
            <FormControlLabel value='todos' control={<Radio/>} label ="todos"/>
            <FormControlLabel value='reminders' control={<Radio/>} label ="reminders"/>
            <FormControlLabel value='work' control={<Radio/>} label ="work"/>
          </RadioGroup>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={(e)=> setAge(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          {/* <Button type="submit" variant='outlined' color='secondary'>submit</Button> */}
          <Button
              endIcon={<ArrowForward/>}
              type="submit" color='secondary'
              variant='contained'>Submit</Button>
      </form>
      
      {/* <Button type="submit" color="primary" variant="outlined">submit</Button>
      <ButtonGroup color="secondary" variant ="contained" >
        <Button>one</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      
       <br/>
    </Container>
  )
}
